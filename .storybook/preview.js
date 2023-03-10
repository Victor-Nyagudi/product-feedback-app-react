import "../src/css/main.css";
import { BrowserRouter } from "react-router-dom";

import CurrentUserContext from "../src/components/shared/currentUserContext";
import { FeedbackItemToShowContext, UpdateFeedbackItemContext } from "../src/components/shared/currentUserContext";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  /*
    * Follow this link to browse all the axe accessibility rules.
    * https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
  */
  a11y: {
    config: {
      rules: [
        {
          id: "color-contrast",
          selector: "button--main"
        }
      ]
    }
  }
}

const currentUser = {
  "image": "./assets/user-images/image-zena.jpg",
  "name": "Zena Kelley",
  "username": "velvetround"
}

const dbFeedbackItemToShow = {
  "id": 1,
  "title": "Add tags for solutions",
  "category": "Enhancement",
  "upvotes": 112,
  "status": "Suggestion",
  "description": "Easier to search for solutions based on a specific stack.",
  "comments": [
    {
      "id": 1,
      "content": "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
      "user": {
        "image": "./assets/user-images/image-suzanne.jpg",
        "name": "Suzanne Chang",
        "username": "upbeat1811"
      },
      "replies": []
    },
    {
      "id": 2,
      "content": "Please use fun, color-coded labels to easily identify them at a glance",
      "user": {
        "image": "./assets/user-images/image-thomas.jpg",
        "name": "Thomas Hood",
        "username": "brawnybrave"
      },
      "replies": []
    }
  ]
}

const updateDbFeedbackItem = () => {};

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <CurrentUserContext.Provider value={ currentUser }>
        <FeedbackItemToShowContext.Provider value={ dbFeedbackItemToShow } >
          <UpdateFeedbackItemContext.Provider value={ updateDbFeedbackItem } >
            <Story />
          </UpdateFeedbackItemContext.Provider>
        </FeedbackItemToShowContext.Provider>
      </CurrentUserContext.Provider>
    </BrowserRouter>
  )
];