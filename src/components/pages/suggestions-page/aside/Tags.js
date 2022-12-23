import React, { useState } from 'react';
import { PropTypes } from "prop-types";

import Tag from './Tag';

function Tags({ getActiveTag }) {
    const [tags, setTags] = useState([
        { name: 'All', isSelected: true },
        { name: 'UI', isSelected: false },
        { name: 'UX', isSelected: false },
        { name: 'Enhancement', isSelected: false },
        { name: 'Bug', isSelected: false },
        { name: 'Feature', isSelected: false }
    ]);

    function changeActiveTag(clickedTagIndex) {
        const updatedTags = tags.map((tag, index) => 
            {
                if (index === clickedTagIndex) 
                    return tag = { name: tag.name, isSelected: true };

                else 
                    return tag = { name: tag.name, isSelected: false };
            }
        )

        getActiveTag(updatedTags.filter(tag => tag.isSelected === true)[0].name)
        
        setTags(updatedTags);
    }

    return ( 
        <section className="tags-container">
            <h2 className="screen-reader-only">
                Suggestions tags
            </h2>

            <ul className="tags">
                {
                    tags.map((tag, index) => 
                        <Tag 
                            key={ index }
                            tagName={ tag.name } 
                            isSelected={ tag.isSelected } 
                            index={ index }
                            setActive={ changeActiveTag }
                        />
                    )
                }
            </ul>
        </section>
     );
}

Tags.propTypes = { getActiveTag: PropTypes.func.isRequired }

export default Tags;