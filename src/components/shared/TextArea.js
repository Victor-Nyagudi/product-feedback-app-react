function TextArea({ name, id, value, placeholder = '', handleOnChange }) {
    return ( 
        <textarea 
            className='textarea'
            name={ name } 
            id={ id } 
            value={ value }
            placeholder={ placeholder }
            onChange={ e => handleOnChange(e.target.value) }
        />
    );
}

export default TextArea;