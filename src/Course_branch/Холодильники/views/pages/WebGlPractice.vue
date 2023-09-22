
<template>
    <div>
        <div class="catalog__wrapper" v-if="$route.name === 'webGl'">
            <Catalog
                :models-data="models"
                :qurrent-model-key="qurrentModelKey"
                :descripton="show"
                @show-description="showDescription"
                @model-loaded="modelLoaded"
            >
                <button
                    class="btn catalog__btn_prev"
                    :disabled="show || !loaded || !prevDisable"
                    @click="prevModel"
                >
                    Prev
                </button>
                <button
                    class="btn catalog__btn_next"
                    :disabled="show || !loaded || !nextDisable"
                    @click="nextModel"
                >
                    Next
                </button>
            </Catalog>

            <Description
                class="discriotion"
                :description-key="descriptionKey"
                :description-name="descriptionName"
                :description-data="descriptionData"
                :class="{ active: show }"
            >
                <template v-slot:close>
                    <button
                        class="btn btn-primary discriotion__close"
                        @click="closeDescripton"
                    >
                        Закрыть
                    </button>
                </template>
            </Description>
        </div>
    </div>
</template>
  
<script >
import factory from "/catalog/models/factory.glb";
import tank from "/catalog/models/tank.glb";
import nike from "/catalog/models/nike.glb";

import { _CONVERT } from "@/globals/Methods.js";
import { catalogDescription } from "&/courseData/testingData";
import Catalog from "@/components/webgl/Catalog.vue";
import Description from "@/components/webgl/Description.vue";
export default {
    components: {
        Catalog,
        Description,
    },
    data() {
        return {
            show: false,
            loaded: false,
            qurrentModelKey: 0,
            descriptionKey: 0,
            descriptionName: null,

            models: [
                {
                    model: factory,
                    scale: 1,
                    name: "factory",
                },
                {
                    model: tank,
                    scale: 0.5,
                    name: "tank",
                },
                {
                    model: nike,
                    scale: 1,
                    name: "nike",
                },
            ],
            descriptionData: catalogDescription,
        };
    },
    methods: {
        showDescription(key, name) {
            this.show = true;
            this.descriptionKey = key;
            this.descriptionName = name;
        },
        closeDescripton() {
            this.show = false;
        },
        nextModel() {
            if (this.qurrentModelKey < this.models.length - 1) {
                this.qurrentModelKey++;
                this.loaded = false;
                return;
            }
        },
        prevModel() {
            if (this.qurrentModelKey > 0) {
                this.qurrentModelKey--;
                this.loaded = false;
                return;
            }
        },
        modelLoaded(state) {
            this.loaded = state;
        },
    },
    computed: {
        showModel() {
            return (key) => {
                return key === this.qurrentModelKey;
            };
        },
        nextDisable() {
            return this.qurrentModelKey < this.models.length - 1;
        },
        prevDisable() {
            return this.qurrentModelKey > 0;
        },
    },
};
</script>
  
  <style scoped>
</style>
  