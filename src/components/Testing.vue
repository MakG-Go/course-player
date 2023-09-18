<template>
    <div class="test__container">
        <div v-for="(question, keyQuestion) in testArray" :key="question.text">
            <div
                v-if="keyQuestion === counterQuestion && !feedbackShow"
                class="test__body"
            >
                <!--Щётчик вопросов-->
                <h4>{{ counterQuestion + 1 + "/" + testArray.length }}</h4>

                <!--Text вопроса-->
                <h3>{{ question.text }}</h3>

                <!--Radio ответы-->
                <div class="test__answers" v-if="question.type === 'radio'">
                    <div
                        class="radio"
                        v-for="(answer, keyAnswer) in question.answers"
                        :key="answer"
                    >
                        <input
                            type="radio"
                            @change="isTarget($event, keyAnswer, question.type)"
                            :checked="answer.selected"
                            :id="'radio' + keyQuestion + '' + keyAnswer"
                            :value="keyAnswer"
                            :disabled="disableInput"
                            :name="'radio' + keyQuestion"
                        />
                        <label
                            :class="[
                                'text-l',
                                {
                                    correct:
                                        answer.selected &&
                                        answer.correct &&
                                        btnNext,
                                },
                                {
                                    incorrect:
                                        answer.selected &&
                                        !answer.correct &&
                                        btnNext,
                                },
                            ]"
                            :for="'radio' + keyQuestion + '' + keyAnswer"
                            >{{ answer.text }}</label
                        >
                    </div>
                </div>

                <!--Checkbox ответы-->
                <div class="test__answers" v-if="question.type === 'checkbox'">
                    <div
                        class="checkbox"
                        v-for="(answer, keyAnswer) in question.answers"
                        :key="answer"
                    >
                        <input
                            type="checkbox"
                            @change="isTarget($event, keyAnswer, question.type)"
                            :checked="answer.selected"
                            v-model="answer.selected"
                            :id="'checkbox' + keyQuestion + '' + keyAnswer"
                            :value="keyAnswer"
                            :disabled="disableInput"
                            :name="'checkbox' + keyQuestion + '' + keyAnswer"
                        />
                        <label
                            :class="[
                                'text-l',
                                {
                                    correct:
                                        answer.selected &&
                                        answer.correct &&
                                        btnNext,
                                },
                                {
                                    incorrect:
                                        answer.selected &&
                                        !answer.correct &&
                                        btnNext,
                                },
                            ]"
                            :for="'checkbox' + keyQuestion + '' + keyAnswer"
                            >{{ answer.text }}</label
                        >
                    </div>
                </div>
            </div>
        </div>
        <div
            class="test__footer"
            v-if="tempStorage.items.length !== 0 && !feedbackShow"
        >
            <button class="btn" v-if="btnAccept" @click="acceptAnswer()">
                Принять
            </button>
            <button class="btn" v-if="btnNext" @click="nextQuestion()">
                Продолжить
            </button>
        </div>
        <div class="test-feedback" v-if="feedbackShow">
            <div class="test-feedback__header">
                <h3>Обратная связь</h3>
            </div>
            <div class="test-feedback__content">
                Правильно {{ counterCorrect }} из {{ testArray.length }}
            </div>
            <div class="test-feedback__footer">
                <router-link class="btn" :to="{ name: 'final' }"
                    >Продолжить</router-link
                >
                <button class="btn" @click="resetTest()">Повторить</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    props: {
        /*Хранилище вопросов*/
        questionStorage: Array,
        /*Проверять ли выбранный ответ*/
        checkAnswer: Boolean,
        /*Перемешивать ли массив*/
        random: Boolean,
        testCallback: {
            type: Function,
        },
    },
    data: function () {
        return {
            /*Текущий вопрос*/
            counterQuestion: 0,
            /*Щетчик правельных ответов*/
            counterCorrect: 0,
            /*Временное хранилище вопросов*/
            tempStorage: {
                type: "",
                items: [],
            },
            /*Принять ответ*/
            btnAccept: false,
            /*Следующий вопрос*/
            btnNext: false,
            /*Обратная связь*/
            feedbackShow: false,
            /*Блокировка ответов*/
            disableInput: false,
        };
    },
    computed: {
        /*Перемешиваем массив*/
        testArray: function () {
            return this.shuffling(this.questionStorage);
        },
    },
    methods: {
        ...mapActions("status", ["setScore", "setVariations"]),
        /*Метод перемешиваем массив*/
        shuffling: function (data) {
            if (this.random) {
                /*перемешиваем вопросы*/
                data.sort(function () {
                    return Math.random() - 0.5;
                });

                /*перемешиваем ответы вопроса*/
                data.forEach(function (item, key) {
                    /*добоваляем параметр выбора к ответам*/
                    item.answers.forEach(function (answer, key) {
                        answer.selected = false;
                    });

                    item.answers.sort(function () {
                        return Math.random() - 0.5;
                    });
                });
            }
            return data;
        },
        /*Событие выбора елемента*/
        isTarget: function ($event, key, type) {
            var currQuestion = this.testArray[this.counterQuestion];
            var currAnswer = currQuestion.answers[key];

            /*добавляем тип вопроса во временное хранилище*/
            this.tempStorage.type = type;

            /*проверяем тип выбранного обьекта*/
            if (type === "radio") {
                /*добавдяем выбранный элемент во временное хранилище*/
                this.tempStorage.items = key;

                currQuestion.answers.forEach(function (answer, key) {
                    answer.selected = false;
                });

                currAnswer.selected = true;
            } else if (type === "checkbox") {
                if ($event.target.checked) {
                    /*добавдяем выбранный элемент во временное хранилище*/
                    this.tempStorage.items.push(key);
                } else {
                    /*удаляем выбранный элемент из временного хранилища*/
                    delete this.tempStorage.items.splice(
                        this.tempStorage.items.indexOf(key),
                        1
                    );
                }
            }

            /*Скрываем или показываем кнопку принять если ответ не выбран*/
            if (this.tempStorage.items.length !== 0) {
                this.btnAccept = true;
            } else {
                this.btnAccept = false;
            }
        },
        /*Принять ответ*/
        acceptAnswer: function () {
            /*Текущий вопрос*/
            var currentQuestion = this.testArray[this.counterQuestion];
            var currentAnswer = currentQuestion.answers;

            /*Проверяем тип принятого вопроса*/
            if (currentQuestion.type === "radio") {
                var correctAnswer = false;

                /*Проверяем правильность ответа*/
                currentAnswer.forEach(function (answer, key) {
                    if (answer.correct && answer.selected) {
                        correctAnswer = true;
                    }
                });

                if (correctAnswer) {
                    this.counterCorrect++;
                }
            } else if (currentQuestion.type === "checkbox") {
                var correctAnswer = 0;
                var selectAnswer = 0;
                var selectCorrectAnswer = 0;

                /*Проверяем колличество верных ответов*/
                currentAnswer.forEach(function (answer, key) {
                    if (answer.correct) {
                        correctAnswer++;
                    }
                    if (answer.selected) {
                        selectAnswer++;

                        if (answer.correct) {
                            selectCorrectAnswer++;
                        }
                    }
                });

                /*если все ответы верные присваиваем балл*/
                if (
                    correctAnswer === selectCorrectAnswer &&
                    correctAnswer === selectAnswer
                ) {
                    this.counterCorrect++;
                }
            }

            /*Смотрим нужно ли выводить фидбек после принятия ответа*/
            if (this.checkAnswer) {
                /*Скрываем кнопку принять ответ*/
                this.btnAccept = false;
                /*Блокируем ответы*/
                this.disableInput = true;

                /*Показываем кнопку продолжить*/
                if (this.testArray.length !== this.counterQuestion + 1) {
                    this.btnNext = true;
                } else {
                    this.feedbackShow = true;
                }
            } else {
                /*Переходим к следующему вопросу*/
                if (this.testArray.length !== this.counterQuestion + 1) {
                    this.nextQuestion();
                } else {
                    this.btnAccept = false;

                    this.feedbackShow = true;
                }
            }

            if (this.testArray.length === this.counterQuestion + 1) {
                this.currentPercent = Math.floor(
                    (this.counterCorrect / this.testArray.length) * 100
                );
                this.setScore({ id: "Total", score: this.currentPercent });

                if (this.testCallback) {
                    this.testCallback();
                }
            }

            return this.counterCorrect;
        },
        /*Следующий вопрос*/
        nextQuestion: function () {
            /*Очищаем временное хранилище*/
            this.tempStorage.type = "";
            this.tempStorage.items = [];

            this.counterQuestion++;

            this.disableInput = false;
            this.btnNext = false;

            if (this.testArray.length === this.counterQuestion) {
                this.feedbackShow = true;
            }
        },
        /*Перезаписать тестирование*/
        resetTest: function () {
            this.feedbackShow = false;
            this.counterQuestion = 0;
            this.counterCorrect = 0;
            this.disableInput = false;

            /*Убираем состояние селект*/
            this.testArray.forEach(function (items, key) {
                items.answers.forEach(function (answer, key) {
                    answer.selected = false;
                });
            });
        },
        nextSlide: function () {
            nextSlide();
        },
    },
};
</script>

<style>
</style>