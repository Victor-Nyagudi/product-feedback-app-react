import React from "react";

import RoadmapMobileNavItem from "../../../../components/pages/roadmap-page/RoadmapMobileNavItem";

export default {
    title: "App/Pages/Roadmap/RoadmapMobileNavItem",
    component: RoadmapMobileNavItem,
    argTypes: {
        setActive: { action: "setActive" }
    },
    decorators: [
        (Story) => (
            <ul className="roadmap__mobile-nav-items container">
                <Story />
            </ul>
        )
    ]
}

const Template = (args) => <RoadmapMobileNavItem {...args} />;

export const Live = Template.bind({});
export const Planned = Template.bind({});
export const InProgress = Template.bind({});

Live.args = {
    text: "Live", 
    totalFeedbackItems: 5, 
    isActive: true, 
    index: 3 
}

Planned.args = {
    text: "Planned", 
    totalFeedbackItems: 2, 
    isActive: false, 
    index: 2 
}

InProgress.args = {
    text: "In Progress", 
    totalFeedbackItems: 1, 
    isActive: false, 
    index: 3 
}