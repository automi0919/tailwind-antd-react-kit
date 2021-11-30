import { MailOutlined } from "@ant-design/icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import NewsletterStacked from "../../../../../components/ready-to-use/marketing/sections/newsletter/Stacked/NewsletterStacked";

export default {
  title: "Ready-to-use/Marketing/Sections/Newsletter/Stacked/Default",
  component: NewsletterStacked,
  argTypes: {
    padding: {
      type: "boolean",
      defaultValue: false,
    },
    centered: {
      type: "boolean",
      defaultValue: false,
    },
    icon: {
      type: "boolean",
      defaultValue: false,
    },
    shadow: {
      type: "boolean",
      defaultValue: false,
    },
    bordered: {
      type: "boolean",
      defaultValue: false,
    },
    gapClass: {
      defaultValue: "gap-2",
    },
    texts: {},
  },
} as ComponentMeta<typeof NewsletterStacked>;

const Template: ComponentStory<typeof NewsletterStacked> = (args) => {
  //   const [formInstance] = useForm();
  return (
    <div
      className="inline-flex flex-row flex-nowrap"
    >
      <NewsletterStacked {...args} />
    </div>
  );
};

export const DefaultNewsletterStacked = Template.bind({});
DefaultNewsletterStacked.args = {
  className: "bg-white",
  formInputProps: {
    className: "flex-auto",
    buttonProps: {
      className: "w-full",
    },
    inputProps: {
      placeholder: "Enter your email address...",
    },
    errorMessageText: "The email address is required",
  },
  texts: {
    title: "Sign up to our newsletter",
    body: "Get the latest news, updates from us",
  },
};