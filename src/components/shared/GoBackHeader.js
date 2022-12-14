import Button from "./Button";

function GoBackHeader({ hasSecondaryButton, secButtonText, secButtonClassName, secButtonIcon }) {
    return ( 
        <div className={ hasSecondaryButton ? "go-back-header--secondary" : "go-back-header"}>
            <div className="go-back__primary-container">
                <button className="go-back__primary-button button">
                    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L2 5l4-4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/>
                    </svg>

                    <span className="go-back__primary-button-text">
                        Go Back
                    </span>
                </button>
            </div>
            
            {
                hasSecondaryButton &&

                <div className="go-back__secondary-container">
                    <Button 
                        text={ secButtonText }
                        icon={ secButtonIcon }
                        className={ secButtonClassName }
                    />
                </div>
            }
        </div>
    );
}

export default GoBackHeader;