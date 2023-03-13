import React from "react";

import SuggestionsEmpty from "../../../../../components/pages/suggestions-page/main/SuggestionsEmpty";

export default {
    title: "App/Pages/Suggestions/Main/SuggestionsEmpty",
    component: SuggestionsEmpty,
    args: {
        sharedProps: {
            toggleIsEditing: () => {}
        }
    },
    decorators: [
        (Story) => (
            <div className="suggestions">
                <div className="suggestions__content">
                    <main className="suggestions__main">
                        <div className="suggestions__main-content container">
                            <Story />   
                        </div>
                    </main>
                </div>
            </div>
        )
    ]
}

const Template = (args) => <SuggestionsEmpty {...args} />;

export const Default = Template.bind({});

