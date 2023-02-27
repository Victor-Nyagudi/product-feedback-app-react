import React from "react";

import DropdownMenu from "../../../components/shared/DropdownMenu";

export default {
    title: "App/Shared/DropdownMenu",
    component: DropdownMenu,
    args: {
        shouldShow: true,
        dropdownItems: [
            { buttonText: 'Feature', isSelected: true },
            { buttonText: 'UI', isSelected: false },
            { buttonText: 'UX', isSelected: false },
            { buttonText: 'Enhancement', isSelected: false },
            { buttonText: 'Bug', isSelected: false }
        ]
    }
}

export const Default = (args) => <DropdownMenu { ...args } />