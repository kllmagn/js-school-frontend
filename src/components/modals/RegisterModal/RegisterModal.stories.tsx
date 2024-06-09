import type { Meta, StoryObj } from "@storybook/react";

import RegisterModal from "./RegisterModal";

const meta: Meta<typeof RegisterModal> = {
	component: RegisterModal,
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof RegisterModal>;

export const Primary: Story = {
	args: {},
};
