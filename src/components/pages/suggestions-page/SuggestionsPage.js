import AppInfo from "./aside/AppInfo";
import SuggestionsAside from "./aside/SuggestionsAside";
import SuggestionsContent from "./main/SuggestionsContent";

function SuggestionsPage({ sharedProps }) {
    return ( 
        <div className="suggestions">
            {/* Mobile laayout */}
            <AppInfo />

            {/* 
                Render on desktop/tablets
                <DesktopAside /> 
            */}

            <SuggestionsContent isMobileScreen={ sharedProps.isMobileScreen } />
        </div>
    );
}

export default SuggestionsPage;