<template>
    <div>
        <h1>Components Example</h1>
        <p>{{ $route.params.id }}</p>
        <KeybordPracticeVue :question-data="keybord_1"></KeybordPracticeVue>
    </div>
</template>

<script>
import { keybordData_1 } from "&/courseData/testingData";
import KeybordPracticeVue from "@/components/KeybordPractice.vue";
export default {
    components: { KeybordPracticeVue },
    computed: {
        keybord_1() {
            return keybordData_1();
        },
    },
};
</script>

<style>
</style>