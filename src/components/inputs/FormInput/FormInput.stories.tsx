import type { Meta, StoryObj } from "@storybook/react";

import FormInput from "./FormInput";
import { useState } from "react";

const meta: Meta<typeof FormInput> = {
	component: FormInput,
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Primary: Story = {
	render: (args) => {
		const [value, setValue] = useState(args.value);
		return <FormInput {...args} value={value} onChange={setValue} />;
	},
	args: {
		label: "Почта",
		type: "text",
		placeholder: "example@mail.ru",
		//value: "value",
	},
};
