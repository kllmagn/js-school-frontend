import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import "./editor.css";

export type TaskEditorProps = {
	codeValue: string;
	setCodeValue: (code: string) => void;
};

const TaskEditor = ({ codeValue, setCodeValue }: TaskEditorProps) => {
	const hightlightWithLineNumbers = (input: string) =>
		highlight(input, languages.js, "js")
			.split("\n")
			.map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
			.join("\n");
	return (
		<Editor
			value={codeValue}
			onValueChange={(code) => setCodeValue(code)}
			highlight={(code) => hightlightWithLineNumbers(code)}
			padding={10}
			textareaId="codeArea"
			className="editor"
			style={{
				fontFamily: '"Fira code", "Fira Mono", monospace',
				fontSize: 12,
				width: "100%",
				height: "95%",
				outline: 0,
			}}
		/>
	);
};

export default TaskEditor;
