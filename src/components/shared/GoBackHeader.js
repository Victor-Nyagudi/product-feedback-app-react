import Button from "./Button";
import { PropTypes } from "prop-types";
import GoBackButton from "./GoBackButton";

function GoBackHeader({ 
    hasSecondaryButton, 
    secButtonText, 
    secButtonClassName, 
    secButtonIcon,
    toggleEditPage 
}) {
    return ( 
        <div className={ hasSecondaryButton ? "go-back-header--secondary" : "go-back-header"}>
            <div className="go-back__primary-container">
                <GoBackButton />
            </div>
            
            {
                hasSecondaryButton &&

                <div className="go-back__secondary-container">
                    <Button 
                        text={ secButtonText }
                        icon={ secButtonIcon }
                        className={ secButtonClassName }
                        isLink={ true }
                        toggleEditPage={ toggleEditPage }
                    />
                </div>
            }
        </div>
    );
}

GoBackHeader.defaultProps = { hasSecondaryButton: false }

GoBackHeader.propTypes = {
    hasSecondaryButton: PropTypes.bool,
    secButtonText: PropTypes.string,
    secButtonClassName: PropTypes.string,
    secButtonIcon: PropTypes.node,
    toggleEditPage: PropTypes.func
}

export default GoBackHeader;