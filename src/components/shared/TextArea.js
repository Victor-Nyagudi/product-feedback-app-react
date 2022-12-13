function TextArea({ name, id, value, placeholder = '', handleOnChange }) {
    return ( 
        <textarea 
            className='add-edit-feedback__textarea'
            name={ name } 
            id={ id } 
            cols="30" 
            rows="10"
            value={ value }
            placeholder={ placeholder }
            onChange={ e => handleOnChange(e.target.value) }
        />
    );
}

export default TextArea;