import React from 'react';

import Input from '../../../components/pages/add-edit-feedback-page/Input';

import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
    title: "App/Shared/Input",
    component: Input,
    args: {
        id: "sample-input",
        inputType: "text",
        dropdownItemType: "category",
        inputName: "sample-input",
        hasDropdown: false,
        isRequired: true,
        showValidationMessage: false,
        handleOnChange: (target) => console.log(target)
    },
    /*
        * Parameters are metadata about a story typically used to control
        * Storybook features & add-ons e.g. background (an add-on) of the
        * story on the website
    */
    parameters: {
        backgrounds: {
            default: "white",
            values: [
                { name: "white", value: "#ffffff" },
                { name: "dark-grey", value: "#3b3b3b" }
            ]
        }
    }
}

const Template = (args) => <Input {...args} />

export const Default = Template.bind({});
export const Error = Template.bind({});
export const HasCategoryDropdown = Template.bind({});
export const HasStatusDropdown = Template.bind({});


Error.args = { showValidationMessage: true };

HasCategoryDropdown.args = { hasDropdown: true };

HasStatusDropdown.args = {
    hasDropdown: true,
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