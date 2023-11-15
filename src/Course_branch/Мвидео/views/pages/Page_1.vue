<template>
    <div>
        <h1>Игра</h1>
        <StorageGame :game-props="storageGame"></StorageGame>
        <!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
    </div>
</template>

<script>
import StorageGame from "@/components/StorageGame.vue";
import { storageGame_1 } from "&/courseData/testingData";
import { initFlipCard } from "@/scripts/flipCard.js";

export default {
    components: { StorageGame },
    computed: {
        storageGame() {
            return storageGame_1();
        },
    },
    mounted() {
        // initFlipCard();
    },
};
</script>

<style>
</style>