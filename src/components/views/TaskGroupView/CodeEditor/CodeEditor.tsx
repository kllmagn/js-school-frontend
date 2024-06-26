import Editor from "react-simple-code-editor";
import styles from "./CodeEditor.module.css";
import { TaskEditorProps } from "./types";
import { hightlightWithLineNumbers } from "./utils";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

const CodeEditor = ({ data, setAreaData }: TaskEditorProps) => {
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
					readOnly={area.areaId === null}
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

export default CodeEditor;
