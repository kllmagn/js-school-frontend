import type { Meta, StoryObj } from "@storybook/react";

import SearchBox from "./SearchBox";
import { useState } from "react";

const meta: Meta<typeof SearchBox> = {
	component: SearchBox,
	argTypes: {
        query: {
            control: "text",
        },
    },
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

export const Primary: Story = {
    render: (args) => {
        const [query, setQuery] = useState("");
        return (
            <SearchBox {...args} query={query} setQuery={setQuery}/>
        );
    },
	args: {
        query: "",
    },
};
