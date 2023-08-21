
export class LMS {

	constructor() {
		this.API = null;
		this.locationData = "";
	}

	initializeSCORM = () => {
		if (API === null) {
			API = getAPI();
		}

		if (API !== null) {
			const result = API.Initialize("");

			if (result === "true") {
				console.log("SCORM initialized successfully.");
				getLocation();
			} else if (result === "false") {
				console.log("Failed to initialize SCORM.");
			} else {
				console.log("Unexpected result from Initialize: " + result);
			}
		} else {
			console.log("Unable to locate the LMS API Adapter.");
		}
	};

	getLocation = () => {
		const locationResult = API.GetValue("cmi.location");

		if (locationResult !== "") {
			console.log("Current location: " + locationResult);
		} else {
			console.log("Location not available.");
		}
	};

	setLocation = () => {
		const currentPage = window.location.href;
		const locationResult = API.GetValue("cmi.location");

		if (locationResult === "") {
			API.SetValue("cmi.location", currentPage);
			console.log("Location saved: " + currentPage);
		} else {
			console.log("Location already exists: " + locationResult);
		}
	};

	setScore = (score) => {
		API.SetValue("cmi.score.raw", score);
		console.log("Score set to: " + score);
	};

	setStatusInProgress = () => {
		API.SetValue("cmi.completion_status", "incomplete");
		API.SetValue("cmi.success_status", "unknown");
		console.log("Status set to 'in progress'.");
	};

	setStatusCompleted = () => {
		API.SetValue("cmi.completion_status", "completed");
		API.SetValue("cmi.success_status", "passed");
		console.log("Status set to 'completed'.");
	};

	Commit = () => {
		const result = API.Commit("");

		if (result === "true") {
			console.log("Data saved successfully.");
		} else if (result === "false") {
			console.log("Failed to save data.");
		} else {
			console.log("Unexpected result from Commit: " + result);
		}
	};

	getAPI = () => {
		let API = null;

		if (window.API_1484_11) {
			API = window.API_1484_11;
		} else if (window.parent.API_1484_11) {
			API = window.parent.API_1484_11;
		} else if (window.opener && window.opener.API_1484_11) {
			API = window.opener.API_1484_11;
		}

		return API;
	};

	convertJsonToStr() {
		if (typeof LED.VARS === 'object') {
			LED.SCORM.SetValue('cmi.suspend_data', JSON.stringify(LED.VARS));
		}
	};

	createObjective({ key, name, max, min, raw, scale, description, success, completion }) {

		LED.SCORM.SetValue('cmi.objectives.' + key + '.id', name);
		LED.SCORM.SetValue('cmi.objectives.' + key + '.score.scaled', scale);
		LED.SCORM.SetValue('cmi.objectives.' + key + '.score.raw', raw);
		LED.SCORM.SetValue('cmi.objectives.' + key + '.score.min', min);
		LED.SCORM.SetValue('cmi.objectives.' + key + '.score.max', max);
		LED.SCORM.SetValue('cmi.objectives.' + key + '.description', description);
		LED.SCORM.SetValue('cmi.objectives.' + key + '.success_status', success);
		LED.SCORM.SetValue('cmi.objectives.' + key + '.completion_status', completion);
	};

}