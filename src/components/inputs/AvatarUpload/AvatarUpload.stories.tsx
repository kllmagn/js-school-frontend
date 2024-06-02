import type { Meta, StoryObj } from "@storybook/react";

import AvatarUpload from "./AvatarUpload";

const meta: Meta<typeof AvatarUpload> = {
	component: AvatarUpload,
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AvatarUpload>;

export const Primary: Story = {
	args: {
        backgroundSrc: "https://farm3.staticflickr.com/2220/1572613671_7311098b76_z_d.jpg",
    },
};
