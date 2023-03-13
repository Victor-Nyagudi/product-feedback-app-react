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

/*
    * Storybook's "getAllByRole" is misbehaving when running this interaction
    * test. After refreshing a couple of times, it works a few times then
    * goes back to misbehaving. The original interaction test is inside
    * FeedbackItemCommentReply.stories.js

    * The same "issue" persists in FeedbackDetailMain stories, however,
    * manually testing the interaction in Storybook works fine most of the
    * time. I wouldn't regard this as a failing test knowing these facts.
*/
Default.play = async (objectWithCanvasElement) => {
    await EditFeedbackLink.play(objectWithCanvasElement);

    await FeedbackDetailMainStories.Default.play(objectWithCanvasElement);
}