<template>
    <div class="navigation-buttons">
        <router-link class="btn" :to="{ name: goPrev }">Prev</router-link>
        <slot></slot>
        <router-link class="btn" :to="{ name: goNext }">Next</router-link>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
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
        margin-top: 3rem;
    }
}
</style>>
