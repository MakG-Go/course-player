const scormData = {
	"cmi.location": "",
	"cmi.score.raw": "0",
	"cmi.completion_status": "incomplete",
	"cmi.progress_measure": 0.0,
	"cmi.success_status": "unknown"
}


const parseStorageData = () =>
	JSON.parse(
		localStorage.getItem("scorm-mock-data")
	);

export const ScormMockApi = {
	Initialize() {
		const storageData = parseStorageData();

		localStorage.setItem(
			"scorm-mock-data",
			JSON.stringify({ ...scormData, ...(storageData || {}) })
		);

		return "true";
	},

	GetValue(key) {
		const storageData = parseStorageData();

		return storageData?.[key] || "";
	},

	SetValue(key, value) {
		const storageData = parseStorageData();

		if (storageData) {
			storageData[key] = value;
			localStorage.setItem("scorm-mock-data", JSON.stringify(storageData));
		}
	}

};