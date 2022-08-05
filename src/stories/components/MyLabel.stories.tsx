import { ComponentMeta, ComponentStory } from "@storybook/react";

import { MyLabel } from "../../components/MyLabel";

// default export is required for storybook to load the component
// with title to display in the storybook sidebar
export default {
	title: "UI/MyLabel",
	component: MyLabel,
	argTypes: {
		size: { control: "select" },
		color: { control: "select" },
        fontColor: { control: "color" },
	},
} as ComponentMeta<typeof MyLabel>;

// Creation of a story is as simple as creating a function that returns a component
const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />;

// The story is then exported to be displayed in the storybook sidebar
export const Basic = Template.bind({});
Basic.args = { size: "normal" };

export const AllCaps = Template.bind({});
AllCaps.args = { size: "normal", allCaps: true };

export const Secondary = Template.bind({});
Secondary.args = { size: "normal", color: "secondary" };

export const Tertiary = Template.bind({});
Tertiary.args = { size: "normal", color: "tertiary" };

export const CustomFontColor = Template.bind({});
CustomFontColor.args = { size: "h1", fontColor: "#5517ac" };
