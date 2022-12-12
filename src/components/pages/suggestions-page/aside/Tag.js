function Tag({ tagName, isSelected }) {
    return ( 
        <li className={ isSelected ? "tags__tag tag--active" : "tags__tag" }>
            <button className="tags__tag-button button">
                { tagName }
            </button>
        </li>
    );
}

export default Tag;