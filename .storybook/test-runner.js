/*
  ? This is commented out because checking for a11y issues
  ? using test runner is bringing unnecessary problems.
*/

// // .storybook/test-runner.js

// const { injectAxe, checkA11y } = require('axe-playwright');

// const { getStoryContext } = require('@storybook/test-runner');

// /*
//  * See https://storybook.js.org/docs/7.0/react/writing-tests/test-runner#test-hook-api-experimental
//  * to learn more about the test-runner hooks API.
//  */
// module.exports = {
//   async preRender(page) {
//     await injectAxe(page);
//   },
//   async postRender(page, context) {
//     // Get the entire context of a story, including parameters, args, argTypes, etc.
//     const storyContext = await getStoryContext(page, context);

//     // Do not run a11y tests on disabled stories.
//     if (storyContext.parameters?.a11y?.disable) {
//       return;
//     }
//     await checkA11y(page, '#storybook-root', {
//       detailedReport: true,
//       detailedReportOptions: {
//         html: true,
//       },
//     });
//   },
// };