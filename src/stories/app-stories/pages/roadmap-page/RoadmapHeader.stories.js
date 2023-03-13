import React from "react";

import RoadmapHeader from "../../../../components/pages/roadmap-page/RoadmapHeader";

import { AddFeedbackLink } from "../../shared/Button.stories";

export default {
    title: "App/Pages/Roadmap/RoadmapHeader",
    component: RoadmapHeader,
}

const Template = (args) => <RoadmapHeader {...args} />

export const Default = Template.bind({});

Default.args = {
    sharedProps: {
        toggleIsEditing: () => { }
    }
}

Default.play = AddFeedbackLink.play;