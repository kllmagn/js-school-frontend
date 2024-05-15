import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import styles from "./taskEditor.module.css";

export type CodeArea = {
	areaId: number | null;
	code: string;
};

export type TaskEditorProps = {
	data: CodeArea[];
	setAreaData: (idx: number, code: string) => void;
};

const TaskEditor = ({ data, setAreaData }: TaskEditorProps) => {
	const hightlightWithLineNumbers = (offset: number, input: string) => {
		return highlight(input, languages.js, "js")
			.split("\n")
			.map((line, idx) => {
				return `<span class='${styles.editorLineNumber}'>${idx + 1 + offset}</span>${line}`;
			})
			.join("\n");
	};
	return (
		<div className={styles.editorContainer}>
			{data.map((area, idx) => (
				<Editor
					value={area.code}
					onValueChange={(code) =>
						area.areaId === null ? code : setAreaData(idx, code)
					}
					highlight={(code) =>
						hightlightWithLineNumbers(
							data.slice(0, idx).length
								? data
										.slice(0, idx)
										.map((area) => area.code?.split("\n")?.length)
										.reduce((acc, areaLength) => acc + areaLength)
								: 0,
							code,
						)
					}
					padding={10}
					textareaId="codeArea"
					className={`${styles.editorBlock} ${idx === data.length - 1 ? styles.areaLast : ""}`}
					style={{
						fontFamily: '"Fira code", "Fira Mono", monospace',
						fontSize: 12,
						width: "100%",
						outline: 0,
					}}
				/>
			))}
		</div>
	);
};

export default TaskEditor;
