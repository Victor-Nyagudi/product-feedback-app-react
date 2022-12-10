import Button from "../../../shared/Button";
import downArrowIcon from "../../../../assets/shared/icon-arrow-down.svg";

function SuggestionsHeader({ totalSuggestions, isMobileScreen }) {
    return ( 
        <header className="suggestions__header">
            <div className="suggestions__header-content container">
                <div className="suggestions__header-info">
                    {
                        !isMobileScreen && 

                        <div className="suggestions__header-container">
                            <img src="" alt="" className="suggestions__header-icon" aria-hidden="true" />

                            <p className="suggestions__header-data">
                                <span className="suggestions__header-quantity">{ totalSuggestions }</span>Suggestions                        
                            </p>
                        </div>
                    }
                    
                    <div className="suggestions__header-container">
                        <p className="suggestions__header-filter">
                            Sort by :
                            <button className="suggestions__header-sort button">
                                <span className="suggestions__header-button-text">Most Upvotes</span>
                                <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1l4 4 4-4" stroke="#FFFFFF" strokeWidth="2" fill="none" fillRule="evenodd"/>
                                </svg>
                            </button>
                        </p>
                    </div>    
                </div>

                <div className="suggestions__header-button-container">
                    <Button 
                        className={ 'button--add-feedback' }
                        icon={ <svg width="9" height="9" xmlns="http://www.w3.org/2000/svg" className="feedback-button-svg"><text transform="translate(-24 -20)" fill="#F2F4FE" fillRule="evenodd" fontFamily="Jost-Bold, Jost" fontSize="14" fontWeight="bold"><tspan x="24" y="27.5">+</tspan></text></svg> } 
                        text={ 'Add Feedback' } 
                    />
                </div>
            </div>
        </header>
     );
}

export default SuggestionsHeader;