<script>
import FlipcardContant from "@/components/cardGame/FlipcardContant.vue";
import { flipCardGame } from "&/courseData/testingData";

export default {
    components: { FlipcardContant },

    computed: {
        getCardsData() {
            return flipCardGame();
        },
    },
};
</script>

<template>
    <div>
        <FlipcardContant :game-props="getCardsData"></FlipcardContant>
    </div>
</template>

<style>
</style>