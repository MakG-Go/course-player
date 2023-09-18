<template>
    <div>
        <perfect-scrollbar class="download__scroll">
            <ul>
                <li
                    v-for="(file, key) in downloads"
                    :key="file.name + key"
                    class="download__item"
                    @click="downloadMaterial(e, file.link)"
                >
                    <p class="download__item-title mb-pink">
                        <span>{{ file.name }}</span>
                    </p>
                    <p class="download__item-size">
                        <span>{{ file.size }}</span>
                    </p>
                </li>
            </ul>
        </perfect-scrollbar>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters("header", ["downloads"]),
    },
    methods: {
        downloadMaterial: function (e, material) {
            console.log(material);
            window.open(material, "newwindow", "width=1000,height=700");
        },
    },
};
</script>

<style lang="scss" scoped>
.download {
    &__scroll {
        height: calc(50vh - 5px);
        padding-right: 3rem;
    }
    &__item {
        background-color: rgba(0, 0, 0, 1);
        border-radius: 10px;
        padding: 0.5em;
        margin-bottom: 1em;
        cursor: pointer;
        transition-property: background-color;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;
        &-title {
            text-transform: uppercase;
            font-size: 0.818em;
            color: #c10230;
            white-space: nowrap;
            display: flex;
            align-items: center;
            span {
                margin-right: 1em;
            }
            @media screen and (max-width: 768px) {
                white-space: wrap;
            }
            &::after {
                content: "";
                width: 100%;
                height: 1px;
                background: -webkit-gradient(
                    linear,
                    left top,
                    right top,
                    from(#c10230),
                    to(rgba(193, 2, 48, 0))
                );
                background: -o-linear-gradient(
                    left,
                    #c10230 0,
                    rgba(193, 2, 48, 0) 100%
                );
                background: linear-gradient(
                    90deg,
                    #c10230 0,
                    rgba(193, 2, 48, 0) 100%
                );
            }
        }
        &-size {
            color: white;
            font-size: 0.818em;
        }
        &:hover {
            background-color: rgba(0, 0, 0, 0.5);
        }
    }
}
</style>

