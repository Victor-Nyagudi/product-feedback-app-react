function Button({ text, className }) {
    return ( 
        <button className={ className ? `${className} btn btn--main` : 'button--add-feedback btn btn--main' }>
            <img src="" alt="" className="button__img" aria-hidden="true" />
            { text }
        </button>
    );
}

export default Button;