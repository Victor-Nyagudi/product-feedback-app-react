import hamburgerIcon from "../../../../assets/shared/mobile/icon-hamburger.svg";

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

                    <button className="app-info__hamburger-button button">
                        <img src={ hamburgerIcon } alt="" className="app-info__hamburger-img" aria-hidden="true" />
                    </button>
                }
            </div>
        </section>
    );
}

export default AppInfo;