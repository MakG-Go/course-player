<template>
  <div>
    <!-- <h1>Splash</h1> -->
    <!-- <div class="splash">
      <button @click="getStart" class="btn">Start</button>
    </div> -->
    <webGl>
      <router-link
        :to="{ name: 'tutorial-page' }"
        v-if="!start"
        @click="getStart"
        class="btn"
        >Start</router-link
      >
      <!-- <button v-if="!start" @click="getStart" class="btn">Start</button> -->
    </webGl>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import webGl from "../components/webGl.vue";
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
// .splash {
//   height: 100vh;
//   background: url("./images/Studio.png") 0 0 / cover no-repeat;
// }
</style>