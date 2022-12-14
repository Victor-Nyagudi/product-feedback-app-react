function Input({ hasIcon = false, id, inputType, inputName, inputValue, handleOnChange }) {
    return (    
        <>
            { 
                !hasIcon ?
                
                <input 
                    className='input'
                    type={ `${inputType}` } 
                    name={ `${inputName}` } 
                    id={ `${id}` } 
                    value={ inputValue }
                    onChange={ e => handleOnChange(e.target.value) }
                />

                :

                <div className="input--icon">
                    <input 
                        className='input'
                        type={ `${inputType}` } 
                        name={ `${inputName}` } 
                        id={ `${id}` } 
                        value={ inputValue }
                        onChange={ e => handleOnChange(e.target.value) }
                    />

                    <button type="button" className="input__dropdown-toggle button">
                        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1l4 4 4-4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/>
                        </svg>
                    </button>
                </div>
            }
        </>
    );
}

export default Input;