<template>
    <div>
        <h1>Final</h1>
        <h2>You watch {{ getTotalWhatch }}% of pages</h2>

        <button>
            <router-link class="btn" :to="{ name: 'page_2' }">Prev</router-link>
        </button>

        <div>
            <button @click="closeCource" class="btn">Close</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    computed: {
        ...mapGetters("status", ["visitTotal", "visit"]),
        getTotalWhatch() {
            return Math.floor((this.visit.length * 100) / this.visitTotal);
        },
    },
    methods: {
        /** Обязательно для завершения курса */
        ...mapActions("status", ["setStatusCompleted"]),
        closeCource() {
            this.setStatusCompleted();
            window.close();
        },
    },
};
</script>

<style>
</style>