import SuggestionsPage from './components/pages/suggestions-page/SuggestionsPage';
import './css/main.css';
import React, { useState, useEffect } from 'react';
import AddEditFeedbackPage from './components/pages/add-edit-feedback-page/AddEditFeedbackPage';


function App() {
  const mobileLayoutUpperBound = 600;
  const tabletLayoutUpperBound = 820;

  const [isMobileScreen, setIsMobileScreen] = useState(window.outerWidth < mobileLayoutUpperBound);
  const [isTabletScreen, setIsTabletScreen] = 
      useState(window.outerWidth > mobileLayoutUpperBound && window.outerWidth < tabletLayoutUpperBound);
  
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
  

  function showTabletLayout() {
    setIsTabletScreen(window.outerWidth > mobileLayoutUpperBound && window.outerWidth < tabletLayoutUpperBound);
  }

  function showMobileLayout() {
    setIsMobileScreen(window.outerWidth < mobileLayoutUpperBound);
  }

  const sharedProps = {
    isMobileScreen
  }

  return (
    <>
      {/* <SuggestionsPage sharedProps={ sharedProps } /> */}
      {/* <AddEditFeedbackPage sharedProps={ sharedProps } /> */}
    </>
  );
}

export default App;
