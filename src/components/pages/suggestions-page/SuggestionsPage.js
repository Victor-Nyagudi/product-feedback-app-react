import AppInfo from "./aside/AppInfo";
import SuggestionsAside from "./aside/SuggestionsAside";
import SuggestionsContent from "./main/SuggestionsContent";

function SuggestionsPage() {
    return ( 
        <div className="suggestions">
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