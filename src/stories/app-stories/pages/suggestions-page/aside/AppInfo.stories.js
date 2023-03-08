import React from "react";

import AppInfo from "../../../../../components/pages/suggestions-page/aside/AppInfo";

import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
    title: "App/Pages/Suggestions/Aside/AppInfo",
    component: AppInfo,
    argTypes: {
        showHideSideMenu: { action: "showHideSideMenu" }
    },
    decorators: [
        (Story) => (
            <div className="suggestions">
                <aside className="suggestions__aside">
                    <Story />
                </aside>
            </div>
        )
    ]
}

const Template = (args) => <AppInfo {...args} />;

export const NoMenuButton = Template.bind({});
export const MobileWithMenuButton = Template.bind({});

NoMenuButton.args = { isMobileScreen: false };

MobileWithMenuButton.args = { isMobileScreen: true };

MobileWithMenuButton.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const toggleMenuButton = canvas.getAllByRole("button")
        .find(btn => btn.classList.contains("app-info__hamburger-button"));

    await userEvent.click(toggleMenuButton);

    await expect(canvas.getByTestId("close-menu-button")).toBeVisible();
    await expect(canvas.queryByTestId("hamburger-button")).not.toBeInTheDocument();

    await userEvent.click(toggleMenuButton);

    await expect(canvas.getByTestId("hamburger-button")).toBeVisible();
    await expect(canvas.queryByTestId("close-menu-button")).not.toBeInTheDocument();
}