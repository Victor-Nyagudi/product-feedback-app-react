import React from "react";

import AppInfo from "../../../../../components/pages/suggestions-page/aside/AppInfo";

export default {
    title: "App/Pages/Suggestions/Aside/AppInfo",
    component: AppInfo,
    decorators: [
        (Story) => (
            <div className="suggestions">
                <Story />
            </div>
        )
    ]
}

const Template = (args) => <AppInfo {...args} />;

export const Desktop = Template.bind({});
export const Mobile = Template.bind({});

Desktop.args = {
    isMobileScreen: false
};

Mobile.args = {
    isMobileScreen: true
}