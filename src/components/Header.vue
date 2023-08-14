<template>
  <div>
    <div class="header" :class="getHeaderClass">
      <div class="header__container">
        <button
          @click="toggleMenu($route.name)"
          class="header__button header__button_burger"
          :class="getBurgerClass"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <div class="menu__nav" :class="getMenuClass">
      <div class="menu__contant" :class="gatMenuContant">
        <ul class="menu__contant_buttons">
          <li
            class="menu__nav-btn"
            v-for="(button, key) in navButtons"
            :key="button.name"
            :class="addMenuButtonClass(key)"
            @click="showNav(button, key)"
          >
            <span>{{ button.name }}</span>
          </li>
        </ul>

        <hr class="hr" />
        <div class="menu__container">
          <transition
            mode="out-in"
            enter-active-class="animate__animated animate__faster animate__fadeIn"
            leave-active-class="animate__animated animate__faster animate__fadeOutRight"
          >
            <component :is="activeComponent" v-if="activeComponent" />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import Glossary from "./Glossary.vue";
import { defineAsyncComponent, markRaw, shallowRef } from "vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { Menu, Glossary },
  data() {
    return {
      navButtons: [
        {
          name: "Навигация",
          active: true,
          //   component: markRaw(defineAsyncComponent(() => import("./Menu.vue"))),
          component: shallowRef(Menu),
        },
        {
          name: "Глоссарий",
          active: false,
          //   component: markRaw(
          //     defineAsyncComponent(() => import("./Glossary.vue"))
          //   ),
          component: shallowRef(Glossary),
        },
      ],
      //   activeComponent: markRaw(
      //     defineAsyncComponent(() => import("./Menu.vue"))
      //   ),
      activeComponent: shallowRef(Menu),
    };
  },
  methods: {
    ...mapActions("header", ["toggleMenu"]),
    showNav(cmp, key) {
      this.navButtons.forEach((item, ndx) => {
        key === ndx ? (item.active = true) : (item.active = false);
      });
      this.activeComponent = cmp.component;
    },
  },
  watch: {
    menuState() {
      !this.menuState
        ? (this.activeComponent = shallowRef(Menu))
        : this.navButtons.forEach((item, ndx) => {
            ndx === 0 ? (item.active = true) : (item.active = false);
          });
    },
  },
  computed: {
    ...mapGetters("header", ["menuState"]),
    getMenuClass() {
      return {
        "menu__nav-open": this.menuState,
      };
    },
    getHeaderClass() {
      return {
        header__open: this.menuState,
      };
    },
    getBurgerClass() {
      return {
        header__button_open: this.menuState,
      };
    },
    gatMenuContant() {
      return {
        menu__contant_open: this.menuState,
      };
    },
    addMenuButtonClass() {
      return (key) => {
        return {
          "menu__nav-btn--open": this.navButtons[key].active,
        };
      };
    },
  },
};
</script>

<style lang="scss" scoped>
</style>>

