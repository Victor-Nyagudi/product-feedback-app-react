import React from "react";

import Tag from "../../../../../components/pages/suggestions-page/aside/Tag";

export default {
    title: "App/Pages/Suggestions/Aside/Tag",
    component: Tag,
    args: {
        isSelected: true,
        tagName: "Enhancement",
        index: 1
    },
    argTypes: {
        setActive: { action: "setActive" }
    },
    decorators: [
        (Story) => (
            <div className="mobile-side-menu">
                <ul className="tags">
                    <Story />
                </ul>
            </div>
        )
    ]
}

const Template = (args) => <Tag {...args} />;

export const Selected = Template.bind({});
export const UnSelected = Template.bind({});

UnSelected.args = { isSelected: false }