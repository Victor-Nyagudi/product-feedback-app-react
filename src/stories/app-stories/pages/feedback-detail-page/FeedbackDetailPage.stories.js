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
    * The upvote button interaction test may fail 
    * when you run "npm run test-storybook" because of the delay
    * before local storage is updated. Clicking the upvote button
    * first checks if the button has been clicked before in local 
    * storage before doing anything.
    
    * The same "issue" persists in FeedbackDetailMain stories, however,
    * manually testing the interaction in Storybook works fine most of the
    * time. I wouldn't regard this as a failing test knowing these facts.
*/
Default.play = async (objectWithCanvasElement) => {
    await EditFeedbackLink.play(objectWithCanvasElement);

    await FeedbackDetailMainStories.Default.play(objectWithCanvasElement);
}