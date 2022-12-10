function Button({ text, className, icon }) {
    return ( 
        <button className={ className ? `${className} button button--main` : 'button--add-feedback button button--main' }>
            { icon }
            { text }
        </button>
    );
}

export default Button;