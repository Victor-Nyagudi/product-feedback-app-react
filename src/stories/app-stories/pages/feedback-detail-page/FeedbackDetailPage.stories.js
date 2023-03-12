import React from "react";

import FeedbackDetailPage from "../../../../components/pages/feedback-detail-page/FeedbackDetailPage";

import * as FeedbackDetailMainStories from "./FeedbackDetailMain.stories";
import { EditFeedbackLink } from "../../shared/Button.stories";

export default {
    title: "App/Pages/FeedbackDetail/FeedbackDetailPage",
    component: FeedbackDetailPage,
    argTypes: {  
        toggleEditPage: { actions: "toggleEditPage" }
    }
}

const Template = (args) => <FeedbackDetailPage {...args} />;

export const Default = Template.bind({});

Default.args =  {
    sharedProps: {
        currentUser: FeedbackDetailMainStories.Default.args.currentUser,
        dbFeedbackItemToShow: FeedbackDetailMainStories.Default.args.feedbackItemDetailToShow,
        getDbFeedbackItem: () => {},
        updateDbFeedbackItem: () => {},
    }
}

Default.play = async (objectWithCanvasElement) => {
    await EditFeedbackLink.play(objectWithCanvasElement);

    await FeedbackDetailMainStories.Default.play(objectWithCanvasElement);
}