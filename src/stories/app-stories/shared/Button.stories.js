import React from 'react';

import Button  from "../../../components/shared/Button";

export default {
    title: "App/Shared/Button",
    component: Button,
    args: {
        isLink: false,
        type: "button"        
    }     
}

const Template = (args) => <Button {...args} />

export const Purple = Template.bind({});
export const PurpleLink = Template.bind({});

export const Blue = Template.bind({});
export const Black = Template.bind({});
export const Orange = Template.bind({});

Purple.args = {
    text: "Add feedback",
    className: "button--add-feedback",
}

PurpleLink.args = {
    ...Purple.args,
    isLink: true, 
    icon: <svg width="9" height="9" xmlns="http://www.w3.org/2000/svg" className="feedback-button-svg"><text transform="translate(-24 -20)" fill="#F2F4FE" fillRule="evenodd" fontFamily="Jost-Bold, Jost" fontSize="14" fontWeight="bold"><tspan x="24" y="27.5">+</tspan></text></svg>
}

Blue.args = {
    text: "Edit feedback",
    className: "button--edit-feedback"
}

Black.args = {
    text: "Cancel",
    className: "button--cancel"
}

Orange.args = {
    text: "Delete",
    className: "button--delete"
}