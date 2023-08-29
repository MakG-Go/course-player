import { ScormApi } from "@/globals/scormData";

console.log(ScormApi.GetValue('cmi.location'))


class SCORM2004 {

	constructor() {
		this.API = null;
		this.locationData = "";
	}

	initializeSCORM() {
		if (this.API === null) {
			this.API = this.getAPI();
		}

		if (this.API !== null) {

			{
				const result = this.API.Initialize("");

				if (result === 'true') {

					console.log("SCORM initialized successfully.");

					// this.getLocation();

				} else if (result === 'false') {

					console.log("Failed to initialize SCORM.");

				} else {

					console.log("Unexpected result from Initialize: " + result);

				}
			}
		} else {
			console.log("Unable to locate the LMS API Adapter.");
		}

	};

	terminatSCORM() {

		const result = this.API.Terminate('')

		if (result !== 'true') {
			console.error('Failed to terminate communication.');
		}
	};

	getLocation() {

		console.log('here')

		const locationResult = this.API.GetValue("cmi.location");

		if (locationResult !== "") {
			console.log("Current location: " + locationResult);
		} else {
			console.log("Location not available.");
		}
	};


	setLocation() {
		const currentPage = window.location.href;

		const locationResult = this.API.GetValue("cmi.location");

		if (locationResult === "") {

			this.API.SetValue("cmi.location", currentPage);

			console.log("Location saved: " + currentPage);

		}
		else if (this.API.GetValue("cmi.location") !== currentPage) {

			this.API.SetValue("cmi.location", currentPage);

			console.log("New Location saved: " + currentPage);
		}
		else {
			console.log("Location already exists: " + locationResult);
		}

		this.Commit()
	};

	getLastPage() {
		let currentLocation = this.API.GetValue("cmi.location")
		console.log(currentLocation, 'last')
		return currentLocation.split('/').slice(-1).join()
	}

	setEntry() {

		if (this.checkStart() !== "completed") {
			this.API.SetValue("cmi.exit", "suspend")
			this.API.SetValue("cmi.completion_status", "incomplete");
			this.API.SetValue("cmi.progress_measure", 0.0);
			this.Commit()
		}

	}

	setScore(score) {
		this.API.SetValue("cmi.score.raw", score);
		console.log("Score set to: " + score);
	};


	setStatusCompleted() {
		console.log('get end')
		this.API.SetValue("cmi.completion_status", "completed");
		this.API.SetValue("cmi.progress_measure", 1.0);
		this.Commit()
	};

	Commit() {
		const result = this.API.Commit("");

		if (result === "true") {
			console.log("Data saved successfully.");
		} else if (result === "false") {
			console.log("Failed to save data.");
		} else {
			console.log("Unexpected result from Commit: " + result);
		}
	};

	getAPI() {

		if (window.API_1484_11) {

			return window.API_1484_11;
		} else if (window.parent && window.parent.API_1484_11) {

			return window.parent.API_1484_11;
		} else if (window.opener && window.opener.API_1484_11) {

			return window.opener.API_1484_11;
		} else {

			console.log("Unable to locate the SCORM API.");
			return null;
		}
	};

	checkStart() {
		return this.API.GetValue("cmi.completion_status")
	}

	// createObjective({ key, name, max, min, raw, scale, description, success, completion }) {

	// 	LED.SCORM.SetValue('cmi.objectives.' + key + '.id', name);
	// 	LED.SCORM.SetValue('cmi.objectives.' + key + '.score.scaled', scale);
	// 	LED.SCORM.SetValue('cmi.objectives.' + key + '.score.raw', raw);
	// 	LED.SCORM.SetValue('cmi.objectives.' + key + '.score.min', min);
	// 	LED.SCORM.SetValue('cmi.objectives.' + key + '.score.max', max);
	// 	LED.SCORM.SetValue('cmi.objectives.' + key + '.description', description);
	// 	LED.SCORM.SetValue('cmi.objectives.' + key + '.success_status', success);
	// 	LED.SCORM.SetValue('cmi.objectives.' + key + '.completion_status', completion);
	// };

}

let SCORM_2004 = new SCORM2004()

export default SCORM_2004
