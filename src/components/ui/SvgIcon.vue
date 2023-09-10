<template>
    <svg aria-hidden="true" :style="size">
        <use :href="symbolId" :fill="color" />
    </svg>
</template>
  
  <script>
import { defineComponent, computed } from "vue";

export default defineComponent({
    name: "SvgIcon",
    props: {
        prefix: {
            type: String,
            default: "icon",
        },
        name: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            default: "#333",
        },
        w: {
            type: String,
        },
        h: {
            type: String,
        },
    },
    setup(props) {
        const symbolId = computed(() => `#${props.prefix}-${props.name}`);
        const size = computed(() => {
            return {
                width: `${parseInt(props.w)}px`,
                height: `${parseInt(props.h)}px`,
            };
        });
        return { symbolId, size };
    },
});
</script>