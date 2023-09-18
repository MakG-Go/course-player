<template>
    <div>
        <div class="container mb-red">
            <hr class="hr-red mb-orange" />
            <div class="row mb-red">
                <div class="col-lg-12 col-xs-6">
                    <h1 class="h1 text-uppercase text-left">умные часы</h1>
                </div>
            </div>
        </div>

        <div class="mb-red">
            <div class="baloon_robot baloon_color-white">
                <div class="row middle">
                    <div class="col-lg-6 col-xs-6 order-xs-1">
                        <Vue3Lottie
                            class="robot__talck"
                            :animationData="bot_1"
                            :assetsPath="path_1"
                        />
                    </div>
                    <div class="col-lg-6 col-xs-6 mb-xs-30">
                        <div class="mr-100">
                            <p class="text-l mb-pink">
                                Добро пожаловать в&nbsp;курс Смарт-часы! Меня
                                зовут робот Джет.
                            </p>
                            <p class="text-l">
                                В&nbsp;этом курсе ты узнаешь, как&nbsp;что такое
                                смарт-часы и фитнес-браслеты, какими ключевыми
                                функциями они обладают.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mb-red">
            <div class="row">
                <div class="col-lg-12 col-xs-6">
                    <p class="text-l text-left mb-pink">
                        В современном мире люди привыкли следить за своим
                        временем, уделять время питанию, физичекой активности и
                        сну, и при этом оставаться в коммуникации с другими
                        людьми. Решить все эти запросы помогают умные часы и
                        фитнес-трекеры.
                    </p>
                    <p class="text-l text-left">
                        Но выбор нового гаджета может стать довольно сложной
                        задачей, учитывая широкий ассортимент в магазинах.
                    </p>
                </div>
            </div>
        </div>
        <div class="mb-orange">
            <div
                class="baloon_large baloon_border_radius-50 baloon_color-white baloon_shadow-standart relative"
            >
                <h4 class="h4 mb-orange">
                    В этом курсе мы найдём ответы на следующие вопросы.
                </h4>
                <div class="row mb-orange">
                    <div class="col-lg-4 col-xs-6 mb-xs-20">
                        <div
                            class="baloon_small baloon_border_radius-50 baloon_color-pink baloon_center h-100"
                        >
                            <p class="text-center text-italic_bold text-m">
                                Что лучше: смарт-часы или фитнес-трекеры?
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-xs-6 mb-xs-20">
                        <div
                            class="baloon_small baloon_border_radius-50 baloon_color-pink baloon_center h-100"
                        >
                            <p class="text-center text-italic_bold text-m">
                                На какие функции обратить внимание клиента?
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-xs-6">
                        <div
                            class="baloon_small baloon_border_radius-50 baloon_color-pink baloon_center h-100"
                        >
                            <p class="text-center text-italic_bold text-m">
                                Как выбрать смарт-часы для ребёнка?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-orange">
            <div
                class="baloon_large baloon_border_radius-50 baloon_color-black relative"
            >
                <h2 class="mb-orange text-white text-uppercase">
                    Функции роботов
                </h2>
                <p class="text-l text-white mb-red">
                    При прохождении данного курса тебе будут помогать два
                    помощника &ndash; роботы с искуственным интеллектом.
                </p>
                <div
                    class="baloon_middle baloon_border_radius-20 baloon_color-gray mb-orange"
                    style="padding-bottom: 0"
                >
                    <div class="row lottie jf-center">
                        <div class="col-lg-7 col-xs-8">
                            <p class="text-m text-red text-uppercase mb-pink">
                                Досье:
                            </p>
                            <h4 class="h4 text-uppercase text-white mb-pink">
                                Робот Джет
                            </h4>
                            <p class="text-m text-white mb-10 mb-xs-10">
                                Эксперт в области современных технологий.
                                Поможет тебе в изучении теории и даст общие
                                советы по общению с клиентами.
                            </p>
                            <p class="text-m text-white">
                                У Джета есть встроенный экран, который способен
                                показывать различные проекции.
                            </p>
                        </div>
                        <div class="col-lg-5 col-xs-8">
                            <Vue3Lottie
                                class="robot__talck relative"
                                :animationData="bot_1"
                                :assetsPath="path_1"
                            />
                        </div>
                    </div>
                </div>
                <div
                    class="baloon_middle baloon_border_radius-20 baloon_color-gray mb-orange"
                >
                    <div class="row jf-center">
                        <div class="col-lg-5 col-xs-8 order-xs-1">
                            <Vue3Lottie
                                class="robot__fly"
                                :animationData="bot_3"
                                :assetsPath="path_3"
                            />
                        </div>
                        <div class="col-lg-7 col-xs-8">
                            <p class="text-m text-red text-uppercase mb-pink">
                                Досье:
                            </p>
                            <h4 class="h4 text-uppercase text-white mb-pink">
                                Бот-помощник
                            </h4>
                            <p class="text-m text-white mb-10 mb-xs-10">
                                Очень любопытный робот. Увлекается сбором
                                интересных фактов и&nbsp;с&nbsp;радостью
                                поделится ими&nbsp;с&nbsp;тобой.
                                Если&nbsp;увидишь значок &laquo;рука&raquo;
                                на&nbsp;его&nbsp;экране&nbsp;&mdash; смело
                                нажимай на&nbsp;него.
                            </p>
                            <p class="text-m text-white">
                                Робот-помощник также&nbsp;даст тебе
                                дополнительные материалы и&nbsp;проверит твои
                                знания по&nbsp;теме.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mb-red">
            <div class="row jf-center">
                <div class="col-lg-5 col-xs-6 order-xs-1">
                    <Vue3Lottie
                        class="robot__fly"
                        :animationData="bot_3"
                        :assetsPath="path_3"
                    />
                </div>
                <div class="col-lg-5 col-xs-6">
                    <div class="robot-dialog_baloon mb-xs-20">
                        Давай скорее начнём обучение!
                    </div>
                </div>
            </div>
        </div>
        <!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
    </div>
</template>

<script>
const path_1 = new URL("/lottie/bot_1", import.meta.url).href + "/";
const path_3 = new URL("/lottie/bot_3", import.meta.url).href + "/";

import { Vue3Lottie } from "vue3-lottie";
import bot_1 from "@/assets/lottie/bot_1.json";
import bot_3 from "@/assets/lottie/bot_3.json";

export default {
    components: {
        Vue3Lottie,
    },
    data() {
        return {
            bot_1,
            bot_3,
            path_1,
            path_3,
        };
    },
    computed: {},
};
</script>

<style>
</style>