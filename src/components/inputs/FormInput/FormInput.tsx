import styles from "./FormInput.module.css";

type FormInputProps = {
	label: string;
	value: string;
	onChange: (value: string) => void;
	type?: string;
	placeholder?: string;
	error?: boolean;
};

const FormInput = ({
	label,
	value,
	onChange,
	type = "text",
	placeholder,
	error,
}: FormInputProps) => {
	return (
		<div className={styles.formInput}>
			<label
                htmlFor={label}
            >{label}</label>
			<input
                id={label}
				type={type}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={placeholder}
				className={error ? styles.error : ""}
			/>
		</div>
	);
};

export default FormInput;
