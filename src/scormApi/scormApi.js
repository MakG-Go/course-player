import pipwerks from 'pipwerks-scorm-api-wrapper';

import { ScormMockApi } from "@/scormData/scormData";
/** Импортируем главную цель курса */
import { TotalObjectives } from "@/scormData/totalObjectivs";
/** Импортируем цели курса */
import { Objectives } from '&/objectivs';

/** Для отладки SCORM передать true */

pipwerks.debug.isActive = false

/** Версия SCORM */

pipwerks.SCORM.version = "2004"

class SCORM2004 {

	constructor() {
		this.SCORM = pipwerks.SCORM;
	}

	initialize() {

		this.SCORM.init();

		if (this.SCORM.get("cmi.entry") === "resume") {
			console.log("The course has total objectives.");
		}
		else {
			this.creareTotalObjectives(TotalObjectives)

			if (!this.SCORM.set("cmi.score.raw", 0)) {

				console.error('Error setting total objective');
			}

			console.log("Now course have total objectives.");
		}

		if (this.SCORM.get("cmi.objectives._count") && parseInt(this.SCORM.get("cmi.objectives._count")) > 0) {
			console.log("The course has objectives.");
		}
		else {

			this.creareObjectives(Objectives)

			if (!this.SCORM.set("cmi.score.raw", 0)) {
				console.error('Error setting objective');
			}

			console.log("Now course have objectives.");
		}

		this.SCORM.save();

		ScormMockApi.Initialize()

	};

	terminate() {

		this.SCORM.quit();

		console.log('terminate');
	};

	getLocation() {

		const locationResult = this.SCORM.get("cmi.location")

		if (locationResult !== "") {

		} else {

			console.log("Location not available.");
		}

		console.log('getLocation')
	};

	setLocation() {
		const currentPage = window.location.href;
		const locationResult = this.SCORM.get("cmi.location");

		if (locationResult === "") {

			this.SCORM.set("cmi.location", currentPage);

			// console.log("Location saved: " + currentPage);

		}
		else if (this.SCORM.get("cmi.location") !== currentPage) {

			this.SCORM.set("cmi.location", currentPage);

			// console.log("New Location saved: " + currentPage);
		}
		else {
			console.log("Location already exists: " + locationResult);
		}

		ScormMockApi.SetValue("cmi.location", this.SCORM.get("cmi.location"))

		console.log('setLocation')
	};

	getLastPage() {

		const route = ScormMockApi.GetValue("cmi.location")

		if (route == null || route == undefined || route == "null") {
			return "/"
		}
		else {
			return "/" + ScormMockApi.GetValue("cmi.location").split('/').slice(-1).join()
		}

	}

	creareTotalObjectives(target) {

		console.log(target, 'Цели')

		target.forEach((objective, key) => {

			this.SCORM.set("cmi.completion_status", objective.completion_status);
			this.SCORM.set("cmi.success_status", objective.success_status);
			this.SCORM.set("cmi.progress_measure", objective.progress_measure);
			this.SCORM.set("cmi.scaled_passing_score", objective.scaled_passing_score);

			this.SCORM.set("cmi.score.min", objective.min);
			this.SCORM.set("cmi.score.max", objective.max);
			this.SCORM.set("cmi.score.raw", objective.raw);

			this.SCORM.set("cmi.score.scaled", objective.scaled);
			this.SCORM.set("cmi.location", window.location.toString());
			this.SCORM.set("cmi.credit", objective.credit);
		})

		// target.forEach((objective, n) => {

		// 	this.SCORM.set(`cmi.objectives.${n}.id`, objective.id);
		// 	this.SCORM.set(`cmi.objectives.${n}.score.raw`, objective.score.raw);
		// 	this.SCORM.set(`cmi.objectives.${n}.score.min`, objective.score.min);
		// 	this.SCORM.set(`cmi.objectives.${n}.score.max`, objective.score.max);
		// 	this.SCORM.set(`cmi.objectives.${n}.score.scaled`, objective.score.scaled);
		// 	this.SCORM.set(`cmi.objectives.${n}.success_status`, objective.success_status);
		// 	this.SCORM.set(`cmi.objectives.${n}.completion_status`, objective.completion_status);
		// 	this.SCORM.set(`cmi.objectives.${n}.description`, objective.description);
		// })

		console.log(this.SCORM.get("cmi.completion_status") + " objective")


	}

