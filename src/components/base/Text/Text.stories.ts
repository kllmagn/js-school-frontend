import type { Meta, StoryObj } from "@storybook/react";

import Text from "./Text";

const meta: Meta<typeof Text> = {
	component: Text,
	argTypes: {
		children: {
			control: { type: "text" },
		},
		font: {
			options: ["gilroyBold", "gilroyLight", "knewave"],
			control: { type: "select" },
		},
	},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
	args: {
		children: "Пример текста",
	},
};
