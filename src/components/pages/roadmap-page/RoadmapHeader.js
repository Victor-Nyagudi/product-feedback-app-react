import { PropTypes } from "prop-types";

import GoBackButton from "../../shared/GoBackButton"
import Button from "../../shared/Button"

function RoadmapHeader({ sharedProps }) {
    return ( 
        <header className="roadmap__header">
            <div className="roadmap__header-content container">
                <div className="roadmap__header-container">
                    <div className="roadmap__header-link-container">
                        <GoBackButton iconColor={ '#CDD2EE' } />
                    </div>
                    
                    <h1 className="roadmap__header-title">
                        Roadmap
                    </h1>
                </div>
                
                <div className="roadmap__header-button-container">
                    <Button 
                        text={ 'Add Feedback' } 
                        className={ 'button--add-feedback' } 
                        icon={ <svg width="9" height="9" xmlns="http://www.w3.org/2000/svg" className="feedback-button-svg"><text transform="translate(-24 -20)" fill="#F2F4FE" fillRule="evenodd" fontFamily="Jost-Bold, Jost" fontSize="14" fontWeight="bold"><tspan x="24" y="27.5">+</tspan></text></svg> }
                        isLink={ true }
                        toggleEditPage={ sharedProps.toggleIsEditing }
                    />
                </div>
            </div>
        </header>
    );
}

RoadmapHeader.propTypes = { sharedProps: PropTypes.object };

export default RoadmapHeader;