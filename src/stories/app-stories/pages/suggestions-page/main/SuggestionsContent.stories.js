import React from "react";

import SuggestionsContent from "../../../../../components/pages/suggestions-page/main/SuggestionsContent";

import * as SuggestionsHeader from "./SuggestionsHeader.stories";
import * as SuggestionsMain from "./SuggestionsMain.stories"

export default {
    title: "App/Pages/Suggestions/Main/SuggestionsContent",
    component: SuggestionsContent,
    args: {
        feedbackItems: SuggestionsMain.WithItems.args.feedbackItems,
        mobileSideMenuOpen: false,
        sharedProps: SuggestionsMain.WithItems.args.sharedProps
    },
    argTypes: {
        getSortByCriteria: { action: "getSortByCriteria" },
        getSelectedFeedbackItemId: { action: "getSelectedFeedbackItemId" }
    },
    decorators: [
        (Story) => (
            <div className="suggestions">
                <aside className="suggestions__aside"></aside>
                <Story />
            </div>
        )
    ]
}

const Template = (args) => <SuggestionsContent {...args} />;

export const MobileSideMenuClosed = Template.bind({});
export const MobileSideMenuOpen = Template.bind({});
export const Desktop = Template.bind({});

Desktop.args = {
    isMobileScreen: SuggestionsHeader.Desktop.args.isMobileScreen
}

/*
    * Storybook applies some padding to the story
    * in the iFrame which is why the mobile story 
    * looks more squished compared to the live site.
    * You can remove the padding by inspecting the element
    * and unchecking it under styles for a better representation
    * of the mobile version.
*/
MobileSideMenuClosed.args = { isMobileScreen: SuggestionsHeader.Mobile.args.isMobileScreen }

MobileSideMenuOpen.args = { isMobileScreen: true, mobileSideMenuOpen: true }

const interactions = async (canvasElement) => {
    await SuggestionsHeader.interactions(canvasElement);

    await SuggestionsMain.WithItems.play(canvasElement);
}

Desktop.play = interactions;

MobileSideMenuClosed.play = interactions;