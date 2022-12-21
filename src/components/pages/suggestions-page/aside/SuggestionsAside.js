import { PropTypes } from "prop-types";

import AppInfo from "./AppInfo";
import RoadmapInfo from "./RoadmapInfo";
import Tags from "./Tags";

function SuggestionsAside({ feedbackItems }) {
    return ( 
        <aside className="suggestions__aside">
            <AppInfo />
            <Tags />
            <RoadmapInfo feedbackItems={ feedbackItems }/>
        </aside>
    );
}

SuggestionsAside.propTypes = { feedbackItems: PropTypes.arrayOf(PropTypes.object) }

export default SuggestionsAside;