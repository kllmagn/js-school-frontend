import type { Meta, StoryObj } from "@storybook/react";

import ViewBox from "./ViewBox";
import Text from "components/base/Text";

const meta: Meta<typeof ViewBox> = {
	component: ViewBox,
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ViewBox>;

export const Primary: Story = {
	args: {
		name: "Example title",
		children: <Text>Пример текста</Text>,
	},
};
