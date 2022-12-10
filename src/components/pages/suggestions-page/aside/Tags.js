import Tag from './Tag';

function Tags() {
    return ( 
        <section className="tags-container">
            <h2 className="screen-reader-only">
                Suggestions tags
            </h2>

            <ul className="tags">
                <Tag tagName={ 'All' } isSelected={ true } />
                <Tag tagName={ 'UI' } />
                <Tag tagName={ 'UX' } />
                <Tag tagName={ 'Enhancement' } />
                <Tag tagName={ 'Bug' } />
                <Tag tagName={ 'Feature' } />
            </ul>
        </section>
     );
}

export default Tags;