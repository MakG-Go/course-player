<template>
    <div class="splash">
        <div class="container-full">
            <div class="row splash-container h-100">
                <div class="col-lg-6 col-xs-12">
                    <div class="flex flex__col h-100">
                        <SvgIcon name="logo" w="210"></SvgIcon>
                        <div class="bottom">
                            <p class="text-red text-uppercase">
                                Электронный курс
                            </p>
                            <h1 class="text-white text-uppercase splash-title">
                                Смарт-часы
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-xs-12">
                    <div class="flex flex__col jf-end h-100">
                        <img
                            class="mb-green center"
                            src="/images/splash.png"
                            alt=""
                        />
                        <router-link
                            :to="{ name: 'tutorial-page' }"
                            @click="getStart"
                            class="btn splash-btn"
                        >
                            <span>Начать</span
                            ><SvgIcon
                                name="next"
                                w="50"
                                h="20"
                                color="white"
                            ></SvgIcon>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SvgIcon from "@/components/ui/SvgIcon.vue";
export default {
    components: {
        SvgIcon,
    },
    computed: {
        ...mapGetters("status", ["start"]),
    },
    methods: {
        ...mapActions("status", ["getStart"]),
    },
};
</script>

<style lang="scss">
</style>