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
					this.getLocation();
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
		const locationResult = this.API.GetValue("cmi.location");

		if (locationResult !== "") {
			console.log("Current location: " + locationResult);
		} else {
			console.log("Location not available.");
		}
	};

	setEntry() {
		let entry = this.API.GetValue('cmi.entry');
		console.log(entry)
	}

	setLocation() {
		const currentPage = window.location.href;
		const locationResult = this.API.GetValue("cmi.location");

		if (locationResult === "") {
			this.API.SetValue("cmi.location", currentPage);
			console.log("Location saved: " + currentPage);
		} else {
			console.log("Location already exists: " + locationResult);
		}
	};

	setScore(score) {
		this.API.SetValue("cmi.score.raw", score);
		console.log("Score set to: " + score);
	};

	setStatusInProgress() {
		this.API.SetValue("cmi.completion_status", "incomplete");
		this.API.SetValue("cmi.success_status", "unknown");
		console.log("Status set to 'in progress'.");
	};

	setStatusCompleted() {
		this.API.SetValue("cmi.completion_status", "completed");
		this.API.SetValue("cmi.success_status", "passed");
		console.log("Status set to 'completed'.");
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

		console.log(window.API_1484_11)
		if (window.API_1484_11) {
			console.log('1')
			return window.API_1484_11;
		} else if (window.parent && window.parent.API_1484_11) {
			console.log('2')
			return window.parent.API_1484_11;
		} else if (window.opener && window.opener.API_1484_11) {
			console.log('3')
			return window.opener.API_1484_11;
		} else {
			console.log('4')
			console.log("Unable to locate the SCORM API.");
			return null;
		}
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

let SCORM_2004 = new SCORM2004()

export default SCORM_2004
