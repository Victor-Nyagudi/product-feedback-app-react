import Button from "../../../shared/Button";

function SuggestionsEmpty() {
    return (
        <section className="suggestions__empty">
            <div className="suggestions__empty-img-container">
                <img src="" alt="" className="suggestions__empty-img" aria-hidden="true" />
            </div>

            <h2 className="suggestions__empty-title">
                There is no feedback yet
            </h2>

            <p className="suggestions__empty-message">
                Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
            </p>

            <div className="suggestions__empty-button-container">
                <Button text={ 'Add Feedback' } className={ 'button--add-feedback' } />
            </div>
        </section>
    );
}

export default SuggestionsEmpty;