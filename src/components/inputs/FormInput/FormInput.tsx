import classNames from "classnames";
import styles from "./FormInput.module.css";

type FormInputProps = {
	label: string;
	value: string;
	onChange: (value: string) => void;
	type?: string;
	placeholder?: string;
	error?: boolean;
    style?: {};
    defaultValue?: string | undefined;
};

const FormInput = ({
	label,
	value,
	onChange,
	type = "text",
	placeholder,
	error,
    style,
    defaultValue
}: FormInputProps) => {
	return (
		<div className={styles.formInput}>
			<label className={styles.label} htmlFor={label}>
				{label}
			</label>
			<input
				id={label}
				type={type}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={placeholder}
				className={classNames(styles.input, error ? styles.error : "")}
                style={style}
                defaultValue={defaultValue}
			/>
		</div>
	);
};

export default FormInput;
