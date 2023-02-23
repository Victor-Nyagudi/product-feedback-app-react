import React from 'react';

import Button  from "../../components/shared/Button";

export default {
    title: "Project/Shared/Button",
    component: Button
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({});

Primary.args = {
    text: "Add feedback",
    className: "button--add-feedback"
}