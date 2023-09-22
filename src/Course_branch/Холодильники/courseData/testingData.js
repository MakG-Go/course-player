export function keybordData_1() {
    return [
        {
            /** тип вопроса */
            type: "keybord",
            /** Title вопроса по дефолту он выключен методом needQuestionTitle*/
            qTitle: "",
            /** Текст вопроса */
            qText:
                "Шла саша по шоссе и сосала...",
            /** Текст ответа */
            word: "Сушку",
            /** Фидбэк */
            feed: {
                correct: {
                    title: "Верно!",
                    text: "Правильный ответ!",
                },
                incorrect: {
                    title: "Ошибка!",
                    text: "Попробуйте еще раз",
                },
            },
        },
    ];
}

import flore from "/catalog/images/flore.jpg"
import pipe from "/catalog/images/pipe.jpg"
import tank from "/catalog/images/tank.jpg"

export const catalogDescription = {
    nike: [
        {
            name: "Подошва",
            definition:
                "Нижняя часть обуви, обеспечивающая поддержку и сцепление с поверхностью.",
        },
        {
            name: "Верх",
            definition:
                "Часть обуви, закрывающая верхнюю часть стопы.",
        },
        {
            name: "Мягкая окантовка",
            definition:
                "Особенность обуви, при которой края выполнены из мягкого материала для большего комфорта.",
        },
        {
            name: "Стелька каблука",
            definition:
                "Часть обуви, которая охватывает заднюю часть пятки и обеспечивает поддержку.",
        },
        {
            name: "Logo",
            definition:
                "Символ или рисунок, представляющий торговую марку или компанию и часто изображаемый на обуви.",
        },
        {
            name: "Язычок обуви",
            definition:
                "Часть обуви, защищающая верхнюю часть стопы от шнурков и обычно соединенная с верхом возле пальцев",
        },
        {
            name: "Шнурки",
            definition:
                "Шнуры или веревки, используемые для застегивания и затягивания обуви",
        },
        {
            name: "Накладная колодка",
            definition:
                "Компонент обуви, обеспечивающий структуру и поддержку верха",
        },
    ],
    tank: [
        {
            name: "Platform",
            definition:
                "A platform is a flat raised structure that people can stand on, usually made of wood, stone, or metal. It can be used as a stage for performers or speakers, or as a place to wait for a train.",
            image: flore,
        },
        {
            name: "pipe",
            definition:
                "A tube of metal, plastic, or other material used to convey water, gas, oil, or other fluid substances",
            image: pipe,
        },
        {
            name: "tank",
            definition:
                "A large container for storing liquid or gas",
            image: tank,
        },
    ],
    factory: [
        {
            name: "pipe",
            definition:
                "A tube of metal, plastic, or other material used to convey water, gas, oil, or other fluid substances",
            image: flore,
        },
        {
            name: "tank",
            definition:
                "A large container for storing liquid or gas",
            image: pipe,
        },
        {
            name: "Platform",
            definition:
                "A platform is a flat raised structure that people can stand on, usually made of wood, stone, or metal. It can be used as a stage for performers or speakers, or as a place to wait for a train.",
            image: tank,
        },
    ],
}

