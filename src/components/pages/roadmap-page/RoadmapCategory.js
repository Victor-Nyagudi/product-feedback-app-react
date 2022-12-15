function RoadmapCategory({ title, explanation }) {
    return ( 
        <section className="roadmap__category">
            <div className="roadmap__category-header">
                <h2 className="roadmap__category-title">
                    { title }
                </h2>
                
                <p className="roadmap__category-explanation">
                    { explanation }
                </p>
            </div>

            <ul className="roadmap__category-items">
                
            </ul>
        </section>
    );
}

export default RoadmapCategory;