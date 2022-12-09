function RoadmapInfoCategory({ category, quantity, imgPath }) {
    return ( 
        <li className="roadmap-info__category" aria-atomic="true">
            <div className="roadmap-info__detail-container">
                <div className="roadmap-info__img-container">
                    <img src={ `${imgPath}` } alt="" className="roadmap-info__img" aria-hidden="true" />
                </div>
           
                <p className="roadmap-info__category-name">
                    { category }
                </p>
            </div>

            <div className="roadmap-info__quantity-container">
                <p className="roadmap-info__category-quantity" aria-live="polite">
                    { quantity }
                </p>                
            </div>
        </li>
    );
}

export default RoadmapInfoCategory;