import React from "react";
import { BrowserRouter } from "react-router-dom";

import GoBackButton from "../../../components/shared/GoBackButton";

export default {
    title: "App/Shared/GoBackButton",
    component: GoBackButton,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        )
    ]
}

const Template = (args) => <GoBackButton {...args} />

export const Default = Template.bind({});