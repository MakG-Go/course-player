
<script>
import Card from "@/components/cardGame/Card.vue";

export default {
    components: { Card },

    props: {
        gameProps: { type: Object, default: {} },
        isSpecialStyle: { type: Boolean, default: false },
        testCallback: { type: Function },
    },
    data: function () {
        return {
            states: ["selectDifficulty", "setup", "playing", "gameOver"],
            cardsArray: [],
            selectedPair: [],
            matchedCards: [],

            currentStateIndex: 0,
            currentDifficulty: -1,
            timer: 0,
            success: null,
            intervalId: null,
        };
    },
    computed: {
        currentStateName: function () {
            return this.states[this.currentStateIndex];
        },

        disableInput: function () {
            return (
                this.currentStateName !== "selectDifficulty" &&
                this.currentStateName !== "gameOver"
            );
        },
        timerMinutes: function () {
            let formatter = new Intl.NumberFormat("ru", {
                minimumIntegerDigits: 2,
            });
            return formatter.format(Math.floor(this.timer / 60));
        },
        timerSeconds: function () {
            let formatter = new Intl.NumberFormat("ru", {
                minimumIntegerDigits: 2,
            });
            return formatter.format(this.timer % 60);
        },
    },
    methods: {
        getStateIndex: function (name) {
            return this.states.indexOf(name);
        },

        getCardByIndex: function (index) {
            const cardIndexes = this.gameProps.cardPairs.map(
                (card) => card.index
            );
            const result = cardIndexes.indexOf(index);
            return this.gameProps.cardPairs[result];
        },

        setDifficulty: function (index) {
            this.currentDifficulty = index;
            this.timer = this.gameProps.difficulty[this.currentDifficulty].time;
            this.currentStateIndex = 1;
            this.generateCardsArray();
        },

        playGame: function () {
            this.currentStateIndex = 2;
            this.launchTimer();
        },

        reset: function () {
            this.selectedPair = [];
            this.matchedCards = [];
            this.currentStateIndex = 0;
            this.success = null;
            this.generateCardsArray();
            this.$el.querySelectorAll("input").forEach((element) => {
                element.checked = false;
            });
        },

        restartGame: function () {
            this.selectedPair = [];
            this.matchedCards = [];
            this.timer = this.gameProps.difficulty[this.currentDifficulty].time;
            this.currentStateIndex = 2;
            this.success = null;
            this.generateCardsArray();
            this.launchTimer();
        },

        generateCardsArray() {
            const doubleArray = structuredClone(
                this.gameProps.cardPairs
            ).concat(structuredClone(this.gameProps.cardPairs));
            this.cardsArray = this.shuffle(doubleArray);
            this.cardsArray.forEach((card, index) => {
                card.selected = false;
                card.matched = false;
                card.indexReal = index;
            });
        },

        launchTimer() {
            this.intervalId = setInterval(() => {
                this.timer--;
                if (this.timer < 0) {
                    this.timer = 0;
                    this.endGame(false);
                }
            }, 1000);
        },

        shuffle(arr) {
            var j, temp;
            for (var i = arr.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
            return arr;
        },

        isCardSelected(card) {
            return this.selectedPair.indexOf(card) !== -1;
        },

        selectCard(card) {
            if (!this.isCardSelected(card) && this.selectedPair.length < 2) {
                console.log("check");
                this.selectedPair.push(card);
            }
        },

        checkPairMatch() {
            console.log("999");
            setTimeout(() => {
                if (this.selectedPair[0].index === this.selectedPair[1].index) {
                    this.selectedPair[0].matched =
                        this.selectedPair[1].matched = true;

                    this.matchedCards.push(
                        this.getCardByIndex(this.selectedPair[0].index)
                    );

                    if (
                        this.matchedCards.length ===
                        this.gameProps.cardPairs.length
                    ) {
                        this.endGame(true);
                    }
                }
                this.selectedPair = [];
            }, 700);
        },

        endGame: function (success) {
            this.currentStateIndex = 3;
            clearInterval(this.intervalId);
            this.success = success;

            if (!this.isSpecialStyle || (this.isSpecialStyle && this.success)) {
                if (this.testCallback) {
                    this.testCallback(this.success);
                }
            }
        },
    },

    mounted: function () {
        if (this.gameProps.difficulty.length === 1) {
            this.setDifficulty(0);
        }
    },

    watch: {
        "selectedPair.length"(newVal, oldVal) {
            if (newVal >= 2) {
                this.checkPairMatch();
            }
        },
    },
};
</script>

<template>
    <div class="flipgame">
        <template v-if="gameProps.difficulty.length > 1">
            <h4 class="mb-30 mb-xs-25">Выберите уровень сложности</h4>
            <div class="row mb-35 mb-xs-15">
                <div
                    v-for="(
                        difficulty, difficultyIndex
                    ) in gameProps.difficulty"
                    :key="difficulty.text + difficultyIndex"
                    class="col-lg-4 col-xs-12 mb-20 mb-xs-15"
                >
                    <div class="radio">
                        <input
                            type="radio"
                            :id="'radio-difficulty-' + (difficultyIndex + 1)"
                            name="radio-difficulty"
                            :disabled="currentStateName !== 'selectDifficulty'"
                            @change="setDifficulty(difficultyIndex)"
                        />
                        <label
                            :for="'radio-difficulty-' + (difficultyIndex + 1)"
                            >{{ difficulty.text }}</label
                        >
                    </div>
                </div>
            </div>
        </template>

        <template v-if="isSpecialStyle">
            <div class="text text-l text-bold">
                {{ gameProps.title }}
            </div>
            <div class="text text-m text-gray mb-55 mb-xs-30">
                {{ gameProps.title2 }}
            </div>
        </template>

        <div
            :class="[
                'flipgame__container',
                { flipgame__container_blue: isSpecialStyle },
            ]"
            v-if="currentStateName !== 'selectDifficulty'"
        >
            <div class="text text-m mb-45 mb-xs-15" v-if="!isSpecialStyle">
                Нажимайте на карточки и образуйте пары. Соберите все пары за
                отведённое время.
            </div>
            <div
                :class="[
                    'flipgame__timer mb-45 mb-xs-15',
                    {
                        flipgame__timer_special: isSpecialStyle,
                        flipgame__timer_15sec: timer <= 15,
                        flipgame__timer_5sec: timer <= 5,
                    },
                ]"
            >
                <span class="digits">{{ timerMinutes }}</span
                >:<span class="digits">{{ timerSeconds }}</span>
            </div>
            <div class="flipgame__cards">
                <template
                    v-for="(card, cardIndex) in cardsArray"
                    :key="cardIndex"
                >
                    <Card
                        :card-info="card"
                        :card-backface="gameProps.backfaceImg"
                        :is-selected="isCardSelected(card)"
                        :is-matched="card.matched"
                        :disabled="currentStateName !== 'playing'"
                        :revealed="currentStateName === 'gameOver'"
                        @select="selectCard(card)"
                    >
                    </Card>
                </template>
            </div>
            <div
                class="btn-container btn-container_center mt-75 mb-75 mt-xs-55 mb-xs-55"
                v-if="currentStateName === 'setup'"
            >
                <button
                    :class="['btn', { btn__gold: isSpecialStyle }]"
                    @click="playGame()"
                >
                    Начать
                </button>
            </div>
            <div class="flipgame__matched mt-75 mt-xs-55">
                <div
                    v-for="(card, cardIndex) in gameProps.cardPairs"
                    :key="cardIndex"
                    class="flipgame__matched__elem"
                >
                    <img
                        class="flipgame__matched__elem__back"
                        :src="gameProps.backfaceImg"
                        alt=""
                    />
                    <div
                        v-if="matchedCards[cardIndex]"
                        class="flipgame__matched__elem__front animate__animated animate__zoomIn"
                    >
                        <img :src="matchedCards[cardIndex].img" alt="" />
                    </div>
                </div>
            </div>
            <div
                class="btn-container btn-container_center mt-75"
                v-if="currentStateName === 'gameOver' && !isSpecialStyle"
            >
                <button class="btn" @click="reset">Попробовать ещё раз</button>
            </div>
        </div>
        <div
            class="mt-55 mt-xs-30"
            v-if="currentStateName === 'gameOver' && isSpecialStyle"
        >
            <div
                :class="[
                    'baloon__feedback animate__animated animate__fadeInLeft mb-40',
                    {
                        baloon__feedback_violet: !success,
                        baloon__feedback_green: success,
                    },
                ]"
            >
                <template v-if="success">
                    <h3 class="mb-10">У вас хорошая память!</h3>
                    <div
                        class="text text-l"
                        v-html="gameProps.feedback.correct"
                    ></div>
                </template>
                <div
                    class="text text-l"
                    v-else
                    v-html="gameProps.feedback.incorrect"
                ></div>
            </div>
            <template v-if="!success">
                <button class="btn btn__gold" @click="restartGame()">
                    Попробовать ещё раз
                </button>
                <button
                    class="btn btn__border btn__border_gold"
                    @click="testCallback(success)"
                >
                    Продолжить
                </button>
            </template>
        </div>
    </div>
</template>

<style>
</style>