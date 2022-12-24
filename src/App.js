import './css/main.css';

/*
  * Adding curly braces like so to the import statement throws an error
  * import { productRequests } from "./data.json"
  * Read more here: https://stackoverflow.com/questions/64993118/error-should-not-import-the-named-export-version-imported-as-version
*/
import productRequests from "./data.json";

import React, { useState, useEffect } from 'react';
import { Routes, Route  } from "react-router-dom";

import SuggestionsPage from './components/pages/suggestions-page/SuggestionsPage';
import AddEditFeedbackPage from './components/pages/add-edit-feedback-page/AddEditFeedbackPage';
import FeedbackDetailPage from './components/pages/feedback-detail-page/FeedbackDetailPage';
import RoadMapPage from './components/pages/roadmap-page/RoadmapPage';

function App() {
  const mobileLayoutUpperBound = 600;
  
  // #region states and useEffects for resizing browser window

  /*
    * This is a special breakpoint just for the RoadmapPage so 
    * that the navbar can still show up to 700px screen width.
    * 820px is too big, and 600px would hide it too soon
  */
  const roadmapPageUpperBound = 700;

  const [isMobileScreen, setIsMobileScreen] = useState(window.outerWidth < mobileLayoutUpperBound);
  const [isSmallerThan700px, setIsSmallerThan700px] = useState(window.outerWidth < roadmapPageUpperBound);
  
  /* 
    ? Listening for resize event for styling purposes. 
    ? This way, the page is re-rendered as I change the browser size using
    ? Chrome developer tools to see at what point the layout starts to break.
    ! Without this, the page isn't re-rendered while adjusting screen size.
  */ 
  useEffect(() => {
    window.addEventListener('resize', showMobileLayout);

    return () => window.removeEventListener('resize', showMobileLayout);
  }, [isMobileScreen]);

  useEffect(() => {
    window.addEventListener('resize', showRoadmapPageNavbar);
    
    return () => window.removeEventListener('resize', showRoadmapPageNavbar);
  }, [isSmallerThan700px]);
  

  function showRoadmapPageNavbar() {
    setIsSmallerThan700px(window.outerWidth < roadmapPageUpperBound);
  }

  function showMobileLayout() {
    setIsMobileScreen(window.outerWidth < mobileLayoutUpperBound);
  }

  // #endregion

  const [feedbackItems, setFeedbackItems] = useState([]);
  const [feedbackItemDetailToShow, setFeedbackItemDetailToShow] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setFeedbackItems(productRequests.productRequests);

    console.log(feedbackItems);
  }, [feedbackItems]);
  

  // * This is similar to a GET/{id} request

  function showFeedbackItemDetail(feedbackItemId) {
    const feedbackItemFromDb = productRequests.productRequests.find(items => items.id === feedbackItemId);

    if (feedbackItemFromDb) {
      setFeedbackItemDetailToShow(feedbackItemFromDb);
    }

    else
      console.warn('Feedback item not found');
  }

  function toggleIsEditing(shouldShow) {
    if (shouldShow) {
      
      setIsEditing(true);
    }

    else
      setIsEditing(false);
  }


  const sharedProps = {
    isMobileScreen,
    isSmallerThan700px,
    feedbackItems,
    feedbackItemDetailToShow,
    isEditing,
    toggleIsEditing
  }

  return (
    <>
      <Routes>
        <Route 
          index 
          element={ <SuggestionsPage sharedProps={ sharedProps } getSelectedFeedbackItemId={ showFeedbackItemDetail } /> }
        />
        
        <Route 
          path={ isEditing ? '/edit-feedback' : '/add-feedback' } 
          element={ <AddEditFeedbackPage sharedProps={ sharedProps } /> } 
        />

        <Route 
          path='/feedback-detail'
          element={ <FeedbackDetailPage sharedProps={ sharedProps } toggleEditPage={ sharedProps.toggleIsEditing } /> }
        />

        <Route 
          path='roadmap'
          element={ <RoadMapPage sharedProps={ sharedProps } /> }
        />
      </Routes>
    </>
  );
}

export default App;
