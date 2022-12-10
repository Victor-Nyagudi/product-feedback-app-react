function Button({ text, className }) {
    return ( 
        <button className={ className ? `${className}` : 'button--add-feedback' }>
            <img src="" alt="" className="button__img" aria-hidden="true" />
            { text }
        </button>
    );
}

export default Button;