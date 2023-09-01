import pipwerks from 'pipwerks-scorm-api-wrapper';
import { SCORM } from 'pipwerks-scorm-api-wrapper';

import { ScormMockApi } from "@/scormData/scormData";
/** Импортируем цели курса */
import { Objectives } from '&/objectivs';

/** Для отладки SCORM передать true */

pipwerks.debug.isActive = false

/** Версия SCORM */

SCORM.version = "2004"

class SCORM2004 {

	constructor() {
		this.SCORM = SCORM;
	}

	initialize() {

		this.SCORM.init();
		ScormMockApi.Initialize()
		this.getLocation()

		if (this.SCORM.get("cmi.objectives._count") && parseInt(this.SCORM.get("cmi.objectives._count")) > 0) {
			console.log("The course has objectives.");

			console.log(this.SCORM.get("cmi.objectives.0.id"));
			console.log(this.SCORM.get("cmi.objectives.0.score.raw"));
		}
		else {

			this.creareObjectives(Objectives)


			// SCORM.set("cmi.objectives.0.id", "Стиралки_1");
			// SCORM.set("cmi.objectives.0.score.raw", 0);
			// SCORM.set("cmi.objectives.0.score.max", 100);
			// SCORM.set("cmi.objectives.0.score.min", 0);
			// SCORM.set("cmi.objectives.0.score.scaled", 0);
			// SCORM.set("cmi.objectives.0.success_status", "unknown");
			// SCORM.set("cmi.objectives.0.completion_status", "incomplete");
			// SCORM.set("cmi.objectives.0.description", "ХУЕТА");

			console.log("Now course have objectives.");
			console.log(this.SCORM.get("cmi.objectives.0.id"));

		}

		this.SCORM.save();
	};

	terminate() {


		this.SCORM.quit();

		console.log('terminate');
	};

	getLocation() {

		const locationResult = this.SCORM.get("cmi.location")

		if (locationResult !== "") {

			// console.log("Current location: " + locationResult);

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

	setStatusCompleted() {

		this.SCORM.set("cmi.completion_status", "completed")
		this.SCORM.set("cmi.progress_measure", 1.0);
		this.SCORM.save(true)
		console.log('setStatusCompleted')
	};

	creareObjectives(target) {

		console.log(target, 'Цели')

		target.forEach((objective, n) => {

			console.log(n)
			console.log(objective.score.raw)

			this.SCORM.set(`cmi.objectives.${n}.id`, objective.id);
			this.SCORM.set(`cmi.objectives.${n}.score.raw`, objective.score.raw);
			this.SCORM.set(`cmi.objectives.${n}.score.min`, objective.score.min);
			this.SCORM.set(`cmi.objectives.${n}.score.max`, objective.score.max);
			this.SCORM.set(`cmi.objectives.${n}.score.scaled`, objective.score.scaled);
			this.SCORM.set(`cmi.objectives.${n}.success_status`, objective.success_status);
			this.SCORM.set(`cmi.objectives.${n}.completion_status`, objective.completion_status);
			this.SCORM.set(`cmi.objectives.${n}.description`, objective.description);
		})

		console.log(this.SCORM.get("cmi.objectives.0.id") + "objective")


	}

	/** Сохраняем данные в localStorage, так и в cmi.suspend_data */

	saveData(data) {

		let suspend = JSON.stringify(data.courceData)


		if (suspend !== undefined && typeof suspend === "string" && suspend.length > 0) {

			this.SCORM.set('cmi.suspend_data', suspend)

			ScormMockApi.SetValue('cmi.suspend_data', suspend)

		}

		this.SCORM.save()
	}

	/** Получаем сохранённые данные как из localStorage, так и из cmi.suspend_data */

	getSaveData() {
		let state

		if (this.SCORM.get('cmi.suspend_data') !== "" && this.SCORM.get('cmi.suspend_data') !== 'null') {
			state = JSON.parse(this.SCORM.get('cmi.suspend_data'))

		}
		else if (ScormMockApi.GetValue('cmi.suspend_data') !== "" && ScormMockApi.GetValue('cmi.suspend_data') !== 'null') {
			state = JSON.parse(ScormMockApi.GetValue('cmi.suspend_data'))
		}

		else {

			state = {}
		}

		return state
	}

	/** Проверяем результат */

	checkData(data) {

		console.log(data, 'checkData')

		console.log(this.SCORM.get(`cmi.objectives.0.id`), "ID")
		console.log(this.SCORM.get("cmi.objectives.0.id"), "-- ID")

		let currentObjectivesData = data

		let scormNumber = parseInt(this.SCORM.get('cmi.objectives._count'))

		let numberOfObjectives

		scormNumber == undefined || Number.isNaN(scormNumber) ? numberOfObjectives = 1 : numberOfObjectives = scormNumber

		console.log(scormNumber)
		console.log(numberOfObjectives)

		for (var n = 0; n < numberOfObjectives; n++) {

			currentObjectivesData.forEach((item) => {

				console.log(item.id)
				console.log(item.raw)
				console.log(n)
				console.log(this.SCORM.get(`cmi.objectives.0.id`))
				console.log(this.SCORM.get(`cmi.objectives.${n}.id`))

				if (item.id === this.SCORM.get(`cmi.objectives.${n}.id`)) {

					let min = parseInt(this.SCORM.get(`cmi.objectives.${n}.score.min`));

					console.log(item.raw)

					console.log('mutch')

					if (item.raw > min) {

						this.SCORM.set(`cmi.objectives.${n}.score.raw`, item.raw);

						this.SCORM.set(`cmi.objectives.${n}.score.scaled`, 1.0);

						this.SCORM.set(`cmi.objectives.${n}.success_status`, "passed");
						this.SCORM.set(`cmi.objectives.${n}.completion_status`, "completed");


						console.log(this.SCORM.get(`cmi.objectives.${n}.score.raw`), '--new')
					}
				}
			})

			console.log(this.SCORM.get("cmi.objectives.0.score.raw"))

			this.SCORM.save()

		}
	}

}

let _SCORM = new SCORM2004()

export default _SCORM