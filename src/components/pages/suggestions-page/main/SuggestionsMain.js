import SuggestionsEmpty from "./SuggestionsEmpty";

function SuggestionsMain() {
    return ( 
        <main className="suggestions__main">
            <div className="suggestions__main-content container">
                <SuggestionsEmpty />
            </div>
        </main>
    );
}

export default SuggestionsMain;