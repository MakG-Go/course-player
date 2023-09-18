<template>
    <div class="glossary__container">
        <perfect-scrollbar class="glossary__scroll" ref="scroll">
            <div v-for="glosData in glossaryData" :key="glosData.litter">
                <!-- <h2 class="glossary__liter" ref="liter">
                    {{ glosData.liter }}
                </h2> -->
                <ul class="glossary__contant" ref="liter">
                    <li
                        class="mb-pink"
                        v-for="literData in glosData.description"
                        :key="literData.title"
                    >
                        <div class="glossary__title">
                            <span>{{ literData.title }}</span>
                        </div>
                        <p class="glossary__text">
                            {{ literData.text }}
                        </p>
                    </li>
                </ul>
            </div>
        </perfect-scrollbar>
        <div class="glossary__link_container">
            <div
                v-for="(glosData, key) in glossaryData"
                :key="glosData.description"
                @click="scrollTo(key)"
                class="glossary__link"
            >
                <span>{{ glosData.liter }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            glossaryData: [],
        };
    },
    methods: {
        createSlice() {
            let simbols = [];
            simbols = this.glossary.map((item) => item.title.slice(0, 1));
            simbols = simbols
                .filter((item, key) => simbols.indexOf(item) === key)
                .sort();

            simbols.forEach((simbol, key) => {
                let glosObject = new Object();

                glosObject.liter = simbol;

                glosObject.description = [];

                this.glossaryData.push(glosObject);

                this.glossary.forEach((item, ndx) => {
                    let firstLiter = item.title.slice(0, 1);
                    firstLiter === simbol
                        ? glosObject.description.push(item)
                        : "";
                });
            });
        },
        scrollTo(key) {
            let container = this.$refs.scroll.$el;
            let elem = this.$refs.liter[key];
            let tl_1 = this.$gsap.timeline({
                defaults: {
                    ease: "Sine.easeOut",
                },
            });

            tl_1.to(container, {
                scrollTop: elem.offsetTop,
                duration: 1,
            });
        },
    },
    mounted() {
        this.createSlice();
    },
    computed: {
        ...mapGetters("header", ["glossary"]),
    },
};
</script>

<style lang="scss" scoped>
.glossary {
    &__scroll {
        height: calc(50vh - 10px);
        padding-right: 3rem;
    }
    &__container {
        display: flex;
    }
    &__link {
        width: 1.909em;
        height: 1.909em;
        margin-right: 1em;
        margin-bottom: 0.5rem;
        padding: 10px;
        border-radius: 5px;
        text-align: center;
        color: white;
        background-color: black;
        line-height: 1;
        cursor: pointer;

        &_container {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            height: calc(50vh - 75px);
        }
    }
    &__liter {
        color: white;
        margin-bottom: 0.5em;
    }
    &__contant {
        background-color: rgba(0, 0, 0, 1);
        border-radius: 10px;
        padding: 0.5em;
        margin-bottom: 1em;
    }
    &__title {
        text-transform: uppercase;
        font-size: 0.818em;
        color: #c10230;
        white-space: nowrap;
        display: flex;
        align-items: center;
        span {
            margin-right: 1em;
        }
        &::after {
            content: "";
            width: 100%;
            height: 1px;
            background: -webkit-gradient(
                linear,
                left top,
                right top,
                from(#c10230),
                to(rgba(193, 2, 48, 0))
            );
            background: -o-linear-gradient(
                left,
                #c10230 0,
                rgba(193, 2, 48, 0) 100%
            );
            background: linear-gradient(
                90deg,
                #c10230 0,
                rgba(193, 2, 48, 0) 100%
            );
        }
    }
    &__text {
        font-size: 0.818em;
        color: rgb(185, 185, 185);
    }
}
</style>>

