export type CodeArea = {
	areaId: number | null;
	code: string;
};

export type TaskEditorProps = {
	data: CodeArea[];
	setAreaData: (idx: number, code: string) => void;
};
