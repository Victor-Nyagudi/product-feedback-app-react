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

NoBadge.args = {
    id: 1,
    title: "Improve contrast ratio of buttons",
    message: "The contrast between the button text and the background isn't very good. It's hard to read the text at a glance, so maybe switching up the colors would help make things more readable",
    tagCategory: "UX",
    totalUpvotes: 15,
    totalComments: 3,
}

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