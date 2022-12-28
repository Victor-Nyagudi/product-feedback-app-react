/*
    * This medium helped in setting up context for function components
    * https://medium.com/@danfyfe/using-react-context-with-functional-components-153cbd9ba214
    
    * React official docs on Context that helps prevent prop drilling the current User
    * https://reactjs.org/docs/context.html#caveats
    * Note the use of camel case in naming this file since it's not a component
*/

import React from 'react';

const CurrentUserContext = React.createContext({});

export const FeedbackItemToShowContext = React.createContext({});

export const UpdateFeedbackItemContext = React.createContext(null);

export default  CurrentUserContext;