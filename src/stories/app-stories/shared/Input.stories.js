import React from 'react';

import Input from '../../../components/pages/add-edit-feedback-page/Input';

import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
    title: "App/Shared/Input",
    component: Input
}


const Template = (args) => <Input {...args} />

export const Default = Template.bind({});
export const Error = Template.bind({});
export const HasCategoryDropdown = Template.bind({});
export const HasStatusDropdown = Template.bind({});


Default.args = {
    id: "sample-input",
    inputType: "text",
    dropdownItemType: "category",
    inputName: "sample-input",
    hasDropdown: false,
    isRequired: true,
    showValidationMessage: false,
    handleOnChange: (target) => console.log(target)
};

Error.args = { 
    ...Default.args,
    showValidationMessage: true
};

HasCategoryDropdown.args = {
    ...Default.args,
    hasDropdown: true
};

HasStatusDropdown.args = {
    ...HasCategoryDropdown.args,
    dropdownItemType: "status"  
};

const openDropdownInteraction = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // * Simulate user clicking button to reveal dropdown
    await userEvent.click(canvas.getByRole("button"));

    // * Ensure DropdownMenu is rendered after click
    await expect(canvas.getByRole("list")).toBeInTheDocument();
};

HasStatusDropdown.play = openDropdownInteraction;
HasCategoryDropdown.play = openDropdownInteraction;