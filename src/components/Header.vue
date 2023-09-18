<template>
    <div>
        <div class="header" :class="getHeaderClass">
            <div class="header__container">
                <button
                    v-for="(navBtn, ndx) in navButtons"
                    :key="navBtn.name"
                    class="header-btn"
                    @click="showNavfromHeader(ndx)"
                >
                    <SvgIcon
                        :name="navBtn.icon"
                        class="header_icon header_icon-menu"
                    ></SvgIcon>
                </button>

                <SvgIcon name="show-menu" class="header_icon-show"></SvgIcon>
            </div>
        </div>

        <div class="menu__nav" :class="getMenuClass">
            <div class="menu__contant" :class="gatMenuContant">
                <button class="menu__close" @click="toggleMenu">
                    <SvgIcon name="close"></SvgIcon>
                </button>
                <ul class="menu__contant_buttons">
                    <li
                        class="menu__nav-btn"
                        v-for="(button, key) in navButtons"
                        :key="button.name"
                        :class="addMenuButtonClass(key)"
                        @click="showNav(button, key)"
                    >
                        <span>{{ button.name }}</span>
                    </li>
                </ul>

                <hr class="hr" />
                <div class="menu__container">
                    <transition
                        mode="out-in"
                        enter-active-class="animate__animated animate__faster animate__fadeIn"
                        leave-active-class="animate__animated animate__faster animate__fadeOutRight"
                    >
                        <component
                            :is="activeComponent"
                            v-if="activeComponent"
                        />
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from "./Menu.vue";
import Glossary from "./Glossary.vue";
import Download from "./Download.vue";
import SvgIcon from "./ui/SvgIcon.vue";

import { shallowRef } from "vue";
import { mapActions, mapGetters } from "vuex";

export default {
    components: { Menu, Glossary, Download, SvgIcon },
    data() {
        return {
            navButtons: [
                {
                    icon: "menu",
                    name: "Навигация",
                    active: true,
                    component: shallowRef(Menu),
                },
                {
                    icon: "gloss",
                    name: "Глоссарий",
                    active: false,
                    component: shallowRef(Glossary),
                },
                {
                    icon: "load",
                    name: "Материалы для скачивания",
                    active: false,
                    component: shallowRef(Download),
                },
            ],

            activeComponent: shallowRef(Menu),
        };
    },
    methods: {
        ...mapActions("header", ["toggleMenu"]),

        showNavfromHeader(num) {
            this.toggleMenu();

            this.navButtons.forEach((item, ndx) => {
                num === ndx ? (item.active = true) : (item.active = false);
            });
            this.addMenuButtonClass(num);
            this.activeComponent = this.navButtons[num].component;
        },

        showNav(cmp, key) {
            this.navButtons.forEach((item, ndx) => {
                key === ndx ? (item.active = true) : (item.active = false);
            });
            this.activeComponent = cmp.component;
        },
    },
    watch: {
        // menuState() {
        //     !this.menuState
        //         ? (this.activeComponent = shallowRef(Menu))
        //         : this.navButtons.forEach((item, ndx) => {
        //               ndx === 0 ? (item.active = true) : (item.active = false);
        //           });
        // },
    },
    computed: {
        ...mapGetters("status", ["visitTotal", "visit", "objectivs"]),
        ...mapGetters("header", ["menuState"]),

        getMenuClass() {
            return {
                "menu__nav-open": this.menuState,
            };
        },
        getHeaderClass() {
            return {
                header__open: this.menuState,
            };
        },
        getBurgerClass() {
            return {
                header__button_open: this.menuState,
            };
        },
        gatMenuContant() {
            return {
                menu__contant_open: this.menuState,
            };
        },
        addMenuButtonClass() {
            return (key) => {
                return {
                    "menu__nav-btn--open": this.navButtons[key].active,
                };
            };
        },
    },
};
</script>

<style lang="scss" scoped>
</style>

