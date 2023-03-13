import { useState } from 'react';

function useToggle() {
    const [isComponentShowing, setIsComponentShowing] = useState(false);

    function toggleComponent(shouldShowComponent) {
        shouldShowComponent 
            ? setIsComponentShowing(true) 
            : setIsComponentShowing(false);

    }

    return { shouldShowComponent: isComponentShowing, toggleComponent: toggleComponent };
}

export default useToggle;