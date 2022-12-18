function FeedbackItem({ showBadge = false, badgeText, badgeColor }) {
    // TODO Remember to make the feedback message keyboard focusable
    
    return ( 
        <section className="feedback-item"> 
            {
                showBadge && 

                <div className="feedback-item__badge">
                    <div className={`feedback-item__badge-icon feedback-item__badge-icon--${badgeColor}`}></div>
                    
                    <p className="feedback-item__badge-text">
                        { badgeText }
                    </p>
                </div>
            }
            
            <div className="feedback-content">
                <div className="feedback-content__text">
                    <a className="feedback-content__title">
                        Add a dark theme option
                    </a>

                    <p className="feedback-content__message">
                        It would help people with light sensitivities and who prefer dark mode.
                    </p>
                </div>

                <div className="feedback-content__upvotes">
                    <button type="button" className="feedback-content__upvotes-button button">
                        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6l4-4 4 4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/>
                        </svg>

                        <span className="feedback-content__upvotes-total">
                            99
                        </span>
                    </button>
                </div>
                
                <div className="feedback-content__comments">
                    <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fillRule="nonzero"/>
                    </svg>

                    <p className="feedback-content__comments-total">
                        4
                    </p>
                </div>
                
                <div className="feedback-content__tag-container">
                    <div className="feedback-content__tag">
                        <p className="feedback-content__tag-text">
                            Feature
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeedbackItem;