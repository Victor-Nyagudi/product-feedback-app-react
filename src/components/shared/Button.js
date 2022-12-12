function Button({ text, className, icon, type = 'button' }) {
    return ( 
        <button 
            type={ `${type}` }
            className={ className ? `${className} button button--main` : 'button--add-feedback button button--main' }
        >
            { icon }
            { text }
        </button>
    );
}

export default Button;