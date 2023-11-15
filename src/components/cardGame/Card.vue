
<script>
export default {
    props: {
        cardInfo: { type: Object, default: {} },
        cardBackface: {
            type: String,
            default: "&/images/flipcard-game/card-backface.png",
        },
        isSelected: { type: Boolean, default: false },
        isMatched: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        revealed: { type: Boolean, default: false },
    },
    data: function () {
        return {};
    },
    computed: {
        visibilityOptions: function () {
            return {
                flip: this.isSelected || this.revealed,
                "animate__animated animate__zoomOut flipgame__card_matched flip":
                    this.isMatched,
            };
        },
    },
    methods: {
        selectCard: function () {
            if (
                !this.isSelected &&
                !this.isMatched &&
                !this.disabled &&
                !this.revealed
            ) {
                this.$emit("select");
            }
        },
    },
};
</script>

<template>
    <div :class="['flipgame__card', visibilityOptions]" @click="selectCard">
        <div class="flipgame__card__front">
            <img :src="cardBackface" alt="" />
        </div>
        <div class="flipgame__card__back">
            <img :src="cardInfo.img" alt="" />
        </div>
    </div>
</template>


<style>
</style>

