import AppInfo from "./AppInfo";
import RoadmapInfo from "./RoadmapInfo";
import Tags from "./Tags";

function DesktopAside() {
    return ( 
        <aside className="suggestions__aside">
            <AppInfo />
            <Tags />
            <RoadmapInfo />
        </aside>
    );
}

export default DesktopAside;