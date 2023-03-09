export default function Photo(props) {
    return (
        <div className={`grid-item col-6 col-md-4 col-lg-3 ${props.continent}`}>
            <div className="photo">
                <a 
                    data-alt={props.city}
                    data-lightbox="cities" 
                    data-title={`Photo by ${props.photographer}`}
                    href={`https://source.unsplash.com/${props.id}`}
                >
                    <img src={`https://source.unsplash.com/${props.id}`} alt={props.city} />
                </a>

                <span className="caption">{props.city}</span>
            </div>
        </div>
    )
}
