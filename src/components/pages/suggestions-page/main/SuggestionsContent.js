import SuggestionsHeader from "./SuggestionsHeader";
import SuggestionsMain from "./SuggestionsMain";

function SuggestionsContent() {
    return ( 
        <div className="suggestions__content">
            <SuggestionsHeader totalSuggestions={ 0 } />
            <SuggestionsMain />
        </div>
    );
}

export default SuggestionsContent;