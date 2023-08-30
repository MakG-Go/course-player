
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
		ScormMockApi.Initialize()
		this.SCORM.init();
		this.getLocation()

		if (this.SCORM.get("cmi.objectives._count") && parseInt(this.SCORM.get("cmi.objectives._count") > 0)) {

			console.log("The course has objectives.");
		}
		else {

			this.creareObjectives(Objectives)

			console.log("The course does not have objectives.");
		}

		this.SCORM.get('cmi.suspend_data')

	};

	terminatSCORM() {
		this.SCORM.terminate()
		console.log('terminate')
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

		this.SCORM.set('cmi.suspend_data', locationResult)

		console.log('setLocation')
	};

	getLastPage() {

		const route = ScormMockApi.GetValue("cmi.location")

		console.log(route)
		console.log(typeof (route))

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
		target.forEach((objective, id) => {
			console.log(objective)
			this.SCORM.set("cmi.objectives." + id + ".id", objective.id);
			this.SCORM.set("cmi.objectives." + id + ".score.raw", parseInt(objective.score.raw));
			this.SCORM.set("cmi.objectives." + id + ".score.max", parseInt(objective.score.max));
			this.SCORM.set("cmi.objectives." + id + ".score.min", parseInt(objective.score.min));
			this.SCORM.set("cmi.objectives." + id + ".success_status", objective.success_status);
			this.SCORM.set("cmi.objectives." + id + ".completion_status", objective.completion_status);
		})

	}

}

let _SCORM = new SCORM2004()

export default _SCORM
