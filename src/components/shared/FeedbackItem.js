function FeedbackItem() {
    // TODO Remember to make the feedback message keyboard focusable
    
    return ( 
        <section className="feedback-item">
            <div className="feedback-item__text">
                <h2 className="feedback-item__title">
                    Add a dark theme option
                </h2>

                <p className="feedback-item__message">
                    It would help people with light sensitivities and who prefer dark mode.
                </p>
            </div>

            <div className="feedback-item__upvotes">
                <div className="feedback-item__img-container">
                    <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6l4-4 4 4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/>
                    </svg>
                </div>

                <p className="feedback-item__upvotes-total">
                    99
                </p>
            </div>
            
            <div className="feedback-item__comments">
                <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fillRule="nonzero"/>
                </svg>

                 <p className="feedback-item__comments-total">
                    4
                 </p>
            </div>
            
            <div className="feedback-item__tag-container">
                <div className="feedback-item__tag">
                    <p className="feedback-item__tag-text">
                        Feature
                    </p>
                </div>
            </div>
        </section>
    );
}

export default FeedbackItem;