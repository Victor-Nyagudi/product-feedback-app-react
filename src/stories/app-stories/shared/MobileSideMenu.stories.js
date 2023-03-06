import React from "react";

import MobileSideMenu from "../../../components/shared/MobileSideMenu";

import * as MobileNavigationStories from "./MobileNavigation.stories";

export default {
    title: "App/Shared/MobileSideMenu",
    component: MobileSideMenu,
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
        ],
        mobileSideMenuOpen: true
    },
    argTypes: {
        getActiveTag: { action: "getActiveTag" }
    }
}

const Template = (args) => <MobileSideMenu {...args} />

export const Default = Template.bind({});

Default.play = MobileNavigationStories.Default.play;