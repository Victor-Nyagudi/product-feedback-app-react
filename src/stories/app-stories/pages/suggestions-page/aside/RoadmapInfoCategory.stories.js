import React from "react";

import RoadmapInfoCategory from "../../../../../components/pages/suggestions-page/aside/RoadmapInfoCategory";

export default {
    title: "App/Pages/Suggestions/Aside/RoadmapInfoCategory",
    component: RoadmapInfoCategory
}

const Template = (args) => <RoadmapInfoCategory {...args} />;

export const Planned = Template.bind({});
export const InProgress = Template.bind({});
export const Live = Template.bind({});

export const PlannedWrappedByAside = Template.bind({});
export const InProgressWrappedByAside = Template.bind({});
export const LiveWrappedByAside = Template.bind({});


Planned.args = {
    category: "Planned",
    quantity: 3,
    iconColor: "orange"
};

PlannedWrappedByAside.decorators = [
    (Story) => (
        <aside className="suggestions__aside">
            <Story />
        </aside>
    )
];

PlannedWrappedByAside.args = { ...Planned.args }


InProgress.args = {
    category: "In Progress",
    quantity: 4,
    iconColor: "purple"
};

InProgressWrappedByAside.decorators = [
    (Story) => (
        <aside className="suggestions__aside">
            <Story />
        </aside>
    )
];

InProgressWrappedByAside.args = { ...InProgress.args }


Live.args = {
    category: "Live",
    quantity: 6,
    iconColor: "light-blue"
}

LiveWrappedByAside.decorators = [
    (Story) => (
        <aside className="suggestions__aside">
            <Story />
        </aside>
    )
];

LiveWrappedByAside.args = { ...Live.args }