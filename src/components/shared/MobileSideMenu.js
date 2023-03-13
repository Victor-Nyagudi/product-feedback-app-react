import { PropTypes } from "prop-types";
import RoadmapInfo from "../pages/suggestions-page/aside/RoadmapInfo";
import Tags from "../pages/suggestions-page/aside/Tags";

function MobileSideMenu({ 
    getActiveTag, 
    feedbackItems, 
    mobileSideMenuOpen 
}) {
    return ( 
        <div 
            className={ mobileSideMenuOpen ? "mobile-side-menu" : "mobile-side-menu--hidden" }
            data-testid="mobile-side-menu"
        >
            <Tags getActiveTag={ getActiveTag } />
            <RoadmapInfo feedbackItems={ feedbackItems } />
        </div>
    );
}

MobileSideMenu.propTypes = {
    getActiveTag: PropTypes.func,
    feedbackItems: PropTypes.arrayOf(PropTypes.object),
    mobileSideMenuOpen: PropTypes.bool
};

export default MobileSideMenu;