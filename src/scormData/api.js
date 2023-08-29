
// export function createObjective({ _SCORM, key, name, max, min, raw, description, success, completion }) {

//     _SCORM.set('cmi.objectives.' + key + '.id', name);
//     _SCORM.set('cmi.objectives.' + key + '.score.raw', raw);
//     _SCORM.set('cmi.objectives.' + key + '.score.min', min);
//     _SCORM.set('cmi.objectives.' + key + '.score.max', max);
//     _SCORM.set('cmi.objectives.' + key + '.description', description);
//     _SCORM.set('cmi.objectives.' + key + '.success_status', success);
//     _SCORM.set('cmi.objectives.' + key + '.completion_status', completion);
// };

const scormData = {
    "cmi.location": "",
    "cmi.score.raw": "0",
    "cmi.completion_status": "incomplete",
    "cmi.progress_measure": 0.0,
    "cmi.success_status": "unknown"
}


const parseStorageData = () =>
    JSON.parse(localStorage.getItem("scorm-mock-data"));

export const ScormApi = {
    Initialize() {
        const storageData = parseStorageData();

        localStorage.setItem(
            "scorm-mock-data",
            JSON.stringify({ ...scormData, ...(storageData || {}) })
        );

        return "true";
    },

    GetValue(key) {

        const storageData = parseStorageData();
        return storageData?.[key] || "";
    },

    SetValue(key, value) {
        const storageData = parseStorageData();

        if (storageData) {
            storageData[key] = value;
            localStorage.setItem("scorm-mock-data", JSON.stringify(storageData));
        }
    }
};