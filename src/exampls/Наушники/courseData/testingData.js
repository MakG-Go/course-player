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