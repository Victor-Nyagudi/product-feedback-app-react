import AppInfo from "./aside/AppInfo";
import DesktopAside from "./aside/DesktopAside";
import SuggestionsContent from "./main/SuggestionsContent";

function SuggestionsPage() {
    return ( 
        <div className="suggestions container">
            {/* Mobile laayout */}
            <AppInfo />

            {/* 
                Render on desktop/tablets
                <DesktopAside /> 
            */}

            <SuggestionsContent />
        </div>
    );
}

export default SuggestionsPage;