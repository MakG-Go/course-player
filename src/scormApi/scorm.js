import { ScormMockApi } from "@/scormData/scormData.js"
/** Импорт типа сборки dev или build */
import { DEV_MODE } from "@/globals/Const";
/** Импортируем цели курса */
import { Objectives } from '&/objectivs';

export class ScormAdapter {

    constructor() {
        this.api = null;
    }

    initialize() {
        if (this.api === null) {
            this.api = this.initApi();

        }

        if (this.api !== null) {
            this.api.Initialize("");
            console.log("SCORM initialized successfully.");

            if (this.getValue("cmi.objectives._count") && parseInt(this.getValue("cmi.objectives._count")) > 0) {
                console.log("The course has objectives.");
            }
            else {
                this.setLocation();

                this.setValue("cmi.location", "5");
                this.setValue("cmi.score.min", "0");
                this.setValue("cmi.score.max", "100");
                this.setValue("cmi.score.raw", "0");
                this.setValue("cmi.score.scaled", "0");
                this.setValue("cmi.completion_status", "incomplete");
                this.setValue("cmi.success_status", "unknown");
                this.creareObjectives(Objectives)
                this.commit()

                if (!this.setValue("cmi.objectives.0.score.raw", 0)) {
                    console.error('Error setting objective');
                }

                console.log("Now course have objectives.");
            }

        } else {
            console.log("Unable to locate the LMS API Adapter.", this.api);
        }
    }

    commit() {
        return this.api.Commit("") === "true";
    }

    terminate() {
        return this.api.Terminate("") === "true";
    }

    getValue(key) {
        if (!DEV_MODE) {
            return this.api.GetValue(key);
        }
        else {
            ''
        }
    }

    setValue(key, value) {
        if (!DEV_MODE) {
            return this.api.SetValue(key, value);
        }
        else {
            ''
        }
    }

    /** Создание API курса */
    initApi() {
        let API = null;

        if (window.API_1484_11) {
            API = window.API_1484_11;
            console.log('SCORM API found in current window (1)');
        }

        else if (window.parent && window.parent.API_1484_11) {
            API = window.parent.API_1484_11;
            console.log('SCORM API found in parent window (2)');
        }

        else if (window.opener && window.opener.API_1484_11) {
            API = window.opener.API_1484_11;
            console.log('SCORM API found in opener window (3)');
        }
        else if (window.opener && window.opener.parent.API_1484_11) {
            API = window.opener.parent.API_1484_11;
            console.log('SCORM API found in opener window (4)');
        }

        else {
            console.log('Unable to locate the SCORM API.');
        }

        return API;
    }

    /** Сохранение локации курса */
    setLocation() {
        const currentPage = window.location.href;
        const locationResult = this.getValue("cmi.location");

        if (!DEV_MODE) {
            if (locationResult === "") {

                this.setValue("cmi.location", currentPage);

            }
            else if (this.getValue("cmi.location") !== currentPage) {

                this.setValue("cmi.location", currentPage);

                // console.log("New Location saved: " + currentPage);
            }
            else {
                console.log("Location already exists: " + locationResult);
            }

        }

        ScormMockApi.SetValue("cmi.location", this.getValue("cmi.location"))

        console.log('setLocation')
    };

    /** Получаем последнюю страницу */
    getLastPage() {

        const route = ScormMockApi.GetValue("cmi.location")

        if (route == null || route == undefined || route == "null") {
            return "/"
        }
        else {
            return "/" + ScormMockApi.GetValue("cmi.location").split('/').slice(-1).join()
        }

    }

    /** Сохраняем данные в localStorage, так и в cmi.suspend_data */

    saveData(data) {

        let suspend = JSON.stringify(data.courceData)


        if (suspend !== undefined && typeof suspend === "string" && suspend.length > 0) {

            this.setValue('cmi.suspend_data', suspend)

            ScormMockApi.SetValue('cmi.suspend_data', suspend)

        }

        this.commit()
    }

    /** Получаем сохранённые данные как из localStorage, так и из cmi.suspend_data */

    getSaveData() {
        let state

        if (this.getValue('cmi.suspend_data') !== "" && this.getValue('cmi.suspend_data') !== null && !DEV_MODE) {
            state = JSON.parse(this.getValue('cmi.suspend_data'))

        }
        else if (ScormMockApi.GetValue('cmi.suspend_data') !== "" && ScormMockApi.GetValue('cmi.suspend_data') !== 'null') {
            state = JSON.parse(this.getValue('cmi.suspend_data'))
        }

        else {

            state = {}
        }

        return state
    }

    /** Создаём задачу */

    creareObjectives(target) {

        console.log(target, 'Цели')

        target.forEach((objective, n) => {

            console.log(n)
            console.log(objective.score.raw)

            this.setValue(`cmi.objectives.${n}.id`, objective.id);
            this.setValue(`cmi.objectives.${n}.score.raw`, objective.score.raw);
            this.setValue(`cmi.objectives.${n}.score.min`, objective.score.min);
            this.setValue(`cmi.objectives.${n}.score.max`, objective.score.max);
            this.setValue(`cmi.objectives.${n}.score.scaled`, objective.score.scaled);
            this.setValue(`cmi.objectives.${n}.success_status`, objective.success_status);
            this.setValue(`cmi.objectives.${n}.completion_status`, objective.completion_status);
            this.setValue(`cmi.objectives.${n}.description`, objective.description);
        })

        console.log(this.getValue("cmi.objectives.0.id") + "objective")


    }

    /** Проверяем результат */

    checkData(data) {

        console.log(data, 'checkData')

        console.log(this.getValue(`cmi.objectives.0.id`), "ID")
        console.log(this.getValue("cmi.objectives.0.id"), "-- ID")

        let scormNumber = parseInt(this.getValue('cmi.objectives._count'))
        let numberOfObjectives

        scormNumber == undefined || Number.isNaN(scormNumber) ? numberOfObjectives = 1 : numberOfObjectives = scormNumber


        for (var n = 0; n < numberOfObjectives; n++) {

            data.forEach((item) => {

                console.log(this.getValue(`cmi.objectives.0.id`) === item.id, 'super')

                if (item.id === this.getValue(`cmi.objectives.${n}.id`)) {

                    console.log('--mutch')

                    this.setValue(`cmi.objectives.${n}.score.raw`, item.raw);

                    if (!this.setValue(`cmi.objectives.${n}.score.raw`, item.raw)) {
                        console.error('Error setting objective');
                    }

                    // let min = parseInt(this.getValue(`cmi.objectives.${n}.score.min`));

                    // console.log('mutch')

                    // if (item.raw > min) {

                    //     this.setValue(`cmi.objectives.${n}.score.raw`, item.raw);

                    //     this.setValue(`cmi.objectives.${n}.score.scaled`, 1.0);

                    //     this.setValue(`cmi.objectives.${n}.success_status`, "passed");
                    //     this.setValue(`cmi.objectives.${n}.completion_status`, "completed");

                    //     console.log(this.getValue(`cmi.objectives.${n}.score.raw`), '--new')
                    // }
                }
            })

        }
        this.commit()
    }

}
let _SCORM = new ScormAdapter()
export default _SCORM
