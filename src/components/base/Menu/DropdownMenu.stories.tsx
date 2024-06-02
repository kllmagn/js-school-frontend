import type { Meta, StoryObj } from "@storybook/react";

import DropdownMenu from "./DropdownMenu";

const meta: Meta<typeof DropdownMenu> = {
	component: DropdownMenu,
	argTypes: {
		menuElements: [
			{
				text: "Настройки",
			},
		],
	},
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Primary: Story = {
	args: {
		menuElements: [
			{
				text: "Настройки",
			},
		],
	},
};
