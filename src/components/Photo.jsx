import { useEffect, useState } from 'react'
const key = import.meta.env.VITE_API_KEY

export default function Photo(props) {
    const endpoint = `https://api.unsplash.com/photos/${props.id}?client_id=${key}`
    const [photoFull, setPhotoFull] = useState('')
    const [photoThumb, setPhotoThumb] = useState('')

    useEffect(() => {
        async function fetchPhotoData() {
            const response = await fetch(endpoint)

            if (response.ok) {
                const data = await response.json()

                setPhotoFull(data.urls.regular)
                setPhotoThumb(data.urls.small)
            } else {
                throw new Error(`Response status: ${response.status}`)
            }
        }
        fetchPhotoData()
    }, [])

    return (
        <div className={`grid-item col-6 col-md-4 col-lg-3 all ${props.continent}`}>
            <div className="photo">
                <a
                    data-alt={props.city}
                    data-title={`Photo by ${props.photographer}`}
                    href={photoFull}
                >
                    <img src={`${photoThumb}`} alt={`${props.city} photo by ${props.photographer}`} />
                </a>

                <span className="caption">{props.city}</span>
            </div>
        </div>
    )
}
