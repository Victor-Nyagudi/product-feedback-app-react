import React from "react";

import SuggestionsPage from "../../../../components/pages/suggestions-page/SuggestionsPage";

import { WithItems } from "./main/SuggestionsMain.stories";

import * as MobileNavigation from "../../shared/MobileNavigation.stories";
import * as AppInfo from "../../pages/suggestions-page/aside/AppInfo.stories";
import * as FeedbackItem from "../../shared/FeedbackItem.stories";
import * as SuggestionHeader from "../suggestions-page/main/SuggestionsHeader.stories";
import { AddFeedbackLink } from "../../shared/Button.stories";

import SuggestionsMainStories from "./main/SuggestionsMain.stories";

import { clickTagInteraction } from "./aside/Tags.stories";

import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
    title: "App/Pages/Suggestions/SuggestionsPage",
    component: SuggestionsPage
}

const Template = (args) => <SuggestionsPage {...args} />;

export const Mobile = Template.bind({});
export const Desktop = Template.bind({});

const sharedArgs = {
    dbFeedbackItems: WithItems.args.feedbackItems,
    showFeedbackItemDetail: () => { },
    updateDbFeedbackItem: SuggestionsMainStories.args.sharedProps.updateDbFeedbackItem
}

Mobile.args = {
    sharedProps: {
        isMobileScreen: true,
        ...sharedArgs
    }
}

Desktop.args = {
    sharedProps: {
        isMobileScreen: false,
        ...sharedArgs
    }
}

const generalInteractions = async (objectWithCanvasElement) => {
    const { canvasElement } = objectWithCanvasElement;

    const canvas = within(canvasElement);

    await FeedbackItem.otherInteractions(objectWithCanvasElement);

    await SuggestionHeader.interactions(objectWithCanvasElement);

    await expect(canvas.getByRole("link", { name: "Add Feedback" }))
        .toHaveAttribute("href", "/add-feedback");
}

Mobile.play = async (objectWithCanvasElement) => {
    const { canvasElement } = objectWithCanvasElement;

    const canvas = within(canvasElement);

    await AppInfo.MobileWithMenuButton.play(objectWithCanvasElement);

    const toggleMenuButton = canvas.getAllByRole("button")
        .find(btn => btn.classList.contains("app-info__hamburger-button"));

    await userEvent.click(toggleMenuButton);

    await expect(canvas.getByTestId("mobile-side-menu")).toBeVisible();

    await MobileNavigation.Default.play(objectWithCanvasElement);

    await clickTagInteraction(objectWithCanvasElement);

    await userEvent.click(toggleMenuButton);

    await expect(canvas.getByTestId("mobile-side-menu")).not.toBeVisible();

    await generalInteractions(objectWithCanvasElement);
}

Desktop.play = async (objectWithCanvasElement) => {
    await MobileNavigation.Default.play(objectWithCanvasElement);

    await clickTagInteraction(objectWithCanvasElement);

    await generalInteractions(objectWithCanvasElement);
}