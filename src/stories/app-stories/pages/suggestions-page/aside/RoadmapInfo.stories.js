import React from "react";

import RoadmapInfo from "../../../../../components/pages/suggestions-page/aside/RoadmapInfo";

import * as MobileNavigationStories from "../../../shared/MobileNavigation.stories";

export default {
    title: "App/Pages/Suggestions/Aside/RoadmapInfo",
    component: RoadmapInfo,
    args: {
        feedbackItems: [
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
    }
}

const Template = (args) => <RoadmapInfo {...args} />;

export const Desktop = Template.bind({});
export const MobileSideMenu = Template.bind({});

Desktop.decorators = [
    (Story) => (
        <aside className="suggestions__aside">
            <Story />
        </aside>
    )
];

MobileSideMenu.decorators = [
    (Story) => (
        <div className="mobile-side-menu">
            <Story />
        </div>
    )
];

Desktop.play = MobileNavigationStories.Default.play;
MobileSideMenu.play = MobileNavigationStories.Default.play;