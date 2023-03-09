import "../src/css/main.css";
import { BrowserRouter } from "react-router-dom";

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

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  )
];