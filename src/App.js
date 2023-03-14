import './css/main.css';

/*
  * Adding curly braces like so to the import statement throws an error
  * import { productRequests } from "./data.json"
  * Read more here: https://stackoverflow.com/questions/64993118/error-should-not-import-the-named-export-version-imported-as-version
*/
import productRequests from "./data.json";

import React, { useState, useEffect } from 'react';
import { Routes, Route  } from "react-router-dom";

import CurrentUserContext from './components/shared/currentUserContext';
import { FeedbackItemToShowContext, UpdateFeedbackItemContext } from './components/shared/currentUserContext';

import SuggestionsPage from './components/pages/suggestions-page/SuggestionsPage';
import AddEditFeedbackPage from './components/pages/add-edit-feedback-page/AddEditFeedbackPage';
import FeedbackDetailPage from './components/pages/feedback-detail-page/FeedbackDetailPage';
import RoadMapPage from './components/pages/roadmap-page/RoadmapPage';
import useToggle from './hooks/useToggle';

function App() {
  const mobileLayoutUpperBound = 600;
  
  const toggler = useToggle();

  const isEditing = toggler.shouldShowComponent;
  const toggleIsEditing = toggler.toggleComponent;
  
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

  const [dbFeedbackItems, setDbFeedbackItems] = useState([]);
  const [dbFeedbackItemToShow, setDbFeedbackItemToShow] = useState(null);
  
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setFeedbackItems(productRequests.productRequests);
  }, [feedbackItems]);

  // * This is similar to a GET/{id} request

  function showFeedbackItemDetail(feedbackItemId) {
    const feedbackItemFromJson = productRequests.productRequests.find(items => items.id === feedbackItemId);
    const feedbackItemFromDb = dbFeedbackItems.find(items => items.id === feedbackItemId);

    if (feedbackItemFromDb)
      setDbFeedbackItemToShow(feedbackItemFromDb);

    if (feedbackItemFromJson) {
      setFeedbackItemDetailToShow(feedbackItemFromJson);
    }

    else
      console.warn('Feedback item not found');
  }


  //#region API requests

  //#region GET 
  async function fetchDbFeedbackItems() {
    const response = await fetch('http://localhost:5000/productRequests');
    const data = await response.json();

    return data;
  }

  useEffect(() => {
    async function getDbFeedbackItems() {
      const dbFeedbackItems = await fetchDbFeedbackItems();

      setDbFeedbackItems(dbFeedbackItems);
    }
    
    getDbFeedbackItems();
  }, []);

  async function fetchCurrentUser() {
    const response = await fetch('http://localhost:5000/currentUser');

    const data = await response.json();

    return data;
  }

  useEffect(() => {
    async function getCurrentUser() {
      const dbCurrentUser = await fetchCurrentUser();

      setCurrentUser(dbCurrentUser);
    }

    getCurrentUser();
  }, []);
  //#endregion

  //#region GET/{id}
  async function fetchDbFeedbackItem(id) {
    const response = await fetch(`http://localhost:5000/productRequests/${id}`);
    const data = await response.json();

    return data;
  }

  async function getDbFeedbackItem(id) {
    const dbFeedbackItem = await fetchDbFeedbackItem(id);

    setDbFeedbackItemToShow(dbFeedbackItem);
  } 
  //#endregion

  //#region POST
  async function addDbFeedbackItem(feedbackItem) {
    const response = await fetch('http://localhost:5000/productRequests/', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(feedbackItem)
    })
    .then(response => {
      if(!response.ok)
        throw Error(response.statusText);

      return response;
    })
    .then(response => response) // * <- Forgetting this line cost me a lot of time
    .catch(error => console.error(error));

    const data = await response.json();

    setDbFeedbackItems([...dbFeedbackItems, data]);

    /*
      * Learned the hard way that with fetch() api, you might need
      * multiple '.then()' methods. In this case, the first returns the response,
      * the second returns the fulfilled response which is then assigned to the 'response'
      * variable which you then call the 'json()' method on to get the data.
    */
  }
  //#endregion

  //#region PUT/{id}
  async function updateDbFeedbackItem(id, updatedFeedbackItem) {
    // * Checking if item is in DB before attempting update
    const feedbackItemFromDb = await fetchDbFeedbackItem(id);

    if (feedbackItemFromDb) {
      const feedbackItemToUpdate = { ...updatedFeedbackItem, id: feedbackItemFromDb.id };
  
      const response = await fetch(`http://localhost:5000/productRequests/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(feedbackItemToUpdate)
      });
  
      const data = await response.json();
  
      setDbFeedbackItems(dbFeedbackItems.map(item => item.id === id ? { ...data } : item));
      setDbFeedbackItemToShow(data);
      
      console.log('Feedback item updated');
    }

    else
      console.warn('Feedback item not found. Update failed');
  }
  //#endregion

  //#region DELETE/{id}
  async function deleteDbFeedbackItem(id) {
    // * Checking if item is in DB before attempting delete
    const dbFeedbackItem = await fetchDbFeedbackItem(id);

    if (dbFeedbackItem) {
      await fetch(`http://localhost:5000/productRequests/${id}`, {
        method: 'DELETE'
      });
      
      console.log('Feedback item deleted from db');
      setDbFeedbackItems(dbFeedbackItems.filter(item => item.id !== id));
    }

    else
      console.warn('Delete failed. Feedback item not found in db');
  }
  //#endregion

  //#endregion

  const sharedProps = {
    isMobileScreen,
    isEditing,
    isSmallerThan700px,

    currentUser,
    feedbackItems,
    feedbackItemDetailToShow,
    dbFeedbackItems,
    dbFeedbackItemToShow,

    addDbFeedbackItem,
    updateDbFeedbackItem,
    getDbFeedbackItem,
    deleteDbFeedbackItem,

    toggleIsEditing,
    showFeedbackItemDetail
  }

  return (
    <>
      <Routes>
        <Route 
          index 
          element={ <SuggestionsPage sharedProps={ sharedProps } /> }
        />
        
        <Route 
          path={ isEditing ? '/edit-feedback' : '/add-feedback' } 
          element={ <AddEditFeedbackPage sharedProps={ sharedProps } /> } 
        />

        <Route 
          path='/feedback-detail'
          element={ 
            <CurrentUserContext.Provider value={ currentUser }>
              <FeedbackItemToShowContext.Provider value={ dbFeedbackItemToShow } >
                <UpdateFeedbackItemContext.Provider value={ updateDbFeedbackItem } >
                  <FeedbackDetailPage sharedProps={ sharedProps } toggleEditPage={ sharedProps.toggleIsEditing } /> 
                </UpdateFeedbackItemContext.Provider>
              </FeedbackItemToShowContext.Provider>
            </CurrentUserContext.Provider>
          }
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