import React from "react";

import FeedbackDetailAddComment from "../../../../components/pages/feedback-detail-page/FeedbackDetailAddComment";

import * as FeedbackDetailMainStories from "./FeedbackDetailMain.stories";

import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
    title: "App/Pages/FeedbackDetail/FeedbackDetailAddComment",
    component: FeedbackDetailAddComment,
    argTypes: {
        updateFeedbackItem: { action: "updateFeedbackItem" }
    }
}

const Template = (args) => <FeedbackDetailAddComment {...args} />;

export const Default = Template.bind({});

Default.args = {
    currentUser: FeedbackDetailMainStories.Default.args.currentUser,
    feedbackItem: FeedbackDetailMainStories.Default.args.feedbackItemDetailToShow
}

Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const commentTextbox = canvas.getByLabelText("Type your comment here");
    const commentCharacterLimit = canvas.getByTestId("comment-character-limit");

    await expect(commentTextbox).toBeRequired();

    await userEvent.type(commentTextbox, "Yes");

    await expect(commentCharacterLimit).toHaveTextContent(247);

    await userEvent.clear(commentTextbox);

    await expect(commentCharacterLimit).toHaveTextContent(250);

    await userEvent.type(commentTextbox, "I agree with this.");
    
    await userEvent.click(canvas.getByRole("button", { name: "Post Comment" }));

    await expect(commentTextbox).toHaveTextContent("");
}