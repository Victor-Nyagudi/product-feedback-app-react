import React from 'react';

import FeedbackItem from '../../components/shared/FeedbackItem';

import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
    title: "Project/Shared/FeedbackItem",
    component: FeedbackItem,
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
};

NoBadge.play = focusInteraction;

export const HasBadge = Template.bind({});

HasBadge.args = {
    id: 2,
    title: "Add dark mode",
    message: "Much easier on the eyes, especially at night after a long day of looking at screens all the time",
    totalUpvotes: 123,
    totalComments: 7,
    showBadge: true,
    badgeText: "Live",
    badgeColor: "light-blue",
    tagCategory: "Feature"
}

HasBadge.play = focusInteraction;   