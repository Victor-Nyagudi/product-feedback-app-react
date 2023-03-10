import React from "react";

import FeedbackItemCommentReply from "../../../../components/pages/feedback-detail-page/FeedbackItemCommentReply";

import * as CommentReplyFormStories from "./CommentReplyForm.stories";

import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
    title: "App/Pages/FeedbackDetail/FeedbackItemCommentReply",
    component: FeedbackItemCommentReply,
    parameters:  {
        backgrounds: {
            default: "white",
            values: [{ name: "white", value: "#ffffff" }]
        }
    },
    decorators: [
        (Story) => (
            <ul className="comment__replies">
                <Story />
            </ul>
        )
    ]
}

const Template = (args) => <FeedbackItemCommentReply {...args} />;

export const Default = Template.bind({});

Default.args = {
    replyText: "I second what you said in that last comment.",
    personReplying: {
        image: "./assets/user-images/image-elijah.jpg",
        name: "Elijah Moss",
        username: "hexagon.bestagon"
    },
    replyingTo: "tonystark",
    topLevelCommentId: CommentReplyFormStories.Default.args.commentId
}

Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const commentReplyForm = canvas.getByTestId("comment-reply-form");
    const textBox = canvas.getAllByPlaceholderText("Write a reply")[0];
    const postReplyBtn = canvas.getAllByRole("button", { name: "Post Reply" })[0];

    await userEvent.click(canvas.getAllByRole("button", { name: "Reply" })[0]);

    await expect(commentReplyForm).not.toHaveClass("comment__reply-form-container--hidden");

    await expect(textBox).toBeRequired();

    await userEvent.type(textBox, "A reply to a reply? How far does it even go??");

    await userEvent.click(postReplyBtn);

    await expect(commentReplyForm).toHaveClass("comment__reply-form-container--hidden");
}