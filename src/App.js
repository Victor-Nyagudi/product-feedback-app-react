import SuggestionsPage from './components/pages/suggestions-page/SuggestionsPage';
import './css/main.css';
import React, { useState, useEffect } from 'react';
import AddEditFeedbackPage from './components/pages/add-edit-feedback-page/AddEditFeedbackPage';
import FeedbackDetailPage from './components/pages/feedback-detail-page/FeedbackDetailPage';
import RoadMapPage from './components/pages/roadmap-page/RoadmapPage';


/*
  TODO: isTabletScreen might not be necessary.
  TODO: Consider removing it and its functions if no longer needed
*/ 

function App() {
  const mobileLayoutUpperBound = 600;
  const tabletLayoutUpperBound = 820;

  /*
    * This is a special breakpoint just for the RoadmapPage so 
    * that the navbar can still show up to 700px screen width.
    * 820px is too big, and 600px would hide it too soon
  */
  const roadmapPageUpperBound = 700;

  const [isMobileScreen, setIsMobileScreen] = useState(window.outerWidth < mobileLayoutUpperBound);
  const [isTabletScreen, setIsTabletScreen] = 
      useState(window.outerWidth > mobileLayoutUpperBound && window.outerWidth < tabletLayoutUpperBound);
  
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

  /* 
    * The behavior is interesting at the 600 and 820 breakpoint.
    * Log 'isTabletScreen' to the console to see it. Works fine though.
  */
  useEffect(() => {
    window.addEventListener('resize', showTabletLayout);

    return () => window.addEventListener('resize', showTabletLayout);
  }, [isTabletScreen]);

  useEffect(() => {
    window.addEventListener('resize', showRoadmapPageNavbar);
    
    return () => window.removeEventListener('resize', showRoadmapPageNavbar);
  }, [isSmallerThan700px]);
  

  function showRoadmapPageNavbar() {
    setIsSmallerThan700px(window.outerWidth < roadmapPageUpperBound);
  }

  function showTabletLayout() {
    setIsTabletScreen(window.outerWidth > mobileLayoutUpperBound && window.outerWidth < tabletLayoutUpperBound);
  }

  function showMobileLayout() {
    setIsMobileScreen(window.outerWidth < mobileLayoutUpperBound);
  }

  const sharedProps = {
    isMobileScreen,
    isSmallerThan700px
  }

  return (
    <>
      {/* <SuggestionsPage sharedProps={ sharedProps } /> */}
      {/* <AddEditFeedbackPage sharedProps={ sharedProps } /> */}
      {/* <FeedbackDetailPage sharedProps={ sharedProps } /> */}
      <RoadMapPage sharedProps={ sharedProps } />
    </>
  );
}

export default App;
