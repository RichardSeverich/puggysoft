import React from "react";
import CommonMessage from "./CommonMessage";

export default {
  title: "CommonMessage",
  component: CommonMessage
};

const Template = (args) => <CommonMessage {...args} />;

const commonProps = {
  isVisible: true,
  titleText: "Some Title",
  bodyText: "Some message in body",
  setIsVisible: () => {}
};

export const CommonMessageTemplatePrimary = Template.bind({});

CommonMessageTemplatePrimary.args = {
  ...commonProps,
  variant: "primary"
};

export const CommonMessageTemplateSecondary = Template.bind({});

CommonMessageTemplateSecondary.args = {
  ...commonProps,
  variant: "secondary"
};

export const CommonMessageTemplateSuccess = Template.bind({});

CommonMessageTemplateSuccess.args = {
  ...commonProps,
  variant: "success"
};

export const CommonMessageTemplateWarning = Template.bind({});

CommonMessageTemplateWarning.args = {
  ...commonProps,
  variant: "warning"
};

export const CommonMessageTemplateInfo = Template.bind({});

CommonMessageTemplateInfo.args = {
  ...commonProps,
  variant: "info"
};

export const CommonMessageTemplateLight = Template.bind({});

CommonMessageTemplateLight.args = {
  ...commonProps,
  variant: "light"
};

export const CommonMessageTemplateDark = Template.bind({});

CommonMessageTemplateDark.args = {
  ...commonProps,
  variant: "dark"
};

export const CommonMessageTemplateDanger = Template.bind({});

CommonMessageTemplateDanger.args = {
  ...commonProps,
  variant: "danger"
};
