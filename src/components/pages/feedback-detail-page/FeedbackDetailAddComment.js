import TextArea from "../../shared/TextArea";

// TODO: Remember to implement handleChange function to handle input change

function FeedbackDetailAddComment() {
    function handleChange(value) {
        console.log('This will handle textarea change event');
        console.log(value);
    }

    return ( 
        <section className="feedback-detail__add-comment">
            <h2 className="add-comment__title">
                Add Comment
            </h2>

            <form className="add-comment__form">
                <TextArea 
                    name={ 'add-feedback-message-comment' }
                    id={ 'add-feedback-message-comment' }
                    placeholder={ 'Type your comment here' }
                    handleOnChange={ handleChange }
                />   

                <div className="add-comment__button-container">
                    <p className="add-comment__character-limit-message">
                        <span className="add-comment__character-limit">250</span> Characters left
                    </p>
                    
                    <button type="submit" className="button button--main button--add-feedback">
                        Post Comment
                    </button>
                </div>
            </form>
        </section>
    );
}

export default FeedbackDetailAddComment;