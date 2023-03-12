import React from "react";

import FeedbackItemComment from "../../../../components/pages/feedback-detail-page/FeedbackItemComment";

import * as CommentReplyFormStories from "./CommentReplyForm.stories";
import { addCommentInteraction } from "./FeedbackItemCommentReply.stories";

export default {
    title: "App/Pages/FeedbackDetail/FeedbackItemComment",
    component: FeedbackItemComment,
    parameters:  {
        backgrounds: {
            default: "white",
            values: [{ name: "white", value: "#ffffff" }]
        }
    }
}

const Template = (args) => <FeedbackItemComment {...args} />;

export const Default = Template.bind({});

Default.args = {
    commentText: "That would definitely make the product much better.",
    commenter: {
        image: "./assets/user-images/image-james.jpg",
        name: "James Skinner",
        username: "hummingbird1"
    },
    replies: [
        {
            id: 1,
            content: "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
            replyingTo: "hummingbird1",
            user: {
                "image": "./assets/user-images/image-anne.jpg",
                "name": "Anne Valentine",
                "username": "annev1990"
            }
        },
        {
            id: 2,
            content: "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
            replyingTo: "annev1990",
            user: {
                "image": "./assets/user-images/image-ryan.jpg",
                "name": "Ryan Welles",
                "username": "voyager.344"
            }
        },
        {
            content: "I use Night Eye on my browser. The free version gives you dark mode on up to 5 sites.",
            replyingTo: "annev1990",
            user: {
                "image": "./assets/user-images/image-zena.jpg",
                "name": "Zena Kelley",
                "username": "velvetround"
            }
        }
    ],
    commentId: CommentReplyFormStories.Default.args.commentId
}

Default.play = async (objectWithCanvasElement) => {
    await addCommentInteraction(objectWithCanvasElement, 0);
    
    await addCommentInteraction(objectWithCanvasElement, 1);
}