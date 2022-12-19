import { PropTypes } from "prop-types";

function AppInfo({ isMobileScreen }) {
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

                    <button className="app-info__hamburger-button button" aria-label="Open menu">
                        <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <g fill="#FFF" fillRule="evenodd"><path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z"/></g>
                        </svg>
                    </button>
                }
            </div>
        </section>
    );
}

AppInfo.propTypes = { isMobileScreen: PropTypes.bool }

export default AppInfo;