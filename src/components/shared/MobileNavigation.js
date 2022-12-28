import { PropTypes } from "prop-types";

function MobileNavigation({ 
    isMobileScreen,
    showHideSideMenu,
    showTagFeedbackItems,
    feedbackItems  
}) {
    return (  
        <>
            <AppInfo 
                isMobileScreen={ isMobileScreen } 
                showHideSideMenu={ showHideSideMenu }
            />
            
            <MobileSideMenu 
                getActiveTag={ showTagFeedbackItems }
                feedbackItems={ feedbackItems } 
            />
        </>    
    );
}

MobileNavigation.propTypes = {
    isMobileScreen: PropTypes.bool,
    showHideSideMenu: PropTypes.func,
    showTagFeedbackItems: PropTypes.func,
    feedbackItems: PropTypes.arrayOf(PropTypes.object)
}

export default MobileNavigation;