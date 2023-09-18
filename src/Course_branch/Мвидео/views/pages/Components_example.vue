<template>
    <div>
        <h1>Components Example</h1>
        <p>{{ $route.params.id }}</p>
        <!-- <KeybordPracticeVue :question-data="keybord_1"></KeybordPracticeVue> -->
        <Testing :question-storage="testing"></Testing>
    </div>
</template>

<script>
import { keybordData_1, testing_1 } from "&/courseData/testingData";
import KeybordPracticeVue from "@/components/KeybordPractice.vue";
import Testing from "@/components/Testing.vue";
export default {
    components: { KeybordPracticeVue, Testing },
    computed: {
        keybord_1() {
            return keybordData_1();
        },
        testing() {
            return testing_1().date;
        },
    },
};
</script>

<style>
</style>