	creareObjectives(target) {

		console.log(target, 'Цели')

		target.forEach((objective, n) => {

			this.SCORM.set(`cmi.objectives.${n}.id`, objective.id);
			this.SCORM.set(`cmi.objectives.${n}.score.raw`, objective.score.raw);
			this.SCORM.set(`cmi.objectives.${n}.score.min`, objective.score.min);
			this.SCORM.set(`cmi.objectives.${n}.score.max`, objective.score.max);
			this.SCORM.set(`cmi.objectives.${n}.score.scaled`, objective.score.scaled);
			this.SCORM.set(`cmi.objectives.${n}.success_status`, objective.success_status);
			this.SCORM.set(`cmi.objectives.${n}.completion_status`, objective.completion_status);
			this.SCORM.set(`cmi.objectives.${n}.description`, objective.description);

			// let saveObject = {}
			// saveObject["objective_" + n] = objective

			// this.saveData(saveObject)
		})



		console.log(this.SCORM.get("cmi.completion_status") + " objective")


	}

	/** Сохраняем данные в localStorage, так и в cmi.suspend_data */

	saveData(data) {

		console.log(data, 'save')

		let suspend = JSON.stringify(data)

		console.log(suspend)

		if (suspend !== undefined && typeof suspend === "string" && suspend.length > 0) {

			this.SCORM.set("cmi.suspend_data", suspend)

			ScormMockApi.SetValue('cmi.suspend_data', suspend)

			this.SCORM.save()

		}

		console.log(this.SCORM.get('cmi.suspend_data'), '--Scorm suspend')

	}

	/** Получаем сохранённые данные как из localStorage, так и из cmi.suspend_data */

	getSaveData() {
		let state


		// if (this.SCORM.get('cmi.suspend_data') !== "" && this.SCORM.get('cmi.suspend_data') !== 'null') {
		// 	state = JSON.parse(this.SCORM.get('cmi.suspend_data'))
		// 	console.log('get Scorm')

		// }

		console.log(this.SCORM.get('cmi.suspend_data'), "suspend_data on start")

		if (this.SCORM.get('cmi.suspend_data')) {
			console.log(state, 'get Scorm')
			return state = JSON.parse(this.SCORM.get('cmi.suspend_data'))

		}
		if (ScormMockApi.GetValue('cmi.suspend_data') !== "" && ScormMockApi.GetValue('cmi.suspend_data') !== 'null') {

			console.log(state, 'get ScormMock')
			return state = JSON.parse(ScormMockApi.GetValue('cmi.suspend_data'))

		}
		else {

			console.log(state, 'get')
			return state = {}
		}


	}

	/** Проверяем результат */

	checkObjectivs(data) {

		console.log(data, 'checkData')

		let scormNumber = parseInt(this.SCORM.get('cmi.objectives._count'))

		let numberOfObjectives

		scormNumber == undefined || Number.isNaN(scormNumber) ? numberOfObjectives = Objectives.length : numberOfObjectives = scormNumber

		for (var n = 0; n < numberOfObjectives; n++) {

			data.forEach((item) => {

				if (item.id === this.SCORM.get(`cmi.objectives.${n}.id`)) {

					let min = parseInt(this.SCORM.get(`cmi.objectives.${n}.score.min`));

					console.log(item.raw)

					console.log('mutch')

					if (item.raw > min) {

						console.log("<<>>")

						let scaled = item.raw / Objectives[n].score.max

						this.SCORM.set(`cmi.objectives.${n}.score.min`, Objectives[n].score.min.toString());
						this.SCORM.set(`cmi.objectives.${n}.score.max`, Objectives[n].score.max.toString());

						this.SCORM.set(`cmi.objectives.${n}.score.raw`, item.raw.toString());

						this.SCORM.set(`cmi.objectives.${n}.score.scaled`, scaled.toString());

						this.SCORM.set(`cmi.objectives.${n}.success_status`, "passed");
						this.SCORM.set(`cmi.objectives.${n}.completion_status`, "completed");


						console.log(this.SCORM.get(`cmi.objectives.${n}.score.raw`), '--new')
					}
				}
			})

			console.log(this.SCORM.get("cmi.objectives.0.score.raw"))

		}

		this.SCORM.save()
	}

	/** Записываем значение score */

	setScore(data) {

		console.log(data, '--in API')

		const currentScore = parseInt(this.SCORM.get("cmi.score.raw"))
		const minimum = parseInt(this.SCORM.get("cmi.score.min"));

		if (data > currentScore) {

			this.SCORM.set("cmi.score.raw", data.toString());

			this.checkTotalObjectivs(currentScore, minimum);
		}
		else {
			console.log('Текущее значение больше представленного');
		}


		this.SCORM.save();
	}

	/** Проверяем результат */

	checkTotalObjectivs(cur, min) {

		console.log('check score')


		if (cur >= min) {
			this.SCORM.set("cmi.score.scaled", "1");
			this.SCORM.set("cmi.progress_measure", "1.0");
			this.SCORM.set("cmi.completion_status", "completed");
			this.SCORM.set("cmi.success_status", "passed");
		}

		console.log('data checked')
	}

}

export const _SCORM2004 = new SCORM2004()

