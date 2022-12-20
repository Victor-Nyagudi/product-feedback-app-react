import DropdownMenuItem from "./DropdownMenuItem";

/*
    ? This dropdown menu determines the text of the button following the "Sort by"
    ? of SuggestionsPage and what goes into the input fields in 
    ? AddEditFeedbackPage that require a dropdown menu
*/
function DropdownMenu() {
    return (
        <ul className="dropdown-menu">
            <DropdownMenuItem 
                isSelected={ true } 
                buttonText={ 'Most Upvotes' }
            />
            
            <DropdownMenuItem buttonText={ 'Least Upvotes' } />
            
            <DropdownMenuItem buttonText={ 'Most Comments' } />
            
            <DropdownMenuItem buttonText={ 'Least Comments' } />
        </ul>
    );
}

export default DropdownMenu;