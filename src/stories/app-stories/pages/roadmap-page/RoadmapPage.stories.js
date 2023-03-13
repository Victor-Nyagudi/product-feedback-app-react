import React from "react";

import RoadmapPage from "../../../../components/pages/roadmap-page/RoadmapPage";

import { feedbackItems } from "./RoadmapMain.stories";
import { AddFeedbackLink } from "../../shared/Button.stories";
import { HasBadgeLink } from "../../shared/FeedbackItem.stories";

import * as RoadmapMobileNavbarStories from "./RoadmapMobileNavbar.stories";

export default {
    title: "App/Pages/Roadmap/RoadmapPage",
    component: RoadmapPage,
}

const Template = (args) => <RoadmapPage {...args} />;

export const Mobile = Template.bind({});
export const Desktop = Template.bind({});

const sharedArgs = {
    dbFeedbackItems: feedbackItems,
    showFeedbackItemDetail: () => { },
    updateDbFeedbackItem: () => { }
}

Mobile.args = {
    sharedProps: {
        ...sharedArgs,
        isSmallerThan700px: true
    }
}

Desktop.args = {
    sharedProps: {
        ...sharedArgs,
        isSmallerThan700px: false
    }
}

Mobile.play = async (objectWithCanvasElement) => {
    await AddFeedbackLink.play(objectWithCanvasElement);

    await HasBadgeLink.play(objectWithCanvasElement);

    await RoadmapMobileNavbarStories.Default.play(objectWithCanvasElement);
}

Desktop.play = async (objectWithCanvasElement) => {
    await AddFeedbackLink.play(objectWithCanvasElement);

    await HasBadgeLink.play(objectWithCanvasElement);
}