import { PropTypes } from "prop-types";

import AppInfo from "./AppInfo";
import RoadmapInfo from "./RoadmapInfo";
import Tags from "./Tags";

function SuggestionsAside({ feedbackItems, getActiveTag }) {
    return ( 
        <aside className="suggestions__aside">
            <AppInfo />
            <Tags getActiveTag={ getActiveTag } />
            <RoadmapInfo feedbackItems={ feedbackItems }/>
        </aside>
    );
}

SuggestionsAside.propTypes = { 
    feedbackItems: PropTypes.arrayOf(PropTypes.object),
    getActiveTag: PropTypes.func.isRequired 
}

export default SuggestionsAside;