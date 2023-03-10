import React from "react";

import RoadmapCategoryItem from "../../../../components/pages/roadmap-page/RoadmapCategoryItem";

import { HasBadgeLink } from "../../shared/FeedbackItem.stories";

export default {
    title: "App/Pages/Roadmap/RoadmapCategoryItem",
    component: RoadmapCategoryItem,
    parameters: {
        a11y: {
            config: {
                rules: [
                    {
                        id: "listitem",
                        enabled: false
                    }
                ]
            }
        }
    },
    argTypes: {
        getSelectedFeedbackItemId: { action: "getSelectedFeedbackItemId" },
        updateFeedbackItem: { action: "updateFeedbackItem" },
    },
    decorators: [
        (Story) => (
            <ul>
                <Story />
            </ul>
        )
    ]
}

const Template = (args) => <RoadmapCategoryItem {...args} />;

export const Live = Template.bind({});
export const Planned = Template.bind({});
export const InProgress = Template.bind({});

Live.args = {
    ...HasBadgeLink.args,
    color: "light-blue"
}

Planned.args = {
    ...HasBadgeLink.args,
    color: "orange",
    badgeText: "Planned"
}

InProgress.args = {
    ...HasBadgeLink.args,
    color: "purple",
    badgeText: "In Progress"
}

Live.play = HasBadgeLink.play;
Planned.play = HasBadgeLink.play;
InProgress.play = HasBadgeLink.play;