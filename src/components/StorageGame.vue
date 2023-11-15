
<script>
export default {
    props: {
        gameProps: { type: Object, default: {} },
        testCallback: { type: Function },
    },
    data: function () {
        return {
            states: ["selectDifficulty", "setup", "playing", "gameOver"],
            maxCapacity: 3,
            capacityDropInterval: 2,
            cashDesks: [],

            currentStateIndex: 0,
            currentDifficulty: -1,
            timer: 0,
            intervalId: null,
            capacityDropIntervalId: null,
        };
    },
    computed: {
        currentStateName: function () {
            return this.states[this.currentStateIndex];
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
        flatCashDeskItems: function () {
            let arr = [];
            this.cashDesks.forEach((cashDesk) => {
                cashDesk.content.forEach((item) => {
                    arr.push(item);
                });
            });

            return arr;
        },
        flatNotEmptyCashDeskItems: function () {
            let arr = [];
            this.cashDesks.forEach((cashDesk) => {
                cashDesk.content.forEach((item) => {
                    if (item.capacity > 0) {
                        arr.push(item);
                    }
                });
            });

            return arr;
        },
        isSuccess: function () {
            return (
                this.flatCashDeskItems.length ===
                this.flatNotEmptyCashDeskItems.length
            );
        },
    },
    methods: {
        getStateIndex: function (name) {
            return this.states.indexOf(name);
        },

        setDifficulty: function (index) {
            this.currentDifficulty = index;
            this.timer = this.gameProps.difficulty[this.currentDifficulty].time;
            this.currentStateIndex = 1;
            /* this.generateCardsArray(); */
        },

        playGame: function () {
            this.currentStateIndex = 2;
            this.initCashDeskStorage();
            this.launchTimer();
            this.startCapacityDrop();
            // this.$nextTick(this.initDragAndDrop);
        },

        initCashDeskStorage: function () {
            let newCashDesksStorage = [];

            this.gameProps.cashDesks.forEach((cashDesk, cashDeskIndex) => {
                newCashDesksStorage.push({
                    content: [],
                    img: cashDesk.img,
                    backgroundColor: cashDesk.backgroundColor,
                });
                this.gameProps.draggableElems.forEach((draggableItem) => {
                    newCashDesksStorage[cashDeskIndex].content.push({
                        img: draggableItem.img,
                        capacity: this.maxCapacity,
                    });
                });
            });
            this.cashDesks = newCashDesksStorage;
        },

        startDrag(event, item, key) {
            event.target.style.opacity = 1;
            event.dataTransfer.dropEffect = "link";
            event.dataTransfer.effectAllowed = "link ";
            event.dataTransfer.setData("index", key);
        },

        onDrop(event, dropIndex, storage) {
            const itemId = event.dataTransfer.getData("index");

            if (dropIndex === Number(itemId)) {
                storage.capacity = 3;
                // console.log(storage);
                // this
                //     .restoreCapacity
                //     // e.target.dataset.cashDeskId,
                //     // ui.draggable[0].dataset.id
                //     ();
            }
        },

        // initDragAndDrop: function () {
        //     const vm = this;

        //     const draggable = this.$el.querySelector(".js-draggable");
        //     const droppable = this.$el.querySelector(".js-droppable");

        //     console.log(draggable);

        //     const lockScroll = function () {
        //         ps.element.scrollTop = ps.lastScrollTop;
        //     };

        //     // Инициализируем перетаскиваемый обьект
        //     // draggable.draggable({
        //     //     containment: ".storagegame__container",
        //     //     helper: "clone",
        //     //     zIndex: 100,
        //     //     start: function (e, ui) {
        //     //         ps.element.addEventListener("ps-scroll-y", lockScroll);
        //     //     },
        //     //     stop: function (e, ui) {
        //     //         /*Притягивает блок*/
        //     //         $(this).css({
        //     //             left: "",
        //     //             top: "",
        //     //         });
        //     //         ps.element.removeEventListener("ps-scroll-y", lockScroll);
        //     //     },
        //     //     revert: function (event, ui) {},
        //     // });

        //     // droppable.droppable({
        //     //     accept: draggable,
        //     //     activeClass: "active",
        //     //     hoverClass: "drop-here",
        //     //     over: function (e, ui) {},
        //     //     drop: function (e, ui) {
        //     //         if (e.target.dataset.id === ui.draggable[0].dataset.id) {
        //     //             vm.restoreCapacity(
        //     //                 e.target.dataset.cashDeskId,
        //     //                 ui.draggable[0].dataset.id
        //     //             );
        //     //         }
        //     //     },
        //     // });
        // },

        startCapacityDrop: function () {
            this.capacityDropIntervalId = setInterval(() => {
                this.randomDropCapacity();
            }, this.capacityDropInterval * 1000);
        },

        randomDropCapacity: function () {
            if (this.flatNotEmptyCashDeskItems.length === 0) {
                return;
            }
            const selectedItem = Math.floor(
                Math.random() * this.flatNotEmptyCashDeskItems.length
            );
            this.flatNotEmptyCashDeskItems[selectedItem].capacity--;
        },

        restoreCapacity: function (deskId, position) {
            this.cashDesks[deskId].content[position].capacity =
                this.maxCapacity;
        },

        launchTimer: function () {
            this.intervalId = setInterval(() => {
                this.timer--;
                if (this.timer < 0) {
                    this.timer = 0;
                    this.endGame(this.isSuccess);
                }
            }, 1000);
        },

        endGame: function (success) {
            this.currentStateIndex = 3;
            clearInterval(this.intervalId);
            clearInterval(this.capacityDropIntervalId);

            const draggable = this.$el.querySelector(".js-draggable");

            draggable.draggable({
                disabled: true,
            });

            if (this.testCallback) {
                this.testCallback(success);
            }
        },

        restartGame: function () {
            this.currentStateIndex = 0;

            this.timer = 0;
            this.currentDifficulty = -1;
            this.cashDesks = [];
        },
    },

    mounted: function () {},

    watch: {},
};
</script>

<template>
    <div class="storagegame">
        <template v-if="gameProps.difficulty.length > 1">
            <h4 class="mb-30 mb-xs-25">Выберите уровень сложности</h4>
            <div class="row mb-35 mb-xs-15">
                <div
                    v-for="(
                        difficulty, difficultyIndex
                    ) in gameProps.difficulty"
                    :key="difficulty + difficultyIndex"
                    class="col-lg-4 col-xs-12 mb-20 mb-xs-15"
                >
                    <div class="radio">
                        <input
                            type="radio"
                            :id="'radio-difficulty-' + (difficultyIndex + 1)"
                            name="radio-difficulty"
                            :disabled="
                                currentStateName !== 'selectDifficulty' &&
                                currentStateName !== 'setup'
                            "
                            @change="setDifficulty(difficultyIndex)"
                        />
                        <label
                            :for="'radio-difficulty-' + (difficultyIndex + 1)"
                            >{{ difficulty.text }}</label
                        >
                    </div>
                </div>
            </div>
            <div
                class="btn-container mt-30 mb-90 mt-xs-25 mb-xs-50"
                v-if="currentStateName === 'setup'"
            >
                <button class="btn" @click="playGame">Начать</button>
            </div>
        </template>
        <div
            v-if="
                currentStateName === 'playing' ||
                currentStateName === 'gameOver'
            "
        >
            <div
                :class="[
                    'storagegame__timer mb-25 mb-xs-15',
                    {
                        storagegame__timer_15sec: timer <= 15,
                        storagegame__timer_5sec: timer <= 5,
                    },
                ]"
            >
                <span class="digits">{{ timerMinutes }}</span
                >:<span class="digits">{{ timerSeconds }}</span>
            </div>
            <div class="storagegame__container">
                <div
                    v-for="(cashDesk, cashDeskIndex) in cashDesks"
                    :key="cashDesk"
                    class="storagegame__cashdesk"
                    :style="{ 'background-color': cashDesk.backgroundColor }"
                >
                    <div class="storagegame__cashdesk__items mb-lg-45">
                        <div
                            @drop="onDrop($event, index, item)"
                            @dragenter.prevent
                            @dragover.prevent
                            :class="[
                                'storagegame__cashdesk__item js-droppable',
                                {
                                    storagegame__cashdesk__item_empty:
                                        item.capacity === 0,
                                },
                            ]"
                            :data-cash-desk-id="cashDeskIndex"
                            :data-id="index"
                            v-for="(item, index) in cashDesk.content"
                            :key="item"
                        >
                            <div class="storagegame__cashdesk__item__img">
                                <img :src="item.img" alt="" />
                            </div>
                            <div class="storagegame__cashdesk__item__capacity">
                                <div
                                    v-for="(segment, segmentIndex) in new Array(
                                        maxCapacity
                                    )"
                                    :key="segment"
                                    :class="[
                                        'storagegame__cashdesk__item__capacity__segment',
                                        {
                                            storagegame__cashdesk__item__capacity__segment_green:
                                                segmentIndex < item.capacity &&
                                                item.capacity === maxCapacity,
                                            storagegame__cashdesk__item__capacity__segment_yellow:
                                                segmentIndex < item.capacity &&
                                                item.capacity < maxCapacity &&
                                                item.capacity > 1,
                                            storagegame__cashdesk__item__capacity__segment_red:
                                                segmentIndex < item.capacity &&
                                                item.capacity === 1,
                                        },
                                    ]"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <img :src="cashDesk.img" alt="" />
                </div>

                <div class="storagegame__draggable-container">
                    <div
                        draggable="true"
                        @dragstart="startDrag($event, draggable, key)"
                        @dragenter.prevent
                        @dragove.prevent
                        :class="[
                            'storagegame__draggable js-draggable',
                            {
                                storagegame__draggable_disabled:
                                    currentStateName === 'gameOver',
                            },
                        ]"
                        v-for="(draggable, key) in gameProps.draggableElems"
                        :data-id="key"
                        :key="draggable + key"
                    >
                        <img :src="draggable.img" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div
            class="btn-container mt-30 mt-xs-25"
            v-if="currentStateName === 'gameOver' && !isSuccess"
        >
            <button
                class="btn animate__animated animate__zoomIn"
                @click="restartGame"
            >
                Попробовать еще раз
            </button>
        </div>
    </div>
</template>


<style >
</style>