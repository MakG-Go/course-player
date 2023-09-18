
### Навигация
* [Введение](#введение)
* [Требования к окружению](#требования-к-окружению)
* [Установки зависимостей проекта](#установки-зависимостей-проекта)
* [Как использовать окружение](#как-использовать-окружение)
* [Структура проекта](#структура-проекта)
* [Алеасы](#Алеасы)
* [Глобальные переменные](#Глобальные-переменные)
* [App](#Корневой-файл-курса-App)
* [Состояния](#Состояния)
* [Работа с API](#Передача-данных-в-API)
* [Цели курса](#Цели-курса)
* [Навигация по курсу](#Навигация-по-курсу)
* [VUE практики](#vue-практики)
* [Шрифты](#шрифты)
* [Работа с SVG](#работа-с-svg)


## Внешние ресурсы
* [Правила грамотной вёрстки слайдов](https://labmedia.sharepoint.com/sites/msteams_9ba699/Shared%20Documents/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D0%B8%20%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%BD%D1%8B%D1%85%20%D0%BA%D1%83%D1%80%D1%81%D0%BE%D0%B2/%D0%9F%D1%80%D0%BE%20%D0%B4%D0%B8%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B5%20%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5/%D0%9F%D1%80%D0%BE%20%D0%B4%D0%B8%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B5%20%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5.one#%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0%20%D0%B3%D1%80%D0%B0%D0%BC%D0%BE%D1%82%D0%BD%D0%BE%D0%B9%20%D0%B2%D1%91%D1%80%D1%81%D1%82%D0%BA%D0%B8%20%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%BE%D0%B2&section-id=a1f33730-cf9b-40d0-8886-2fce1ab18f25&page-id=94d4a9ca-6e24-44f0-9fc0-d7b67579a837&end)
* [Инструкция по работе в GitLab](https://portal.labmedia.su/Standards/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F_%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D0%B0_%D0%B2_GitLab.docx)

## Введение
#### Работа с новым проектом
1. При работе с новым проектом необходимо создать репозиторий в [gitlab](https://gitlab.labmedia.su/labmedia). Названием репозитория будет являться имя компании, например, `EL_Raiffeisen_bank`. В каждом проекте необходимо указывать Branches, именем Branches будет являться версийность `main`, при крупном изменении проекта необходимо создавать новую ветку.
1. За создание директории отвечает ведущий разработчик, необходимо дублировать туда [Эталонный шаблон](https://gitlab.labmedia.su/al.v.moksheev/get_start_course), <b>УБЕДИТЕСЬ, что вы копируете последнюю версию шаблона.</b>
1. Эталонный курс находится в папке `Course_branch` шаблона

#### Работа с существующим проектом
1. При работе с уже существующим проектом необходимо сделать `clone` проекта из [gitlab](https://gitlab.labmedia.su/labmedia).
1. После того, как вы дублировали проект, вам необходимо поместить курс себе в папку `Course_branch`, скопировав файлы из эталонного курса этой папки

#### Правило работы
1. Обновление эталонного курса производится ведущим разработчиком текущего проекта.
1. Если в проекте появляется новая практика или компонент, необходимо уведомить руководителя проекта, ведущего разработчика текущего курса и создать задачу на добавление нового компонента в сборщик.

## Требования к окружению
Для создания окружения необходимо иметь следующие установленные инструменты:
-	[Node.js](https://nodejs.org/en/)
-	Git

Если у вас данных инструментов нет, то их необходимо установить.

## Установки зависимостей проекта
Для установки зависимостей проекта необходимо в командной строке ввести команды:
-	`npm install` или `npm i`

## Как использовать окружение
Обычный режим: в командной строке ввести `npm run dev`.
Режим сборки проекта: в командной строке ввести `npm run build`.
Режим компиляции SCORM архива: в командной строке ввести `npm run scorm`.

Для работы необходимо поместить курс в папку `Course_branch/`, если такой папки нет, то её необходимо создать внутри папки `Course_branch`.

В файле vite.config.js в `defineConfig`, в ключах `publicDir, iconDirs, resolve`, необходимо указать имя проекта. Пример с именем проекта `Наушники`:

`publicDir: './src/Course_branch/Наушники/assets', 
iconDirs: [path.resolve(__dirname, './src/Course_branch/Наушники/assets/icons')], 
path.resolve(__dirname, './src/Course_branch/Наушники')`

## Структура проекта

```
project/
├──── packageFolder/ - директория для исходных файлов компиляции SCORM 
├──── node-modules/ - директория для node-модулей
├──── SCORM/ - директория для скомпилированного SCORM архива
├──── tempSCORM12/ - директория со статичными файлами для компиляции SCORM 1.2
├──── tempSCORM2004/ - директория со статичными файлами для компиляции SCORM 2004
└──┬─ src/ - директория для исходных файлов проекта
   ├──── scormcontent/ - директория для скомпилированных файлов проекта 
   └──┬─ src/ - директория для исходных файлов проекта
      ├─── assets/ - директория для обязательных статических файлов
      ├─── components/ - директория для компонентов
      ├─── Course_branch/ - директория для файлов курсов
      ├─── customPlugins/ - директория для пользовательских плагинов vite
      ├─── exampleRootFiles/ - директория c примерами корневых js файлов курса
      ├─── globals/ - директория для глобальных переменных проекта
      ├─── scormApi/ - директория c клfссами для взаимодействия с LMS 
      ├─── scormData/ - директория с классом для эмуляцией поведения SCORM API
      ├─── scss/ - директория для файлов стилей (SCSS)      
      ├─── store/ - директория с хранилищем состояний курса      
      └──┬─ assets/ - директория для обязательных статических файлов
         └─── fonts/ - директория для шрифтов
```

## Настройка курса

### Алеасы

`@` - Корень проекта
`&` - public курса со статичными файлами

## Глобальные переменные

В файле `config.js` установить параметры в ключах объекта
- `standard<String>` - Версия SCORM, пердать параметры  `SCORM12` || `SCORM2004`
- `name<String>` - Название курса
- `id<String>` - id курса
- `patch<String>` - директория файлов курся для копилирования SCORM !!<< НЕ МЕНЯТЬ >>!!

В файле `globals/Const.js` установить параметры в переменных:

- `SCORM_VERSION<String>` - Версия SCORM 

- `ALL_VISIT<Boolian>` - Обязательный просмотр всех страниц курса если false то нужно просмотреть все.

- `CONSOLE_DISABLE<Boolian>` - Состояние console.log в scormAPI для отладки взаимодействия со SCORM API.


## Корневой файл курса App
Файл расположен в директории `src/`. Включает в себя копоненты:

- `<Splash :class="{ disable: start }"></Splash>` - Сплэш
- `<perfect-scrollbar> </perfect-scrollbar>` - Глобальный Scroll контейнер курса
- `<Header> </Header>` - Глобальный компонент Хедера курса
- `<router-view></router-view>` - Глобальный компонент для отображения страниц курса
- `<transition></transition>` - Глобальный компонент для анимации переходов между страницами курса
- `<NavigationButton></NavigationButton>` - Глобальный компонент постраничной навигации

## Состояния
* Состояния в курсе контролируются при помощи библиотеки Vuex
- Для более детальной информации как пользоваться библиотекой: https://v3.vuex.vuejs.org/ru/api/

- Все хранилища состояний находятся в дирректории ` src/store`
* Файл header.js - хранилище состояний header
* Файл status.js - хранилище состояний API
* Файл index.js - корневое хранилище состояний

## Передача данных в API

### Передача балов 

В компоненте, в котором необходимо передать итоговый результат, нужно обратиться к хранилищу состояний `status.js` с помощью экшена `getScore` использовать следующий код:

```
<template>
    
</template>

<script>

export default {
    methods:{
        ...mapActions("status", ["getScore"])
    }

    Пример отправки из computed

    computed:{
        имя метода может быть любым

        getTotal(){
            this.getScore({ id: "Total", score: 100 }) где id - имя цели из objectivs.js, score - количество полученых баллов
        }
    }

}
</script>

```

### Передача сохраняемых параметров API
В компоненте, в котором необходимо передать сохраняемый параметр, нужно обратиться к хранилищу состояний `status.js` с помощью экшена `setVariations` использовать следующий код:

```
<template>
    
</template>

<script>

export default {
    methods:{
        ...mapActions("status", ["setVariations"])
    }

    Пример отправки из computed

    computed:{
        имя метода может быть любым

        getTotal(){
            this.setVariations({}) отправить можно любое значение любого типа 
        }
    }

}
</script>

```
### Получение сохраняемых параметров API

В компоненте, в котором необходимо получить сохраняемый параметр, нужно обратиться к хранилищу состояний `status.js` с помощью геттера `variations` использовать следующий код:

```
<template>
    <div>

        <h1>{{ getVariations }}</h1>

    </div>
</template>

<script>

import { mapGetters } from "vuex";
export default {
    components: {
        SvgIcon,
    },
    computed: {
        ...mapGetters("status", ["variations"]),
        getVariations() {
            if (Object.values(this.variations) > 0) {
                return this.variations;
            } else {
                return "";
            }
        },
    },
};
</script>

```


## Цели курса

* Цели курса задаются в файле `objectivs.js`
* Файл расположен в директории `src/Course_branch/<имя курса>/courseData/objectivs.js`

- Переменная `Objectives<Array>` - персональные цели
  При передаче значений персональной цели обязательно использовать значение `id`

- Переменная `TotalObjectives<Array>` - глобальная цель


#### Навигация по курсу
* Навигации по курсу осуществляется при помощи библиотеки Vue Router

Для более детальной информации как пользоваться библиотекой: https://router.vuejs.org/api/

- Файл для Vue route расположен в директории `src/Course_branch/<имя курса>/router/router.js`

* Для постраничной навигации базово используется компонент `<NavigationButton></NavigationButton>`
Компонент расположен в дирректории `src/components/NavigationButton.vue`

* Переместиться к указанному слайду использовать директиву `<router-link></router-link>`

- используй следующий код:

 ` <router-link :to="{ name: <Нужный route> }"></router-link> `

* Отслеживание перемещения по слайдам `$route.name`

* Файлы для меню курса расположены в директории `src/Course_branch/<имя курса>/courseData/menuData.js`


## VUE практики

### Общие сведения
Все компоненты хранятся в дирректории `src/companents`

### Cоздание компонента
Для создания компонента необходимо создать новый файл в директории `src/companents`
   
```
<template>
    
</template>

<script>

export default {

}
</script>

<style>

</style>
```
### Входящие параметры
Все входящие параметры расположить в дирректории `src/Course_branch/<имя курса>/courseData/testingData.js`.
Импортировать параметры с помощью алеаса `&`
* `import { keybordData_1 } from "&/courseData/testingData";`



### Пример
```
<template>
    <div>
        <h1>Components Example</h1>
        <KeybordPracticeVue :question-data="keybord_1"></KeybordPracticeVue>
    </div>
</template>

<script>
import { keybordData_1 } from "&/courseData/testingData";
import KeybordPracticeVue from "@/components/KeybordPractice.vue";
export default {
    components: { KeybordPracticeVue },
    computed: {
        keybord_1() {
            return keybordData_1();
        },
    },
};
</script>

<style>
</style>

```
### Создание компонента
```
<template>
    
</template>

<script>

export default {

}
</script>

<style>

</style>

```
## scss
Для использования переменных `scss` внутри компонентов необходимо осуществить импорт следующим образом: в
папке `scss/components` создать файл `.scss`.
В файл `scss/style` осуществить импорт  `@/scss/имя файла.scss";`.

 
## Шрифты
### Установка
Для установки в курс необходимо поместить новый шрифт в формате `.ttf, woff, woff2, eof` в папку `src/assets/fonts/`. 
Далее подключить их в файле `fonts.scss` в дерриктории `src/scss/root/`

### Пример
```
@include font("FuturaPT-Bold", "FuturaPT-Bold", "600", "normal");

```

### Работа со шрифтами
Для использования шрифтов в файле `scss/style` существуют переменные, которые в дальнейшем используются при работе с компонентами.

```
$Regular: "Montserrat-Regular", sans-serif;
$Light: "Montserrat-Light", sans-serif;
$Italic: "Montserrat-Italic", sans-serif;
$Medium: "Montserrat-Medium", sans-serif;
$Bold: "Montserrat-Bold", sans-serif;
$Black: "Montserrat-Black", sans-serif;
```

## Цвета
### Работа с цветами
Для использования цветов в файле `style/_vars.scss` существуют переменные, которые в дальнейшем используются при работе с компонентами. При создании новой переменной старайтесь использовать интуитивно понятные названия.
```
$black: rgba(0, 0, 0, 1);       // Чёрный
$white: rgba(255, 255, 255, 1); // Белый
$red:  rgba(233,38,45, 1);      // Красный
$green: rgba(115, 190, 67, 1);  // Зелёный
```

## Работа с SVG
### Добавление
- Для добавления новой svg в проект необходимо сохранить её в папку курса `Course_branch/<имя курса>/assets/icons`, в дальнейшем название svg станет её `ID`, это нужно учитывать. 


### Подключение
Для подключения svg нужно использовать следующий код, где name является id/название файла, который вы сохраняли ранее. w - width, h - height.

```
<template>
    <div>
        <h2>Start</h2>
        <SvgIcon name="vue" w="152" h="48"></SvgIcon>
        <SvgIcon name="vite" w="152" h="48"></SvgIcon>
    </div>
</template>

<script>

import SvgIcon from "@/components/ui/SvgIcon.vue";

export default {
    components: {
        SvgIcon,
    },
};
</script>

<style>
</style>

```