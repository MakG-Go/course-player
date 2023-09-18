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

export function testing_1() {
    return {
        date: [
            {
                type: 'radio',
                text: 'Какой документ даёт понимание, как должен быть оформлен магазин?',
                answers: [
                    {
                        text: 'Стандарт оформления торгового пространства',
                        correct: true
                    },
                    {
                        text: 'Стандарт ПРОМО',
                        correct: false
                    },
                    {
                        text: 'Стандарт мерчандайзинга',
                        correct: false
                    },

                ]
            },
            {
                type: 'radio',
                text: 'Что не входит в элементы оформления ФА на входной зоне в М.Видео?',
                answers: [
                    {
                        text: 'Промобаннер',
                        correct: false
                    },
                    {
                        text: 'Корзина с товаром',
                        correct: true
                    },
                    {
                        text: 'Стойка А2',
                        correct: false
                    },
                ]
            },
            {
                type: 'radio',
                text: 'Промоценник выделяется:',
                answers: [
                    {
                        text: 'Жёлтой бумагой',
                        correct: false
                    },
                    {
                        text: 'Самопечатной вставкой',
                        correct: false
                    },
                    {
                        text: 'Универсальной вставкой',
                        correct: true
                    },
                ]
            },
            {
                type: 'radio',
                text: 'Какой вставкой оформляются ценники с атрибутом «Ж» в Эльдорадо?',
                answers: [
                    {
                        text: 'Акция',
                        correct: false
                    },
                    {
                        text: 'Суперцена',
                        correct: false
                    },
                    {
                        text: 'Sale',
                        correct: true
                    },
                ]
            },
            {
                type: 'radio',
                text: 'Какая зона относится к ЦОК?',
                answers: [
                    {
                        text: 'Кассы',
                        correct: false
                    },
                    {
                        text: 'Все перечисленные',
                        correct: true
                    },
                    {
                        text: 'B2B',
                        correct: false
                    },
                    {
                        text: 'Сервис',
                        correct: false
                    },
                ]
            },
            {
                type: 'radio',
                text: 'К какому типу оформления относится оформление Black Friday?',
                answers: [
                    {
                        text: 'Сезонное оформление',
                        correct: true
                    },
                    {
                        text: 'Оформление ФА',
                        correct: false
                    },
                    {
                        text: 'Оформление ТМА',
                        correct: false
                    },
                ]
            },


        ]
    }
}