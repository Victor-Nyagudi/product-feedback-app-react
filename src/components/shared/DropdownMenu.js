import DropdownMenuItem from "./DropdownMenuItem";

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