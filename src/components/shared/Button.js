import { PropTypes } from "prop-types";
import { Link, useNavigate } from "react-router-dom";

function Button({ 
    text, 
    className, 
    icon, 
    type,
    isLink 
}) {
    const navigate = useNavigate();
    
    let linkDestination;

    if (className === 'button--add-feedback' || className === 'button--edit-feedback')
        linkDestination = '/add-edit-feedback'; 

    else 
        linkDestination = '/';

    function handleClick(target) {
        if (target.classList.contains('button--cancel'))
            navigate(-1);

        return;
    }

    return ( 
        /*
            ? These are the options for each button className

            * Purple - 'button--add-feedback'
            * Blue - 'button--edit-feedback'
            * Black - 'button--cancel'
            
            ? I understand I should've given them more meaningful names
            ? like 'button--purple', but I missed the fact that the text
            ? inside similarly-colored buttons could differ depending
            ? on the page in the design. The current names were based on 
            ? the text inside each button. This tentatively something
            ? that could be changed in the future.
        */
       <>
        {
            isLink ?

            <Link
                to={ linkDestination } 
                className={ className ? `${className} button button--main` : 'button--add-feedback button button--main' }
            >
                { icon }
                { text }
            </Link>

            :

            <button 
                type={ `${type}` }
                className={ className ? `${className} button button--main` : 'button--add-feedback button button--main' }
                onClick={ e => handleClick(e.target) }
            >
                { icon }
                { text }
            </button>
        }
       </>
    );
}

Button.defaultProps = { 
    type: 'button', 
    isLink: false
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.node,
    isLink: PropTypes.bool
}

export default Button;