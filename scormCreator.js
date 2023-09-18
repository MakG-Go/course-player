// Подключение плагинов

// const fs = require('fs');
// const path = require('path');
// const xml2js = require('xml2js');
// const archiver = require('archiver');

// // Конфиг сборки
// const packageData = require('./config.json');

import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';
import archiver from 'archiver';
import packageData from './config.js';


const config = {
    standard: packageData.standard,
    name: packageData.name,
    id: packageData.id,
    patch: packageData.patch,
};

// Статичная шапка манифеста с ссылками
const imsManifestHeader = {
    SCORM2004: {
        xmlns: 'http://www.imsglobal.org/xsd/imscp_v1p1',
        'xmlns:adlcp': 'http://www.adlnet.org/xsd/adlcp_v1p3',
        'xmlns:adlseq': 'http://www.adlnet.org/xsd/adlseq_v1p3',
        'xmlns:adlnav': 'http://www.adlnet.org/xsd/adlnav_v1p3',
        'xmlns:imsss': 'http://www.imsglobal.org/xsd/imsss',
        'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
        'xmlns:lom': 'http://ltsc.ieee.org/xsd/LOM',
        identifier: 'com.scorm.manifesttemplates.scorm2004.4thEd',
        version: '1',
        'xsi:schemaLocation': '://www.imsglobal.org/xsd/imscp_v1p1 imscp_v1p1.xsd http://www.adlnet.org/xsd/adlcp_v1p3 adlcp_v1p3.xsd http://www.adlnet.org/xsd/adlseq_v1p3 adlseq_v1p3.xsd http://www.adlnet.org/xsd/adlnav_v1p3 adlnav_v1p3.xsd http://www.imsglobal.org/xsd/imsss imsss_v1p0.xsd http://ltsc.ieee.org/xsd/LOM lom.xsd',
    },
    SCORM12: {
        xmlns: 'http://www.imsproject.org/xsd/imscp_rootv1p1p2',
        'xmlns:adlcp': 'http://www.adlnet.org/xsd/adlcp_rootv1p2',
        'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
        'xsi:schemaLocation': 'http://www.imsproject.org/xsd/imscp_rootv1p1p2 imscp_rootv1p1p2.xsd http://www.adlnet.org/xsd/adlcp_rootv1p2 adlcp_rootv1p2.xsd',
        'identifier': 'MANIFEST-2F09601B_9474_48C9_A940_230D6925273B',
        version: '1.0',
    },
};

// Шаблон пустого манифеста
const imsManifestTemplate = {
    manifest: {
        $: imsManifestHeader[config.standard],
        metadata: [],
        organizations: [],
        resources: {
            resource: []
        },
    },
};

// Функция копирования статичных файлов стандарта курса
function copyFilesToCourse(callback) {
    const sourceDir = './temp' + config.standard;

    fs.readdir(sourceDir, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.error(`Error reading directory ${sourceDir}:`, err);
            return;
        }

        files = files.filter(file => file.isFile() && !/(^|\/)\.[^\/\.]/g.test(file.name));

        let copyCount = 0;

        files.forEach(file => {
            const sourcePath = path.join(sourceDir, file.name);
            const destPath = path.join(config.patch, file.name);

            fs.copyFile(sourcePath, destPath, err => {
                if (err) {
                    console.error(`Error copying file ${sourcePath} to ${destPath}:`, err);
                } else {
                    console.log(`Copied file ${sourcePath} to ${destPath}`);
                    copyCount++;
                    if (copyCount === files.length) {
                        if (callback) {
                            callback();
                        }
                    }
                }
            });
        });
    });
}

// Функция очистки папки курса от временных фалов
function cleanCourseFolder() {
    fs.readdir(config.patch, (err, files) => {
        if (err) throw err;

        files.forEach(file => {
            const filePath = path.join(config.patch, file);

            // Проверяем, является ли файл форматом xsd, dtd или xml
            if (/\.(xsd|dtd|xml|xsx)$/.test(filePath)) {
                // Если да, то удаляем файл
                fs.unlink(filePath, err => {
                    if (err) throw err;
                    console.log(`Uninstall temp file: ${filePath}`);
                });
            }
        });
    });
}

// Создание арихива курса
function createZipArchive() {
    // const output = fs.createWriteStream(path.join('./' + config.id + '.zip'));
    // const archive = archiver('zip', { zlib: { level: 9 } });

    const zipFileName = `${config.id}.zip`;
    const outputPath = path.join('./SCORM', zipFileName);

    const output = fs.createWriteStream(outputPath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', function () {
        console.log(`Zip archive created: ${archive.pointer()} total bytes`);

        cleanCourseFolder();
    });

    archive.on('error', function (err) {
        throw err;
    });

    archive.pipe(output);

    // добавляем все файлы и папки из папки курса в архив
    archive.directory(config.patch, false);

    archive.finalize();
}

