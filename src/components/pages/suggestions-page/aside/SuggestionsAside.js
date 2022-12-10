import AppInfo from "./AppInfo";
import RoadmapInfo from "./RoadmapInfo";
import Tags from "./Tags";

function SuggestionsAside() {
    return ( 
        <aside className="suggestions__aside">
            <AppInfo />
            <Tags />
            <RoadmapInfo />
        </aside>
    );
}

export default SuggestionsAside;