import React from "react";
import styles from "./codeeditor.module.css";
import { CodeTabs } from "./codeTabs/CodeTabs";
import { AceGutter } from "./AceGutter/AceGutter";
import { AceScroll } from "./AceScroll/AceScroll";

export function CodeEditor() {
	return (
		<div className={styles.codeConntainer} style={{ flexBasis: "50%" }}>
			<CodeTabs></CodeTabs>
			<div className={styles.codeEditor}>
				<div className={styles.codeEditorLayout}>
					<span className={styles.codeEditorLabel}>
						<span className={styles.codeEditorLabelItem}>HTML</span>
					</span>
					<div className={styles.codeEditorItem}>
						<textarea className={styles.textInput}></textarea>
						<AceGutter></AceGutter>
						<AceScroll></AceScroll>
					</div>
				</div>
			</div>
		</div>
	);
}
