class SCORM2004 {

	constructor() {
		this.API = null;
		this.locationData = "";
	}

	initializeSCORM = () => {
		if (this.API === null) {
			this.API = this.getAPI();
		}

		if (this.API) {

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

	getLocation = () => {
		const locationResult = this.API.GetValue("cmi.location");

		if (locationResult !== "") {
			console.log("Current location: " + locationResult);
		} else {
			console.log("Location not available.");
		}
	};

	setLocation = () => {
		const currentPage = window.location.href;
		const locationResult = this.API.GetValue("cmi.location");

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

	Initialize = () => {
		// Your initialization code here
		console.log("SCORM API initialized");
		return "true";
	};

	GetValue = (element) => {
		// Your code to retrieve the value of the specified element
		return "some_value";
	}
}

let SCORM_2004 = new SCORM2004()

window.API_1484_11 = SCORM_2004

export default SCORM_2004
