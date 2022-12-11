import AppInfo from "./aside/AppInfo";
import SuggestionsAside from "./aside/SuggestionsAside";
import SuggestionsContent from "./main/SuggestionsContent";

function SuggestionsPage({ sharedProps }) {
    return ( 
        <div className="suggestions">
            {
                sharedProps.isMobileScreen 

                ? <AppInfo isMobileScreen={ sharedProps.isMobileScreen } />

                : <SuggestionsAside /> 
            }

            <SuggestionsContent isMobileScreen={ sharedProps.isMobileScreen } />
        </div>
    );
}

export default SuggestionsPage;