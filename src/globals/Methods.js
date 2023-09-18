import { SCORM_VERSION } from "@/globals/Const"
import { _SCORM2004, _SCORM12 } from "@/scormApi/scormApi.js"

export const _CONVERT = (item) => JSON.parse(JSON.stringify(item))

export const _SCORMV = () => {

	if (SCORM_VERSION === "2004") {
		return _SCORM2004
	}
	if (SCORM_VERSION === "1.2") {
		return _SCORM12
	}
}

