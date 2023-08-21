<template>
    <div>
        <Splash :class="{ disable: start }"></Splash>

        <perfect-scrollbar
            v-show="start"
            ref="globalScroll"
            @ps-scroll-y="onGlobalScroll"
            class="js-global-scroll"
        >
            <div class="wrapper">
                <div class="container">
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

                    <NavigationButton>
                        <h2 class="btn__counter">
                            {{ checkRouteName + 1 }}/{{ menu.length }}
                        </h2></NavigationButton
                    >
                </div>
            </div>
        </perfect-scrollbar>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import NavigationButton from "./components/NavigationButton.vue";
import Splash from "&/views/Splash.vue";
import { mapGetters, mapActions } from "vuex";
export default {
    components: { Header, NavigationButton, Splash },
    computed: {
        ...mapGetters("header", ["curentPage", "menu", "menuState"]),
        ...mapGetters("status", ["start"]),
        checkRouteName() {
            if (this.$route.name === undefined) {
                return 1;
            } else {
                return this.curentPage(this.$route.name);
            }
        },
    },
    methods: {
        ...mapActions("status", ["addVisitPage"]),
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
        $route() {
            this.addVisitPage(this.$route.name);
        },
    },
};
</script>

<style>
.wrapper {
    margin: 55px 0;
}
</style>