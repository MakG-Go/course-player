<template>
    <div>
        <!-- <h1>Splash</h1> -->
        <!-- <div class="splash">
      <button @click="getStart" class="btn">Start</button>
    </div> -->
        <!-- <webGl>
            <router-link
                :to="{ name: 'tutorial-page' }"
                v-if="!start"
                @click="getStart"
                class="btn"
                >Start</router-link
            >
        </webGl> -->

        <router-link
            :to="{ name: 'tutorial-page' }"
            v-if="!start"
            @click="getStart"
            class="btn"
            >Start</router-link
        >
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import webGl from "@/components/webGl.vue";
export default {
    components: {
        webGl,
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