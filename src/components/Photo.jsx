export default function Photo(props) {
    return (
        <div className={`grid-item col-6 col-md-4 col-lg-3 ${props.continent}`}>
            <div className="photo">
                <a href={`https://source.unsplash.com/${props.id}`} data-lightbox="cities" data-title={props.city}>
                    <img src={`https://source.unsplash.com/${props.id}`} alt={props.city} />
                </a>
                <span className="caption">{props.city}</span>
            </div>
        </div>
    )
}
