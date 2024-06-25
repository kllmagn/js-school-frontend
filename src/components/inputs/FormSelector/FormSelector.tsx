import classNames from "classnames";
import styles from "./FormSelector.module.css";

type FormSelectorOption = {
	value: string;
	label: string;
};

type FormSelectorProps = {
	label: string;
	value: string;
	onChange: (value: string) => void;
	options: FormSelectorOption[];
	placeholder?: string;
	error?: boolean;
};

const FormSelector = ({
	label,
	value,
	onChange,
	options,
	placeholder,
	error,
}: FormSelectorProps) => {
	return (
		<div className={styles.formSelector}>
			<label className={styles.label} htmlFor={label}>
				{label}
			</label>
			<select
				id={label}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className={classNames(styles.select, error ? styles.error : "")}
			>
				{placeholder && (
					<option value="" disabled>
						{placeholder}
					</option>
				)}
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default FormSelector;
