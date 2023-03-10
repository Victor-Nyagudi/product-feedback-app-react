import React from "react";

import AddEditFeedbackMain from "../../../../components/pages/add-edit-feedback-page/AddEditFeedbackMain";

import * as InputStories from "../../shared/Input.stories";

import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
    title: "App/Pages/AddEditFeedback/AddEditFeedbackMain",
    component: AddEditFeedbackMain,
    argTypes: {
        addFeedbackItem: { action: "addFeedbackItem" },
        updateFeedbackItem: { action: "updateFeedbackItem" },
        deleteFeedbackItem: { action: "deleteFeedbackItem" }
    }
}

const Template = (args) => <AddEditFeedbackMain {...args} />;

export const AddFeedback = Template.bind({});
export const EditFeedback = Template.bind({});

const sharedArgs = {
    feedbackItemFromDb: {
        "id": 10,
        "title": "Bookmark challenges",
        "category": "Feature",
        "upvotes": 31,
        "status": "In Progress",
        "description": "Be able to bookmark challenges to take later on.",
        "comments": [
            {
                "id": 14,
                "content": "This would be great! At the moment, I'm just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.",
                "user": {
                    "image": "./assets/user-images/image-suzanne.jpg",
                    "name": "Suzanne Chang",
                    "username": "upbeat1811"
                },
                "replies": []
            }
        ]
    },
    feedbackItems: [
        {
            "id": 11,
            "title": "Animated solution screenshots",
            "category": "Bug",
            "upvotes": 9,
            "status": "In Progress",
            "description": "Screenshots of solutions with animations don’t display correctly.",
            "comments": []
        },
        {
            "id": 12,
            "title": "Add micro-interactions",
            "category": "Enhancement",
            "upvotes": 71,
            "status": "Live",
            "description": "Small animations at specific points can add delight.",
            "comments": [
                {
                    "id": 15,
                    "content": "I'd love to see this! It always makes me so happy to see little details like these on websites.",
                    "user": {
                        "image": "./assets/user-images/image-victoria.jpg",
                        "name": "Victoria Mejia",
                        "username": "arlen_the_marlin"
                    },
                    "replies": [
                        {
                            "id": 1,
                            "content": "Me too! I'd also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!",
                            "replyingTo": "arlen_the_marlin",
                            "user": {
                                "image": "./assets/user-images/image-suzanne.jpg",
                                "name": "Suzanne Chang",
                                "username": "upbeat1811"
                            }
                        },
                        {
                            "id": 2,
                            "content": "Makes for a great user experience too.",
                            "replyingTo": "arlen_the_marlin",
                            "user": {
                                "image": "./assets/user-images/image-zena.jpg",
                                "name": "Zena Kelley",
                                "username": "velvetround"
                            }
                        }
                    ]
                }
            ]
        },
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

AddFeedback.args = {
    isEditing: false,
    ...sharedArgs
}

EditFeedback.args = {
    isEditing: true,
    ...sharedArgs
}

const formValidationInteractions = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const submitButton = canvas.getByRole("button", { name: "Add Feedback" });

    const feedbackTitleInput = canvas.getByLabelText("Add a short, descriptive headline");
    const feedbackDetailInput = canvas.getByLabelText("Include any specific comments on what should be improved, added, etc.");

    await userEvent.type(feedbackTitleInput, "");

    await userEvent.click(submitButton);

    await expect(canvas.getAllByText("Can't be empty")[0]).toBeVisible();

    await userEvent.type(feedbackTitleInput, "Sample Title");
    
    await userEvent.type(feedbackDetailInput, "");

    await userEvent.click(submitButton);

    await expect(canvas.getAllByText("Can't be empty")[2]).toBeVisible();
}

const checkIfFormResets = async (submitButton, input) => {
    await userEvent.click(submitButton);

    await expect(input.feedbackTitleInput).toHaveAttribute("value", "");
    await expect(input.categoryInput).toHaveAttribute("value", "");
    await expect(input.feedbackDetailInput).toHaveTextContent("");
}

AddFeedback.play = async (objectWithCanvasElement) => {
    const { canvasElement }  = objectWithCanvasElement;

    const canvas = within(canvasElement);

    const submitButton = canvas.getByRole("button", { name: "Add Feedback" });

    const feedbackTitleInput = canvas.getByLabelText("Add a short, descriptive headline");
    const categoryInput = canvas.getByLabelText("Choose a category for your feedback");
    const feedbackDetailInput = canvas.getByLabelText("Include any specific comments on what should be improved, added, etc.");   

    const category = "UI";

    await formValidationInteractions(objectWithCanvasElement);

    await userEvent.type(feedbackDetailInput, "Some detail about the feedback.");

    await userEvent.click(submitButton);

    await expect(canvas.getAllByText("Can't be empty")[1]).toBeVisible();


    await InputStories.dropdownMenuInteractions(canvasElement, category, 0);

    await expect(categoryInput).toHaveAttribute("value", category);

    await checkIfFormResets(submitButton, {
        feedbackTitleInput: feedbackTitleInput,
        categoryInput: categoryInput,
        feedbackDetailInput: feedbackDetailInput
    })
}

EditFeedback.play = async (objectWithCanvasElement) => {
    const { canvasElement } = objectWithCanvasElement;

    const canvas = within(canvasElement);

    const submitButton = canvas.getByRole("button", { name: "Add Feedback" });

    const feedbackTitleInput = canvas.getByLabelText("Add a short, descriptive headline");
    const feedbackDetailInput = canvas.getByLabelText("Include any specific comments on what should be improved, added, etc.");
    
    const categoryInput = canvas.getByLabelText("Choose a category for your feedback");
    const statusInput = canvas.getByLabelText("Change feedback state");

    const category = "UX";
    const status = "Planned";

    await userEvent.clear(feedbackTitleInput);

    await userEvent.click(submitButton);

    await expect(canvas.getAllByText("Can't be empty")[0]).toBeVisible();

    await userEvent.type(feedbackTitleInput, "This is a new title");

    await userEvent.clear(feedbackDetailInput);

    await userEvent.click(submitButton);

    await expect(canvas.getAllByText("Can't be empty")[3]).toBeVisible();

    await userEvent.type(feedbackDetailInput, "Some new detail is much appreciated.");


    await InputStories.dropdownMenuInteractions(canvasElement, category, 0);
    
    await InputStories.dropdownMenuInteractions(canvasElement, status, 1);

    await expect(categoryInput).toHaveAttribute("value", category);   
    
    await expect(statusInput).toHaveAttribute("value", status);   

    await userEvent.click(submitButton);

    await checkIfFormResets(submitButton, {
        feedbackTitleInput: feedbackTitleInput,
        feedbackDetailInput: feedbackDetailInput,
        categoryInput: categoryInput
    })
}