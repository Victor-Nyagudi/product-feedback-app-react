import React from 'react';

import FeedbackItem from '../../../components/shared/FeedbackItem';

import { within } from "@storybook/testing-library";

export default {
    title: "App/Shared/FeedbackItem",
    component: FeedbackItem,
    args: {
        feedbackItemObject: {
            "id": 1,
            "title": "Add tags for solutions",
            "category": "Enhancement",
            "upvotes": 112,
            "status": "suggestion",
            "description": "Easier to search for solutions based on a specific stack.",
            "comments": [
                {
                    "id": 1,
                    "content": "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
                    "user": {
                        "image": "./assets/user-images/image-suzanne.jpg",
                        "name": "Suzanne Chang",
                        "username": "upbeat1811"
                    }
                },
                {
                    "id": 2,
                    "content": "Please use fun, color-coded labels to easily identify them at a glance",
                    "user": {
                        "image": "./assets/user-images/image-thomas.jpg",
                        "name": "Thomas Hood",
                        "username": "brawnybrave"
                    }
                }
            ]
        }
    },
    argTypes: {
        updateFeedbackItem: { action: "updateFeedbackItem" },
        getSelectedFeedbackItemId: {
            action: "getSelectedFeedbackItemId"
        },
        badgeColor: { control: "text" }
    },
    decorators: [
        (Story) => (
            <div className="suggestions__main">
                <Story />
            </div>
        )
    ]
}

const Template = (args) => <FeedbackItem {...args} />;

export const NoBadge = Template.bind({});
export const NoBadgeLink = Template.bind({});

export const HasBadge = Template.bind({});
export const HasBadgeLink = Template.bind({});


//#region Why testing hover states isn't straightforward in Storybook

/*
    The :hover event is seen as a trusted event by browsers,
    so it can't be tested using the "play" function in  Storybook.
    https://www.chromatic.com/docs/hoverfocus
*/
// const hoverInteraction = async ({ canvasElement }) => {
//     /*
//         ? The play function in Storybook uses its version of
//         ? Testing Library to simulate user interaction.

//         ? More on that in this blog post explaining testing 
//         ? component interactions using Storybook.
//         ? https://storybook.js.org/blog/test-component-interactions-with-storybook/

//         ? Read more on Testing Library
//         ? https://testing-library.com/docs/guide-disappearance/
//     */
//     const canvas = within(canvasElement);

//     // * Simulate hover interaction
//     await userEvent.hover(canvas.getByRole("button"));

//     /*
//         * For a full list of matchers provided by jest-dom e.g. toBeInTheDocument(),
//         * toHaveClass(), etc., go here.
//         * https://github.com/testing-library/jest-dom#usage
//     */
//     await expect(canvas.getByRole("button")).toHaveClass("feedback-content__upvotes-button--clicked");
// };

//#endregion

const focusInteraction = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.getByRole("button").focus();
};

NoBadge.args = {
    id: 1,
    title: "Improve contrast ratio of buttons",
    message: "The contrast between the button text and the background isn't very good. It's hard to read the text at a glance, so maybe switching up the colors would help make things more readable",
    tagCategory: "UX",
    totalUpvotes: 15,
    totalComments: 3,
    showBadge: false,
    isLink: false
};

NoBadgeLink.args = {
    ...NoBadge.args,
    isLink: true
};

HasBadge.args = {
    id: 2,
    title: "Add dark mode",
    message: "Much easier on the eyes, especially at night after a long day of looking at screens all the time",
    totalUpvotes: 123,
    totalComments: 7,
    showBadge: true,
    badgeText: "Live",
    badgeColor: "light-blue",
    tagCategory: "Feature",
    isLink: false
}

HasBadgeLink.args = {
    ...HasBadge.args,
    isLink: true
};

HasBadge.play = focusInteraction;
NoBadge.play = focusInteraction;