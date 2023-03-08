import React from "react";

import MobileNavigation from "../../../components/shared/MobileNavigation";

import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
    title: "App/Shared/MobileNavigation",
    component: MobileNavigation,
    args: {
        isMobileScreen: true,
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
        showHideSideMenu: { action: "showHideSideMenu" },
        getActiveTag: { action: "getActiveTag" }
    },
    decorators: [
        (Story) => (
            <div className="suggestions--scroll-lock">
                <Story />
            </div>
        )
    ]
}

const Template = (args) => <MobileNavigation {...args} />;

/*
    ? This looks weird in the storybook because of the 
    ? lack of content inside the SuggestionsPage.
    ? The content would normally stretch out the page
    ? so that when the absolute positioning is applied to 
    ? the mobile side menu, it moves 81px down 
    ? (the exact size of the purple gradient banner) to 
    ? align with the bottom of the banner.
*/
export const Default = Template.bind({});

Default.play = async (objectWithCanvasElement) => {
    const { canvasElement } = objectWithCanvasElement;

    const canvas = within(canvasElement);

    const viewLink = canvas.getByRole("link", { name: "View" });

    await userEvent.click(viewLink);

    await expect(viewLink).toHaveAttribute("href", "/roadmap");
}