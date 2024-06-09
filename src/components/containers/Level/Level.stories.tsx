import type { Meta, StoryObj } from "@storybook/react";

import Level from "./Level";

const meta: Meta<typeof Level> = {
	component: Level,
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Level>;

export const Primary: Story = {
	args: {
		id: 0,
		title: "Example title",
		description: "Example description",
		order: 0,
	},
};
