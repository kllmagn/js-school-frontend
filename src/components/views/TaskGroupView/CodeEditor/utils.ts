import { highlight, languages } from "prismjs";
import styles from "./CodeEditor.module.css";
import { CodeArea } from "./types";

export function splitCodeIntoAreas(
	code: string,
	areaMapping: { [lineIndex: string]: number },
): CodeArea[] {
	const lines = code.split("\n");
	const codeAreas: CodeArea[] = [];
	let currentArea: string[] = [];
	for (let i = 0; i < lines.length; i++) {
		if (areaMapping[i]) {
			if (currentArea.length > 0) {
				codeAreas.push({
					areaId: null,
					code: currentArea.join("\n"),
				});
				currentArea = [];
			}
			codeAreas.push({
				areaId: areaMapping[i],
				code: currentArea.join("\n"),
			});
		} else {
			// This line doesn't have an areaId, so add it to the current area
			currentArea.push(lines[i]);
		}
	}
	// Add the last area
	if (currentArea.length > 0) {
		codeAreas.push({
			areaId: null,
			code: currentArea.join("\n"),
		});
	}
	return codeAreas;
}

export const hightlightWithLineNumbers = (offset: number, input: string) => {
	return highlight(input, languages.js, "js")
		.split("\n")
		.map((line, idx) => {
			return `<span class='${styles.editorLineNumber}'>${idx + 1 + offset}</span>${line}`;
		})
		.join("\n");
};
