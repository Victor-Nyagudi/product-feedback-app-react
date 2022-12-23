import { PropTypes } from "prop-types";

function Tag({ tagName, isSelected, setActive, index }) {
    return ( 
        <li className={ isSelected ? "tags__tag tag--active" : "tags__tag" }>
            <button 
                className="tags__tag-button button"
                onClick={ () => setActive(index) }
            >
                { tagName }
            </button>
        </li>
    );
}

Tag.defaultProps = { isSelected: false }

Tag.propTypes = {
    tagName: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    setActive: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}

export default Tag;