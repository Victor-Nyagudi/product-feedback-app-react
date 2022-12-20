import React, { useState } from 'react';
import { PropTypes } from "prop-types";

import Button from "../../shared/Button";
import TextArea from "../../shared/TextArea";

function CommentReplyForm({ shouldShow, toggleCommentReplyForm }) {
    const [textAreaValue, setTextAreaValue] = useState('');

    function handleChange(value) {
        setTextAreaValue(value);

        console.log(textAreaValue);
    }

    function handleSubmit() {
        console.log('Form submitted successfully.');
    }

    return ( 
        <div className={ shouldShow ? "comment__reply-form-container" : "comment__reply-form-container--hidden" }>
            <form className="comment__reply-form" onSubmit={ handleSubmit }>
                <div className="comment__reply-form-textarea-container">
                    <TextArea 
                        isRequired={ true }
                        name={ 'comment-reply' }
                        id={ 'comment-reply' }
                        placeholder={ 'Write a reply' }
                        handleOnChange={ handleChange }
                    />
                </div>

                <div className="comment__reply-form-button-container">
                    <Button 
                        text={ 'Post Reply' }
                        className={ 'button--add-feedback' }
                        type={ 'submit' }
                    />
                </div>
            </form>
        </div>
    );
}

CommentReplyForm.propTypes = {
    shouldShow: PropTypes.bool,
    toggleCommentReplyForm: PropTypes.func
}

export default CommentReplyForm;