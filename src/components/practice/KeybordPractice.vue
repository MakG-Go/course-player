<template>
    <div>
        <img class="picture-100 ispitanie_img" :src="backGround" alt="" />

        <div v-for="(quest, key) in questionData" :key="quest.qText">
            <div
                class="container-center"
                v-if="questionCounter === key && !showFeedback"
            >
                <div class="flex">
                    <div class="keybord keybord__small">
                        <p
                            v-if="!check"
                            class="text-20 text-medium mb-10"
                            v-html="clue"
                        ></p>

                        <p
                            v-if="check"
                            :class="addFeedClass"
                            class="keybord__feed_title text-24 mb-15"
                            v-html="getFeedTitle"
                        ></p>

                        <p
                            v-if="check"
                            class="text-20 mb-10"
                            v-html="getFeedText"
                        ></p>

                        <div class="keybord__line mb-25"></div>

                        <!-- Проверить -->
                        <button
                            class="btn btn_blue"
                            v-if="showAceptBtn && !check"
                            @click="checkAnswer"
                        >
                            <span>
                                {{ btnText.acept }}
                            </span>
                        </button>
                        <!-- Повторить -->
                        <button
                            v-if="!moveButton && check"
                            class="btn btn_blue"
                            @click="restart"
                        >
                            <span>
                                {{ btnText.restart }}
                            </span>
                        </button>
                        <!-- Продолжить -->
                        <button
                            v-if="moveButton && check"
                            class="btn btn_blue"
                            @click="nextGame"
                        >
                            <span>
                                {{ btnText.moveOn }}
                            </span>
                        </button>
                    </div>

                    <!-- Секция с клавиатурой -->

                    <div class="keybord keybord__large">
                        <!-- Секция с вопросом -->

                        <div
                            class="text-m pt-5 pb-5 pr-25 pl-25 bg-blue-light br-40 w-fit mb-20"
                        >
                            {{ badge }}: {{ questionCounter + 1 }} /
                            {{ questionData.length }}
                        </div>

                        <p
                            class="text-l text-gray-light2 mb-10"
                            v-if="needQuestionTitle"
                            v-html="getQuestionTitle"
                        ></p>
                        <p
                            class="text-20 text-medium mb-25"
                            v-html="getQuestionText"
                        ></p>

                        <div class="flex jf-center mb-15">
                            <div
                                :key="liter + key"
                                class="keybord__answer"
                                :class="addFeedClass"
                                v-for="(liter, key) in getAswerPlace"
                            >
                                <span class="keybord__answer_liter">{{
                                    choyceStorge[key]
                                }}</span>
                            </div>
                        </div>

                        <div class="keybord__line mb-45"></div>

                        <div class="keybord__greed">
                            <button
                                :key="btn + key"
                                @click="choyceLitter(key)"
                                v-for="(btn, key) in prepareKeyboard"
                                class="keybord__item keybord__item_darck"
                                :class="[addDisabledClass, getBackspace(key)]"
                            >
                                {{ btn }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="showFeedback">
            <h1>Пара Пара Пам</h1>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    props: {
        questionData: {
            type: Array,
            default() {
                return [
                    {
                        /** тип вопроса */
                        type: "keybord",
                        /** Title вопроса по дефолту он выключен методом needQuestionTitle*/
                        qTitle: "",
                        /** Текст вопроса */
                        qText: "Для клиентов мы расшифровываем все аббревиатуры, например, вместо УС употребляем слово… .",
                        /** Текст ответа */
                        word: "пин-код",
                        /** Фидбэк */
                        feed: {
                            correct: {
                                title: "Верно!",
                                text: "Экспонат № 2 на месте!",
                            },
                            incorrect: {
                                title: "Ошибка!",
                                text: "Попробуйте еще раз",
                            },
                        },
                    },
                ];
            },
        },
        backGround: { type: String, default: "" },
        btnText: {
            type: Object,
            default() {
                return {
                    acept: "Принять",
                    restart: "Повторить попытку",
                    moveOn: "Продолжить",
                };
            },
        },
        badge: { type: String, default: "Вопрос" },
        clue: {
            type: String,
            default:
                "Введите ответ на вопрос, нажимая мышкой на кнопки на клавиатуре.",
        },
        joinPracticeCount: { type: Number, default: undefined },
    },
    data() {
        return {
            /** Счётчик вопросов */
            questionCounter: 0,
            /** Для события проверки ответа */
            check: false,
            /** Выбор текста кнопки фидбэка */
            moveButton: false,
            /** Проверка правильности ответа */
            correctAnswer: false,
            /** Массив для заполнения клавиатуры */
            // keyboard: [
            keyboard: [
                "й",
                "ц",
                "у",
                "к",
                "е",
                "н",
                "г",
                "ш",
                "щ",
                "з",
                "х",
                "ъ",
                "ф",
                "ы",
                "в",
                "а",
                "п",
                "р",
                "о",
                "л",
                "д",
                "ж",
                "э",
                "-",
                "я",
                "ч",
                "с",
                "м",
                "и",
                "т",
                "ь",
                "б",
                "ю",
                "_",
                "удалить",
            ],
            /** Хранилище выбранных символов*/
            choyceStorge: [],
        };
    },
    methods: {
        ...mapActions("status", ["setScore", "setVariations"]),
        choyceLitter(key) {
            let answerLength =
                this.questionData[this.questionCounter].word.length;
            let choyceLength = this.choyceStorge.length;

            choyceLength < answerLength && key + 1 !== this.keyboard.length
                ? this.choyceStorge.push(this.keyboard[key].toUpperCase())
                : "";
            key + 1 === this.keyboard.length ? this.choyceStorge.pop() : "";
        },

        checkAnswer() {
            let choyce = this.choyceStorge.join("");
            let answer =
                this.questionData[this.questionCounter].word.toUpperCase();

            if (choyce === answer) {
                this.check = true;
                this.moveButton = true;
                this.correctAnswer = true;
            } else {
                this.check = true;
                this.moveButton = false;
                this.correctAnswer = false;
            }
        },
        restart() {
            this.choyceStorge = [];
            this.check = false;
            this.moveButton = false;
        },
        nextGame() {
            this.questionCounter++;
            this.choyceStorge = [];
            this.check = false;
            this.moveButton = false;
            this.$emit("next-question", this.questionCounter);
        },
    },
    created() {
        if (this.joinPracticeCount !== undefined) {
            this.questionCounter = this.$parent.questionCounter;
        }
    },

    computed: {
        /** Условие отрисовки кнопки acept */

        showAceptBtn() {
            return this.choyceStorge.length > 0;
        },

        /** Проверяем нужно ли отрисовывать tittle вопроса */

        needQuestionTitle() {
            return this.questionData[this.questionCounter].qTitle != "";
        },

        /** Получаем tittle вопроса */

        getQuestionTitle() {
            return this.questionData[this.questionCounter].qTitle;
        },

        /** Получаем text вопроса */

        getQuestionText() {
            return this.questionData[this.questionCounter].qText;
        },

        /** Готовим символы клавиатуры */
        prepareKeyboard() {
            let newKeybord = [];
            this.keyboard.forEach((element) => {
                newKeybord.push(element.toUpperCase());
            });
            return newKeybord;
        },

        getBackspace() {
            return (id) => {
                if (id === 34) {
                    return "keybord__item_backspace";
                }
            };
        },

        /** Готовим сетку клавиатуры */
        getGreed() {
            return (id) => {
                if (id === 34) {
                    return {
                        width: "auto",
                        "background-color": "#0056ff",
                    };
                }
            };
        },

        /** Получаем tittle обратной связи */

        getFeedTitle() {
            if (this.correctAnswer) {
                return this.questionData[this.questionCounter].feed.correct
                    .title;
            }
            if (!this.correctAnswer) {
                return this.questionData[this.questionCounter].feed.incorrect
                    .title;
            }
        },

        /** Получаем text обратной связи */

        getFeedText() {
            if (this.correctAnswer) {
                return this.questionData[this.questionCounter].feed.correct
                    .text;
            }
            if (!this.correctAnswer) {
                return this.questionData[this.questionCounter].feed.incorrect
                    .text;
            }
        },

        /** готовим массив для отрисовки вводимых символов */

        getAswerPlace() {
            return this.questionData[this.questionCounter].word.split("");
        },

        /** Получаем класс правильности ответа */

        addFeedClass() {
            return {
                correct: this.check && this.correctAnswer,
                incorrect: this.check && !this.correctAnswer,
            };
        },

        addDisabledClass() {
            return {
                disabled: this.check,
            };
        },

        checkJoinPractices() {
            if (this.joinPracticeCount !== undefined) {
                this.questionCounter === this.joinPracticeCount;
            }
        },

        showFeedback() {
            this.questionCounter + 1 > this.questionData.length
                ? this.setScore({ id: "Total", score: 100 }) &&
                  this.setVariations({ name: "something", value: 2500 })
                : "";
            return this.questionCounter + 1 > this.questionData.length;
        },
    },
};
</script>

<style>
</style>