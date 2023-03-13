import React from "react";

import DropdownMenu from "../../../components/shared/DropdownMenu";

import * as DropdownMenuItemStories from "./DropdownMenuItem.stories";

import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
    title: "App/Shared/DropdownMenu",
    component: DropdownMenu,
    args: {
        shouldShow: true,
        dropdownItems: [
            { ...DropdownMenuItemStories.UnselectedFeature.args },
            { ...DropdownMenuItemStories.UnselectedUX.args },
            { ...DropdownMenuItemStories.UnselectedBug.args },
            { ...DropdownMenuItemStories.UnselectedFeature.args },
            { ...DropdownMenuItemStories.UnselectedFeature.args }
        ]
    },
    argTypes: {
        updateText: { action: "updateText" },
        toggleDropdownMenu: { action: "toggleDropdownMenu" }
    }
}

export const Default = (args) => <DropdownMenu { ...args } />

Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole("button", { name: "Bug" });

    await userEvent.click(button);

    await expect(within(button).getByTestId("checkmark")).toBeVisible();
}