import { PropTypes } from "prop-types";

import AppInfo from "../pages/suggestions-page/aside/AppInfo";
import MobileSideMenu from "./MobileSideMenu";

function MobileNavigation({ 
    isMobileScreen,
    showHideSideMenu,
    getActiveTag,
    feedbackItems,
    mobileSideMenuOpen  
}) {
    return (  
        <>
            <AppInfo 
                isMobileScreen={ isMobileScreen } 
                showHideSideMenu={ showHideSideMenu }
            />
            
            <MobileSideMenu 
                getActiveTag={ getActiveTag }
                feedbackItems={ feedbackItems } 
                mobileSideMenuOpen={ mobileSideMenuOpen }
            />
        </>    
    );
}

MobileNavigation.defaultProps = { shouldShowSideMenu: false };

MobileNavigation.propTypes = {
    isMobileScreen: PropTypes.bool,
    showHideSideMenu: PropTypes.func,
    getActiveTag: PropTypes.func,
    feedbackItems: PropTypes.arrayOf(PropTypes.object),
    MobileSideMenuOpen: PropTypes.bool
}

export default MobileNavigation;