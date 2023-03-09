import photoData from '../photoData'
import Photo from './Photo'

export default function Gallery() {
    const photos = photoData.map(photo => {
        return (
            <Photo 
                id={photo.id}
                city={photo.city}
                continent={photo.continent}
                photographer={photo.photographer.name}
            />
        )
    })

    return (
        <div className="gallery container">
            <div className="row gx-2 grid">
                <div className="grid-sizer col-6 col-md-4 col-lg-3"></div>
                {...photos}
            </div>
        </div>
    )
}
