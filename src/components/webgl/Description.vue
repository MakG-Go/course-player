<script>
export default {
    props: {
        descriptionData: {
            type: Object,
        },
        descriptionKey: {
            type: Number,
            default: 0,
        },
        descriptionName: {
            type: String,
        },
    },
    // data() {
    //     return {
    //         description: {
    //             nike: [
    //                 {
    //                     name: "Подошва",
    //                     definition:
    //                         "Нижняя часть обуви, обеспечивающая поддержку и сцепление с поверхностью.",
    //                 },
    //                 {
    //                     name: "Верх",
    //                     definition:
    //                         "Часть обуви, закрывающая верхнюю часть стопы.",
    //                 },
    //                 {
    //                     name: "Мягкая окантовка",
    //                     definition:
    //                         "Особенность обуви, при которой края выполнены из мягкого материала для большего комфорта.",
    //                 },
    //                 {
    //                     name: "Стелька каблука",
    //                     definition:
    //                         "Часть обуви, которая охватывает заднюю часть пятки и обеспечивает поддержку.",
    //                 },
    //                 {
    //                     name: "Logo",
    //                     definition:
    //                         "Символ или рисунок, представляющий торговую марку или компанию и часто изображаемый на обуви.",
    //                 },
    //                 {
    //                     name: "Язычок обуви",
    //                     definition:
    //                         "Часть обуви, защищающая верхнюю часть стопы от шнурков и обычно соединенная с верхом возле пальцев",
    //                 },
    //                 {
    //                     name: "Шнурки",
    //                     definition:
    //                         "Шнуры или веревки, используемые для застегивания и затягивания обуви",
    //                 },
    //                 {
    //                     name: "Накладная колодка",
    //                     definition:
    //                         "Компонент обуви, обеспечивающий структуру и поддержку верха",
    //                 },
    //             ],
    //             tank: [
    //                 {
    //                     name: "Platform",
    //                     definition:
    //                         "A platform is a flat raised structure that people can stand on, usually made of wood, stone, or metal. It can be used as a stage for performers or speakers, or as a place to wait for a train.",
    //                     image: "/catalog/images/flore.jpg",
    //                 },
    //                 {
    //                     name: "pipe",
    //                     definition:
    //                         "A tube of metal, plastic, or other material used to convey water, gas, oil, or other fluid substances",
    //                     image: "/catalog/images/pipe.jpg",
    //                 },
    //                 {
    //                     name: "tank",
    //                     definition:
    //                         "A large container for storing liquid or gas",
    //                     image: "/catalog/images/tank.jpg",
    //                 },
    //             ],
    //             factory: [
    //                 {
    //                     name: "pipe",
    //                     definition:
    //                         "A tube of metal, plastic, or other material used to convey water, gas, oil, or other fluid substances",
    //                     image: "/catalog/images/pipe.jpg",
    //                 },
    //                 {
    //                     name: "tank",
    //                     definition:
    //                         "A large container for storing liquid or gas",
    //                     image: "/catalog/images/tank.jpg",
    //                 },
    //                 {
    //                     name: "Platform",
    //                     definition:
    //                         "A platform is a flat raised structure that people can stand on, usually made of wood, stone, or metal. It can be used as a stage for performers or speakers, or as a place to wait for a train.",
    //                     image: "/catalog/images/flore.jpg",
    //                 },
    //             ],
    //         },
    //     };
    // },

    computed: {
        getData() {
            if (this.descriptionName !== null) {
                return {
                    name: this.descriptionData[this.descriptionName][
                        this.descriptionKey
                    ].name,
                    definition:
                        this.descriptionData[this.descriptionName][
                            this.descriptionKey
                        ].definition,
                    image: this.descriptionData[this.descriptionName][
                        this.descriptionKey
                    ].image,
                };
            } else {
                return {
                    name: "",
                    definition: "",
                    image: "",
                };
            }
        },
        checkData() {
            return this.descriptionName !== null;
        },
    },
};
</script>


<template>
    <div>
        <h1 class="discriotion__title">
            {{ getData.name }}
        </h1>

        <h3 class="discriotion__text">
            {{ getData.definition }}
        </h3>

        <div class="discriotion__img-container">
            <img class="discriotion__img" :src="getData.image" alt="" />
        </div>

        <slot name="close"></slot>
    </div>
</template>



<style>
</style>
