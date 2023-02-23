import React from 'react';

import FeedbackItem from '../../components/shared/FeedbackItem';

export default {
    title: "Project/Shared/FeedbackItem",
    component: FeedbackItem,
    parameters: {
        backgrounds: { disable: true }
    }
}

const Template = (args) => <FeedbackItem {...args} />;

export const NoBadge = Template.bind({});

NoBadge.args = {
    title: "Improve contrast ratio of buttons",
    message: "The contrast between the button text and the background isn't very good. It's hard to read the text at a glance, so maybe switching up the colors would help make things more readable",
    category: "UX",
    totalUpvotes: 15,
    totalComments: 3,

}