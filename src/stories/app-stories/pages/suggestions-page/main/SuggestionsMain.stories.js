import React from "react";

import SuggestionsMain from "../../../../../components/pages/suggestions-page/main/SuggestionsMain";

import { AddFeedbackLink } from "../../../shared/Button.stories";
import { testUpvoteButton, testFeedbackItemLink } from "../../../shared/FeedbackItem.stories";

import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
    title: "App/Pages/Suggestions/Main/SuggestionsMain",
    component: SuggestionsMain,
    args: {
        sharedProps: { updateDbFeedbackItem: () => { } }
    },
    argTypes: {
        getSelectedFeedbackItemId: { action: "getSelectedFeedbackItemId" }
    }
}

const Template = (args) => <SuggestionsMain {...args} />;

export const WithItems = Template.bind({});
export const Empty = Template.bind({});

WithItems.args = {
    feedbackItems: [{
        "id": 60,
        "title": "Animated solution screenshots",
        "category": "Bug",
        "upvotes": 9,
        "status": "In Progress",
        "description": "Screenshots of solutions with animations don’t display correctly.",
        "comments": []
    },
    {
        "id": 61,
        "title": "Add micro-interactions",
        "category": "Enhancement",
        "upvotes": 71,
        "status": "Live",
        "description": "Small animations at specific points can add delight.",
        "comments": [
            {
                "id": 15,
                "content": "I'd love to see this! It always makes me so happy to see little details like these on websites.",
                "user": {
                    "image": "./assets/user-images/image-victoria.jpg",
                    "name": "Victoria Mejia",
                    "username": "arlen_the_marlin"
                },
                "replies": [
                    {
                        "id": 1,
                        "content": "Me too! I'd also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!",
                        "replyingTo": "arlen_the_marlin",
                        "user": {
                            "image": "./assets/user-images/image-suzanne.jpg",
                            "name": "Suzanne Chang",
                            "username": "upbeat1811"
                        }
                    },
                    {
                        "id": 2,
                        "content": "Makes for a great user experience too.",
                        "replyingTo": "arlen_the_marlin",
                        "user": {
                            "image": "./assets/user-images/image-zena.jpg",
                            "name": "Zena Kelley",
                            "username": "velvetround"
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": 62,
        "title": "Use portrait images on mobile",
        "description": "Some of the landscape format images are really small on mobile. I think portrait ones would work better.",
        "category": "UX",
        "comments": [
            {
                "id": 1,
                "content": "I second this. I'm still using an iPhone 6, and I struggle to see some of the details in the images.",
                "user": {
                    "name": "Zena Kelley",
                    "username": "velvetround",
                    "image": "./assets/user-images/image-zena.jpg"
                },
                "replies": []
            }
        ],
        "status": "Planned",
        "upvotes": 15
    },
    {
        "id": 63,
        "title": "Contact button not working",
        "description": "Clicking the delete button does nothing on the contact page.",
        "category": "Bug",
        "comments": [
            {
                "id": 1,
                "content": "I've also experienced this. Refreshing the page doesn't work either. ",
                "user": {
                    "name": "Zena Kelley",
                    "username": "velvetround",
                    "image": "./assets/user-images/image-zena.jpg"
                },
                "replies": []
            }
        ],
        "status": "Suggestion",
        "upvotes": 0
    },
    {
        "id": 16,
        "title": "Adding feedback items not working",
        "description": "The app crashes every time I try to add some feedback items. Would be nice if this worked properly.",
        "category": "Bug",
        "comments": [],
        "status": "Suggestion",
        "upvotes": -1
    }
    ],
    sharedProps: { updateDbFeedbackItem: () => { } }
}

Empty.args = { feedbackItems: [] }

WithItems.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const titleLink = canvas.getByRole("link", { name: "Add micro-interactions" });

    await testFeedbackItemLink(titleLink);

    const upvoteButton = canvas.getByRole("button", { name: "71" });

    await testUpvoteButton(upvoteButton);
};

Empty.play = AddFeedbackLink.play;