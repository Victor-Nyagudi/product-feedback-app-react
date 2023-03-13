import React, { useState } from 'react';
import { PropTypes } from "prop-types";

import DropdownMenuItem from "./DropdownMenuItem";

/*
    ? This dropdown menu determines the text of the button following the "Sort by"
    ? of SuggestionsPage and what goes into the input fields in 
    ? AddEditFeedbackPage that require a dropdown menu
*/
function DropdownMenu({ 
    dropdownItems, 
    updateText, 
    toggleDropdownMenu,
    shouldShow 
}) {
    const [items, setItems] = useState(dropdownItems);

    /*
        * Getting this functionality of toggling the active button took longer than
        * needed to get done, but I'm glad to get it done
    */  
    function changeSelectedButton(index) {
        const updatedDropdownItems = items.map((item, i) =>
            {
                if (i === index)
                    return ({ buttonText: item.buttonText, isSelected: true });

                else
                    return ({ buttonText: item.buttonText, isSelected: false });
            } 
        );
            
        updateText(updatedDropdownItems.filter(item => item.isSelected === true)[0].buttonText);
        
        setItems(updatedDropdownItems);
    }

    return (
        <ul 
            className={shouldShow ? "dropdown-menu" : "dropdown-menu--hidden" } 
            /*
                ? Since this list will get a "list-style" property set to "none" (because of CSS),
                ? Safari browsers will not recognize it in the accessibility tree,
                ? therefore, the "role" has to be explicitly added to restore list
                ? semantics.  

                ? https://developer.mozilla.org/en-US/docs/Web/CSS/list-style#accessibility_concerns
            */ 
            role="list"
        >
            {
                items.map((item, index) => 
                    <DropdownMenuItem 
                        key={ index }
                        buttonText={ item.buttonText } 
                        isSelected={ item.isSelected }
                        index={ index }
                        setActive={ changeSelectedButton }
                        toggleDropdownMenu={ toggleDropdownMenu }
                    />
                )
            }
        </ul>
    );
}

DropdownMenu.propTypes = { 
    dropdownItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    updateText: PropTypes.func,
    toggleDropdownMenu: PropTypes.func.isRequired,
    shouldShow: PropTypes.bool.isRequired
};

export default DropdownMenu;