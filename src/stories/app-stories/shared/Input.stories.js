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
        inputName: "sample-input",
        dropdownItemType: "category",
        hasDropdown: false,
        isRequired: true,
        showValidationMessage: false
    },
    argTypes: {
        handleOnChange: { action: "handleOnChange" },
        updateReadOnlyValue: { action: "updateReadOnlyValue" }
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

HasCategoryDropdown.args = { 
    hasDropdown: true,
    dropdownItemType: "category",
    inputValue: "Feature" 
};

HasStatusDropdown.args = {
    hasDropdown: true,
    dropdownItemType: "status",
    inputValue: "Suggestion"
};

const interactions = async (canvasElement, option) => {
    const canvas = within(canvasElement);

    // * Simulate user clicking button to reveal dropdown
    await userEvent.click(canvas.getByRole("button"));

    const dropdownMenu = canvas.getAllByRole("list")
        .find(item => item.classList.contains("dropdown-menu"));

    // * Ensure DropdownMenu is rendered after click
    await expect(dropdownMenu).toBeVisible();

    // * Simulate user choosing an option 
    await userEvent.click(canvas.getByText(option));

    // * Ensure DropdownMenu is not rendred
    /*
        ? To check if an element is not in the DOM, you'll need to 
        ? use "queryByRole" instead of "getByRole" or "findByRole"
        ? which produce errors. 
    */
    await expect(dropdownMenu).not.toBeVisible();
}

HasStatusDropdown.play = async ({ canvasElement }) => {
    await interactions(canvasElement, "Planned");
};

HasCategoryDropdown.play = async ({ canvasElement }) => {
    await interactions(canvasElement,  "UI");
};