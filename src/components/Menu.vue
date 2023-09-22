<template>
    <div>
        <ul class="menu__nav-content">
            <perfect-scrollbar class="menu__scroll">
                <li
                    v-for="(page, titleKey) in menu"
                    :key="page.getRoutParams"
                    class="menu__nav-title"
                    :class="getActivTitleClass(titleKey)"
                    :style="getLinksAnimate(titleKey)"
                >
                    <router-link
                        @click="toggleMenu"
                        :to="{ name: page.pageRoute }"
                        ><h4>{{ page.name }}</h4></router-link
                    >
                    <div v-if="page.scrollPage">
                        <ul class="menu__nav-submenu">
                            <li
                                v-for="(
                                    subScroll, subTitleKey
                                ) in page.scrollPage"
                                class="menu__nav-subtitle"
                                :class="
                                    getActivSubtitleClass(titleKey, subTitleKey)
                                "
                                :key="subScroll.name"
                            >
                                <router-link
                                    @click="toggleMenu"
                                    :to="{
                                        name: page.pageRoute,
                                        hash: subScroll.hash,
                                    }"
                                    ><h3>{{ subScroll.name }}</h3></router-link
                                >
                            </li>
                        </ul>
                    </div>
                </li>
            </perfect-scrollbar>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
    methods: {
        ...mapActions("header", ["toggleMenu"]),
    },
    computed: {
        ...mapGetters("header", ["menu", "menuState"]),

        getLinksAnimate() {
            return (id) => {
                if (this.menuState) {
                    return {
                        opacity: "1",
                        transform: "translateY(0)",
                        "transition-delay": 0.15 + Number(id * 0.1) + "s",
                    };
                }
            };
        },
        getActivTitleClass() {
            return (key) => {
                return {
                    active: this.menu[key].pageRoute === this.$route.name,
                };
            };
        },
        getActivSubtitleClass() {
            return (key, ndx) => {
                return {
                    active:
                        this.menu[key].scrollPage[ndx].hash ===
                        this.$route.hash,
                };
            };
        },
    },
};
</script>

<style lang="scss" scoped>
.menu {
    &__scroll {
        height: calc(50vh - 5px);
        padding-right: 3rem;
    }
}
</style>

