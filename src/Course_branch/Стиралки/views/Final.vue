<template>
    <div>
        <h1>Final</h1>
        <h2>You watch {{ getTotalWhatch }}% of pages</h2>

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
        ...mapActions("status", ["getExit"]),
        closeCource() {
            this.getExit();
            window.close();
        },
    },
};
</script>

<style>
</style>