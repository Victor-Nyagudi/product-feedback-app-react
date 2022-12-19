import { PropTypes } from "prop-types";

function Tag({ tagName, isSelected }) {
    return ( 
        <li className={ isSelected ? "tags__tag tag--active" : "tags__tag" }>
            <button className="tags__tag-button button">
                { tagName }
            </button>
        </li>
    );
}

Tag.defaultProps = { isSelected: false }

Tag.propTypes = {
    tagName: PropTypes.string.isRequired,
    isSelected: PropTypes.bool
}

export default Tag;