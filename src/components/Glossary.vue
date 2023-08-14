<template>
  <div>
    <div class="glossary__link_container">
      <div
        v-for="(glosData, key) in glossaryData"
        :key="glosData.description"
        @click="scrollTo(key)"
        class="glossary__link"
      >
        <span>{{ glosData.liter }}</span>
      </div>
    </div>
    <perfect-scrollbar class="glossary__scroll" ref="scroll">
      <div v-for="glosData in glossaryData" :key="glosData.litter">
        <h2 class="glossary__liter" ref="liter">{{ glosData.liter }}</h2>
        <ul class="glossary__contant">
          <li v-for="literData in glosData.description" :key="literData.title">
            <h3 class="glossary__title">
              {{ literData.title }}
            </h3>
            <p class="glossary__text">
              {{ literData.text }}
            </p>
          </li>
        </ul>
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      glossaryData: [],
    };
  },
  methods: {
    createSlice() {
      let simbols = [];
      simbols = this.glossary.map((item) => item.title.slice(0, 1));
      simbols = simbols
        .filter((item, key) => simbols.indexOf(item) === key)
        .sort();

      simbols.forEach((simbol, key) => {
        let glosObject = new Object();

        glosObject.liter = simbol;

        glosObject.description = [];

        this.glossaryData.push(glosObject);

        this.glossary.forEach((item, ndx) => {
          let firstLiter = item.title.slice(0, 1);
          firstLiter === simbol ? glosObject.description.push(item) : "";
        });
      });
    },
    scrollTo(key) {
      let container = this.$refs.scroll.$el;
      let elem = this.$refs.liter[key];
      let tl_1 = this.$gsap.timeline({
        defaults: {
          ease: "Sine.easeOut",
        },
      });

      tl_1.to(container, {
        scrollTop: elem.offsetTop,
        duration: 1,
      });
    },
  },
  mounted() {
    this.createSlice();
  },
  computed: {
    ...mapGetters("header", ["glossary"]),
  },
};
</script>

<style lang="scss" scoped>
.glossary {
  &__scroll {
    height: calc(50vh - 75px);
    padding-right: 3rem;
  }
  &__link {
    min-width: 40px;
    margin-right: 1em;
    margin-bottom: 0.5rem;
    padding: 10px;
    border-radius: 5px;
    font-size: 24px;
    text-align: center;
    color: white;
    background-color: rgba(24, 24, 24, 0.5);
    cursor: pointer;
    &_container {
      display: flex;
      flex-wrap: wrap;
    }
  }
  &__liter {
    color: white;
    margin-bottom: 0.5em;
  }
  &__contant {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 0.5em;
    margin-bottom: 1em;
  }
  &__title {
    color: white;
  }
  &__text {
    color: rgb(185, 185, 185);
  }
}
</style>>

