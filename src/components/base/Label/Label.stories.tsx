import type { Meta, StoryObj } from "@storybook/react";

import Label from "./Label";
import Text from "components/base/Text";

const meta: Meta<typeof Label> = {
	component: Label,
	argTypes: {
		text: {
			control: { type: "text" },
		},
		secondaryText: {
			control: { type: "text" },
		},
	},
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Primary: Story = {
	args: {
		text: <Text font="gilroyBold">Уровень 1</Text>,
		secondaryText: <Text font="gilroyLight">Пример текста</Text>,
	},
};
