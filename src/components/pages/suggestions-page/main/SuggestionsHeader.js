function SuggestionsHeader({ totalSuggestions }) {
    return ( 
        <header className="suggestions__header">
            <div className="suggestions__header-info">
                <div className="suggestions__header-container">
                    <img src="" alt="" className="suggestions__header-icon" aria-hidden="true" />

                    <p className="suggestions__header-data">
                        <span className="suggestions__header-quantity">{ totalSuggestions }</span>Suggestions                        
                    </p>
                </div>
                
                <div className="suggestions__header-container">
                    <p className="suggestions__header-sort">
                        Sort by: Most Upvotes
                    </p>
                </div>    
            </div>

            <div className="suggestions__header-button-container">

            </div>
        </header>
     );
}

export default SuggestionsHeader;