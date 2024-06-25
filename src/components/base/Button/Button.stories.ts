import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
	component: Button,
	argTypes: {
		stretched: {
			options: [true, false],
			control: { type: "boolean" },
		},
		rounded: {
			options: [true, false],
			control: { type: "boolean" },
		},
		outlined: {
			options: [true, false],
			control: { type: "boolean" },
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: "Кнопка",
		rounded: true,
	},
};
