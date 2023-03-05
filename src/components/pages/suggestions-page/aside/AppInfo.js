import { PropTypes } from "prop-types";
import React, { useState } from 'react';

function AppInfo({ isMobileScreen, showHideSideMenu }) {
    const [shouldShowHamburgerButton, setShouldShowHamburgerButton] = useState(true);

    function toggleSideMenu() {
        setShouldShowHamburgerButton(!shouldShowHamburgerButton);

        showHideSideMenu(shouldShowHamburgerButton);
    }

    return ( 
        <section className="app-info">
            <div className="app-info__content container">
                <div className="app-info__container">
                    <h1 className="app-info__title">
                        Frontend Mentor
                    </h1>
                    
                    <p className="app-info__sub-heading">
                        Feedback Board
                    </p>
                </div>

                {
                    isMobileScreen &&

                    <button 
                        className="app-info__hamburger-button button" 
                        aria-label="Open menu"
                        onClick={ () => toggleSideMenu() }
                    >
                        {
                            shouldShowHamburgerButton ?
                            
                            <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-testid="hamburger-button">
                                <g fill="#FFF" fillRule="evenodd"><path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z"/></g>
                            </svg>

                            :

                            <svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-testid="close-menu-button">
                                <path d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z" fill="#FFF" fillRule="evenodd"/>
                            </svg>
                        }
                    </button>
                }
            </div>
        </section>
    );
}

AppInfo.propTypes = { 
    isMobileScreen: PropTypes.bool,
    showHideSideMenu: PropTypes.func 
}

export default AppInfo;