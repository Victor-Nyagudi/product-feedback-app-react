import React from "react";

import DropdownMenu from "../../../components/shared/DropdownMenu";

import * as DropdownMenuItemStories from "./DropdownMenuItem.stories";

export default {
    title: "App/Shared/DropdownMenu",
    component: DropdownMenu,
    args: {
        shouldShow: true,
        dropdownItems: [
            { ...DropdownMenuItemStories.Unselected.args },
            { ...DropdownMenuItemStories.Selected.args },
            { ...DropdownMenuItemStories.Unselected.args },
            { ...DropdownMenuItemStories.Unselected.args },
            { ...DropdownMenuItemStories.Unselected.args }
        ]
    },
    argTypes: {
        updateText: { action: "updateText" },
        toggleDropdownMenu: { action: "toggleDropdownMenu" }
    }
}

export const Default = (args) => <DropdownMenu { ...args } />