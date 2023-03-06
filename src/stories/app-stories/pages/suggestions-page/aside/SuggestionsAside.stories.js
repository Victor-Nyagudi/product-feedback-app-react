import React from "react";

import SuggestionsAside from "../../../../../components/pages/suggestions-page/aside/SuggestionsAside";

import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
    title: "App/Pages/Suggestions/Aside/SuggestionsAside",
    component: SuggestionsAside,
    args: {
        feedbackItems: [
            {
                "id": 11,
                "title": "Animated solution screenshots",
                "category": "Bug",
                "upvotes": 9,
                "status": "In Progress",
                "description": "Screenshots of solutions with animations don’t display correctly.",
                "comments": []
            },
            {
                "id": 12,
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
                "id": 14,
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
            }
        ]
    },
    argTypes: {
        getActiveTag: { action: "getActiveTag" }
    },
    decorators: [
        (Story) => (
            <div className="suggestions">
                <Story />
            </div>
        )
    ]
}

const Template = (args) => <SuggestionsAside {...args} />;

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // * Test pressing one of the tag buttons
    const fourthListItem = canvas.getAllByRole("listitem")[3];

    await userEvent.click(within(fourthListItem).getByRole("button", { name: "Enhancement" }));

    await expect(fourthListItem).toHaveClass("tag--active");

    // * Test "View" link
    const viewLink = canvas.getByRole("link", { name: "View" });

    await userEvent.click(viewLink);

    await expect(viewLink).toHaveAttribute("href", "/roadmap");
}
