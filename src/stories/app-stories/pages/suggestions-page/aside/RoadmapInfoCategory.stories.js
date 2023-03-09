import React from "react";

import RoadmapInfoCategory from "../../../../../components/pages/suggestions-page/aside/RoadmapInfoCategory";

export default {
    title: "App/Pages/Suggestions/Aside/RoadmapInfoCategory",
    component: RoadmapInfoCategory,
    decorators: [
        (Story) => (
            <aside className="suggestions__aside">
                <Story />
            </aside>
        )
    ],
    parameters: {
        a11y: {
            config: {
                rules: [
                    {
                        id: "listitem",
                        selector: "roadmap-info__category"
                    }
                ]
            }
        }
    }
}

const Template = (args) => <RoadmapInfoCategory {...args} />;

export const Planned = Template.bind({});
export const InProgress = Template.bind({});
export const Live = Template.bind({});


Planned.args = {
    category: "Planned",
    quantity: 3,
    iconColor: "orange"
};

InProgress.args = {
    category: "In Progress",
    quantity: 4,
    iconColor: "purple"
};

Live.args = {
    category: "Live",
    quantity: 6,
    iconColor: "light-blue"
}
