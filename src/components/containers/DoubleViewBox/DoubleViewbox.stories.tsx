import type { Meta, StoryObj } from "@storybook/react";

import DoubleViewBox from "./DoubleViewBox";
import Text from "components/base/Text";

const meta: Meta<typeof DoubleViewBox> = {
	component: DoubleViewBox,
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DoubleViewBox>;

export const Primary: Story = {
	args: {
		left: <Text>Пример текста слева</Text>,
		right: <Text>Пример текста справа</Text>,
	},
};
