import React from "react";

import CommentReplyForm from "../../../../components/pages/feedback-detail-page/CommentReplyForm";

import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
    title: "App/Pages/FeedbackDetail/CommentReplyForm",
    component: CommentReplyForm,
    argTypes: {
        toggleCommentReplyForm: { action: "toggleCommentReplyForm" }
    },
    parameters:  {
        backgrounds: {
            default: "white",
            values: [{ name: "white", value: "#ffffff" }]
        }
    }
}

const Template = (args) => <CommentReplyForm {...args} />;

export const Default = Template.bind({});

Default.args = {
    shouldShow: true,
    commentId: 3,
    replyUsername: "tonystark"
}

Default.play = async ({ canvasElement }) =>  {
    const canvas = within(canvasElement);

    const textbox =  canvas.getByPlaceholderText("Write a reply");

    await expect(textbox).toBeRequired();

    await userEvent.type(textbox, "This is a simple reply.");

    await userEvent.click(canvas.getByRole("button", { name: "Post Reply" }));

    await expect(textbox).toHaveTextContent("");
}