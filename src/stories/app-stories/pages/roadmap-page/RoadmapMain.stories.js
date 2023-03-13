import React from "react";

import RoadmapMain from "../../../../components/pages/roadmap-page/RoadmapMain";

import { HasBadgeLink } from "../../shared/FeedbackItem.stories";

export default {
    title: "App/Pages/Roadmap/RoadmapMain",
    component: RoadmapMain,
    args: {
        feedbackItems: [
            {
                "id": 6,
                "title": "Preview images not loading",
                "category": "Bug",
                "upvotes": 3,
                "status": "Suggestion",
                "description": "Challenge preview images are missing when you apply a filter.",
                "comments": []
            },
            {
                "id": 7,
                "title": "More comprehensive reports",
                "category": "Feature",
                "upvotes": 124,
                "status": "Planned",
                "description": "It would be great to see a more detailed breakdown of solutions.",
                "comments": [
                    {
                        "id": 10,
                        "content": "This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.",
                        "user": {
                            "image": "./assets/user-images/image-victoria.jpg",
                            "name": "Victoria Mejia",
                            "username": "arlen_the_marlin"
                        },
                        "replies": []
                    },
                    {
                        "id": 11,
                        "content": "Yeah, this would be really good. I'd love to see deeper insights into my code!",
                        "user": {
                            "image": "./assets/user-images/image-jackson.jpg",
                            "name": "Jackson Barker",
                            "username": "countryspirit"
                        },
                        "replies": []
                    },
                    {
                        "id": 3,
                        "content": "Agreed. So much more can be learned from knowing exactly where we went wrong versus where we went right. ",
                        "user": {
                            "name": "Zena Kelley",
                            "username": "velvetround",
                            "image": "./assets/user-images/image-zena.jpg"
                        },
                        "replies": []
                    }
                ]
            },
            {
                "id": 8,
                "title": "Learning paths",
                "description": "Sequenced projects for different goals to help people improve. Everyone learns at a different pace.",
                "category": "Feature",
                "comments": [
                    {
                        "id": 12,
                        "content": "Having a path through the challenges that I could follow would be brilliant! Sometimes I'm not sure which challenge would be the best next step to take. So this would help me navigate through them!",
                        "user": {
                            "image": "./assets/user-images/image-george.jpg",
                            "name": "George Partridge",
                            "username": "soccerviewer8"
                        },
                        "replies": []
                    }
                ],
                "status": "Planned",
                "upvotes": 28
            },
            {
                "id": 9,
                "title": "One-click portfolio generation",
                "category": "Feature",
                "upvotes": 62,
                "status": "In Progress",
                "description": "Add ability to create professional looking portfolio from profile.",
                "comments": [
                    {
                        "id": 13,
                        "content": "I haven't built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!",
                        "user": {
                            "image": "./assets/user-images/image-ryan.jpg",
                            "name": "Ryan Welles",
                            "username": "voyager.344"
                        },
                        "replies": [
                            {
                                "id": 1,
                                "content": "It would save me so much time.",
                                "replyingTo": "voyager.344",
                                "user": {
                                    "image": "./assets/user-images/image-zena.jpg",
                                    "name": "Zena Kelley",
                                    "username": "velvetround"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    argTypes: {
        getSelectedFeedbackItemId: { action: "getSelectedFeedbackItemId" },
        updateFeedbackItem: { action: "updateFeedbackItem" }
    },
    includeStories: /^[A-Z]/
}

const Template = (args) => <RoadmapMain {...args} />;

export const SmallMobile = Template.bind({});
export const Desktop = Template.bind({});

export const feedbackItems = [
    {
        "id": 6,
        "title": "Preview images not loading",
        "category": "Bug",
        "upvotes": 3,
        "status": "Suggestion",
        "description": "Challenge preview images are missing when you apply a filter.",
        "comments": []
    },
    {
        "id": 7,
        "title": "More comprehensive reports",
        "category": "Feature",
        "upvotes": 124,
        "status": "Planned",
        "description": "It would be great to see a more detailed breakdown of solutions.",
        "comments": [
            {
                "id": 10,
                "content": "This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.",
                "user": {
                    "image": "./assets/user-images/image-victoria.jpg",
                    "name": "Victoria Mejia",
                    "username": "arlen_the_marlin"
                },
                "replies": []
            },
            {
                "id": 11,
                "content": "Yeah, this would be really good. I'd love to see deeper insights into my code!",
                "user": {
                    "image": "./assets/user-images/image-jackson.jpg",
                    "name": "Jackson Barker",
                    "username": "countryspirit"
                },
                "replies": []
            },
            {
                "id": 3,
                "content": "Agreed. So much more can be learned from knowing exactly where we went wrong versus where we went right. ",
                "user": {
                    "name": "Zena Kelley",
                    "username": "velvetround",
                    "image": "./assets/user-images/image-zena.jpg"
                },
                "replies": []
            }
        ]
    },
    {
        "id": 8,
        "title": "Learning paths",
        "description": "Sequenced projects for different goals to help people improve. Everyone learns at a different pace.",
        "category": "Feature",
        "comments": [
            {
                "id": 12,
                "content": "Having a path through the challenges that I could follow would be brilliant! Sometimes I'm not sure which challenge would be the best next step to take. So this would help me navigate through them!",
                "user": {
                    "image": "./assets/user-images/image-george.jpg",
                    "name": "George Partridge",
                    "username": "soccerviewer8"
                },
                "replies": []
            }
        ],
        "status": "Planned",
        "upvotes": 28
    },
    {
        "id": 9,
        "title": "One-click portfolio generation",
        "category": "Feature",
        "upvotes": 62,
        "status": "In Progress",
        "description": "Add ability to create professional looking portfolio from profile.",
        "comments": [
            {
                "id": 13,
                "content": "I haven't built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!",
                "user": {
                    "image": "./assets/user-images/image-ryan.jpg",
                    "name": "Ryan Welles",
                    "username": "voyager.344"
                },
                "replies": [
                    {
                        "id": 1,
                        "content": "It would save me so much time.",
                        "replyingTo": "voyager.344",
                        "user": {
                            "image": "./assets/user-images/image-zena.jpg",
                            "name": "Zena Kelley",
                            "username": "velvetround"
                        }
                    }
                ]
            }
        ]
    }
]

SmallMobile.args = {
    activeMobileNavItem: { text: "Planned" }, 
    isSmallerThan700px: true, 
}

SmallMobile.play = HasBadgeLink.play;
Desktop.play = HasBadgeLink.play;