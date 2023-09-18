<template>
    <div class="navigation-buttons">
        <router-link class="nav-btn" :to="{ name: goPrev }">
            <SvgIcon name="prev"></SvgIcon
        ></router-link>
        <slot></slot>
        <router-link class="nav-btn" :to="{ name: goNext }">
            <SvgIcon name="next"></SvgIcon
        ></router-link>
    </div>
</template>

<script>
import SvgIcon from "./ui/SvgIcon.vue";
import { mapGetters } from "vuex";
export default {
    components: {
        SvgIcon,
    },
    computed: {
        ...mapGetters("header", ["menu"]),
        getRoute() {
            if (this.$route.name !== undefined) {
                return this.menu.findIndex(
                    (el) => el.pageRoute === this.$route.name
                );
            } else {
                return 1;
            }
        },
        goNext() {
            if (this.getRoute + 1 < this.menu.length) {
                return this.menu[this.getRoute + 1].pageRoute;
            }
        },
        goPrev() {
            if (this.getRoute - 1 >= 0) {
                return this.menu[this.getRoute - 1].pageRoute;
            }
        },
    },
};
</script>

<style lang="scss">
.navigation {
    &-buttons {
        display: flex;
        justify-content: center;
        margin-top: auto;
    }
}
</style>>
