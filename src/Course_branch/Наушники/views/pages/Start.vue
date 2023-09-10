<template>
    <div>
        <h2>Start</h2>
        <h1>{{ getVariations.something }}</h1>
        <SvgIcon name="vue" w="152" h="48"></SvgIcon>
        <SvgIcon name="vite" w="152" h="48"></SvgIcon>
    </div>
</template>

<script>
import SvgIcon from "@/components/ui/SvgIcon.vue";
import { mapGetters } from "vuex";
export default {
    components: {
        SvgIcon,
    },
    computed: {
        ...mapGetters("status", ["variations"]),
        getVariations() {
            if (Object.values(this.variations) > 0) {
                return this.variations;
            } else {
                return "";
            }
        },
    },
};
</script>

<style>
</style>