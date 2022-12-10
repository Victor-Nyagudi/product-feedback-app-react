function Tag({ tagName, isSelected }) {
    return ( 
        <li className={ isSelected ? "tags__tag suggestions__tag--active" : "tags__tag" }>
            { tagName }
        </li>
    );
}

export default Tag;