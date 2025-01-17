import { BrowserRouter } from "react-router-dom";
import { MdContacts } from "react-icons/md";
import { StoryFn, Meta } from "@storybook/react";

import { AppCard, AppCardProps } from "..";

const meta: Meta<typeof AppCard> = {
  component: AppCard,
  title: "feedback/AppCard",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<AppCardProps> = (args) => <AppCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Card Title",
  description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  icon: <MdContacts />,
  url: "/privileges",
};

export default meta;