// Функция заполнения шаблона манифеста, полей методанных для курса
function addMetadataToManifest(manifestObj) {
    return new Promise((resolve, reject) => {
        const metadata = {
            SCORM2004: {
                schema: 'ADL SCORM',
                schemaversion: '2004 4th Edition',
                'lom:lom': [{
                    'lom:general': [{
                        'lom:description': [{
                            'lom:string': [{
                                _: config.name,
                                $: {
                                    language: 'ru-RU'
                                }
                            }]
                        }]
                    }]
                }]
            },
            SCORM12: {
                schema: 'ADL SCORM',
                schemaversion: '1.2',
            }
        };

        manifestObj.manifest.metadata.push(metadata[config.standard]);

        resolve(manifestObj);
    });
}

// Функция заполнения шаблона манифеста, полей организации для курса
function addOrganizationsToManifest(manifestObj) {
    return new Promise((resolve, reject) => {
        const organizations = {
            SCORM2004: {
                $: {
                    default: config.id
                },
                organization: [{
                    $: {
                        identifier: config.id,
                        'adlseq:objectivesGlobalToSystem': 'false'
                    },
                    title: [{
                        _: config.name
                    }],
                    item: [{
                        $: {
                            identifier: 'i1',
                            identifierref: 'r1',
                            isvisible: 'true'
                        },
                        title: [{
                            _: config.name
                        }]
                    }]
                }]
            },
            SCORM12: {
                $: {
                    default: config.id
                },
                organization: [{
                    $: {
                        identifier: config.id,
                    },
                    title: [{
                        _: config.name
                    }],
                    item: [{
                        $: {
                            identifier: 'i1',
                            identifierref: 'r1',
                        },
                        title: [{
                            _: config.name
                        }]
                    }]
                }]
            }
        };

        manifestObj.manifest.organizations.push(organizations[config.standard]);
        resolve(manifestObj);
    });
}

// Функция заполнения шаблона манифеста, полей ресурсов
function addResourcesToManifest(manifestObj) {
    return new Promise((resolve, reject) => {
        const resource = {
            SCORM2004: {
                $: {
                    identifier: 'r1',
                    type: 'webcontent',
                    'adlcp:scormType': 'sco',
                    href: 'scormcontent/index.html'
                },
                file: [],
            },
            SCORM12: {
                $: {
                    identifier: 'r1',
                    type: 'webcontent',
                    'adlcp:scormtype': 'sco',
                    href: 'scormcontent/index.html'
                },
                file: [],
            },
        };

        const addFile = (dir, parent) => {
            const files = fs.readdirSync(dir);

            for (const file of files) {
                const filePath = path.join(dir, file);
                const fileStat = fs.statSync(filePath);

                if (fileStat.isDirectory()) {
                    addFile(filePath, parent);
                } else {
                    const ext = path.extname(file).toLowerCase();

                    if (['.xml', '.xsd', '.dtd', '.xsx',].indexOf(ext) === -1) {

                        const relativeFilePath = filePath.replace(config.patch + '\\', '');
                        const correctFilePath = '/' + relativeFilePath.replace(/[\\]/g, '/');

                        const fileObj = {
                            $: {
                                // href: filePath.replace(config.patch + '\\', ''),
                                href: correctFilePath
                            },
                        };

                        parent.file.push(fileObj);
                    }
                }


            }
        };

        addFile(config.patch, resource[config.standard]);

        manifestObj.manifest.resources.resource.push(resource[config.standard]);


        resolve(manifestObj);
    });
}

// Функция создания манифеста
function createManifestFile() {

    // const manifestPath = path.join(__dirname, config.patch, 'imsmanifest.xml');
    const manifestPath = `${config.patch}/imsmanifest.xml`;


    // Добавляем метаданные
    addMetadataToManifest(imsManifestTemplate);

    // Добавляем организацию
    addOrganizationsToManifest(imsManifestTemplate);

    // Добавляем ресурсы
    addResourcesToManifest(imsManifestTemplate);

    // Преобразуем объект manifest обратно в XML
    const builder = new xml2js.Builder();
    const xml = builder.buildObject(imsManifestTemplate);

    fs.writeFile(manifestPath, xml, err => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Created ${manifestPath}`);

            createZipArchive();
        }
    });
}

copyFilesToCourse(createManifestFile);