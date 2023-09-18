<template>
    <div>
        <!-- Сплеш -->
        <Splash :class="{ disable: start }"></Splash>

        <!-- Контейнер глобального scrollbar -->

        <perfect-scrollbar
            v-show="start"
            ref="globalScroll"
            @ps-scroll-y="onGlobalScroll"
            class="js-global-scroll"
        >
            <div class="wrapper" :class="getBlackWrapper">
                <div class="container-full">
                    <!-- Меню/Хедер -->

                    <Header> </Header>

                    <router-view v-slot="{ Component }">
                        <transition
                            appear
                            mode="out-in"
                            appear-active-class="animate__animated animate__fadeIn"
                            enter-active-class="animate__animated animate__faster animate__fadeInLeft"
                            leave-active-class="animate__animated animate__faster animate__fadeOut"
                        >
                            <component
                                :is="Component"
                                :key="$route.path"
                            ></component>
                        </transition>
                    </router-view>

                    <!-- Кнопки навигации -->

                    <NavigationButton>
                        <!-- <h2 class="btn__counter">
                            {{ checkRouteName + 1 }}/{{ menu.length }}
                        </h2> -->
                    </NavigationButton>
                </div>
            </div>
        </perfect-scrollbar>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import NavigationButton from "@/components/NavigationButton.vue";
import Splash from "&/views/Splash.vue";
import { mapGetters, mapActions } from "vuex";
export default {
    components: { Header, NavigationButton, Splash },

    computed: {
        ...mapGetters("header", ["curentPage", "menu", "menuState"]),
        ...mapGetters("status", [
            "start",
            "lastPage",
            "objectivs",
            "restorAPIobjectivs",
        ]),

        checkRouteName() {
            if (this.$route.name === undefined) {
                return 1;
            } else {
                return this.curentPage(this.$route.name);
            }
        },
        getBlackWrapper() {
            return {
                "wrapper-black": this.$route.name === "tutorial-page",
            };
        },
    },

    methods: {
        ...mapActions("status", [
            "addVisitPage",
            "setLocation",
            "saveState",
            "checkTotalVisit",
        ]),

        /** Блокируем скролл при открытии меню */

        onGlobalScroll(event) {
            if (this.menuState) {
                let scrollContainer = this.$refs.globalScroll;
                scrollContainer.$el.scrollTop =
                    scrollContainer.ps.lastScrollTop;
            }
        },
    },

    watch: {
        start() {
            if (this.start) {
                this.addVisitPage(this.$route.name);
                if (this.lastPage !== undefined && this.lastPage !== null) {
                    this.$router.push({ path: this.lastPage });
                }
                this.restorAPIobjectivs;
            }
        },
        $route() {
            if (this.start) {
                this.addVisitPage(this.$route.name);
                this.setLocation(this.$route.path);
                this.saveState();
                this.checkTotalVisit();
            }
        },
    },
};
</script>

<style>
</style>