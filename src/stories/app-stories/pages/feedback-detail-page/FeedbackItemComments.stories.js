import React from "react";

import FeedbackItemComments from "../../../../components/pages/feedback-detail-page/FeedbackItemComments";

import * as FeedbackItemCommentStories from "./FeedbackItemComment.stories";

import { addCommentInteraction } from "./FeedbackItemCommentReply.stories";

export default {
    title: "App/Pages/FeedbackDetail/FeedbackItemComments",
    component: FeedbackItemComments,
}

const Template = (args) => <FeedbackItemComments {...args} />;

export const Default = Template.bind({});

Default.args = {
    comments: [
        {
            id: 3,
            content: "Also, please allow styles to be applied based on system preferences.I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
            user: {
                image: "./assets/user-images/image-elijah.jpg",
                name: "Elijah Moss",
                username: "hexagon.bestagon"
            },
            replies: []
        },
        {
            id: 4,
            content: "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
            user: {
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
                        image: "./assets/user-images/image-anne.jpg",
                        name: "Anne Valentine",
                        username: "annev1990"
                    }
                },
                {
                    id: 2,
                    content: "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
                    replyingTo: "annev1990",
                    user: {
                        image: "./assets/user-images/image-ryan.jpg",
                        name: "Ryan Welles",
                        username: "voyager.344"
                    }
                },
                {
                    content: "I use Night Eye on my browser. The free version gives you dark mode on up to 5 sites.",
                    replyingTo: "annev1990",
                    user: {
                        image: "./assets/user-images/image-zena.jpg",
                        name: "Zena Kelley",
                        username: "velvetround"
                    }
                }
            ]
        }
    ]
}

Default.play = async (objectWithCanvasElement) => {
    await FeedbackItemCommentStories.Default.play(objectWithCanvasElement);

    await addCommentInteraction(objectWithCanvasElement, 2)
}