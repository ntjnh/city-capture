import Lightbox from 'yet-another-react-lightbox'
import { MasonryPhotoAlbum } from 'react-photo-album'
import 'react-photo-album/masonry.css'
import { useEffect, useState } from 'react'

const key = import.meta.env.VITE_API_KEY

export default function Masonry({ photos }) {
    const endpoint = `https://api.unsplash.com/collections/XECQO9bpobo/photos?per_page=25&client_id=${key}`
    
    const [collection, setCollection] = useState([])
    const [index, setIndex] = useState(-1)

    useEffect(() => {
        async function fetchCollection() {
            const response = await fetch(endpoint)

            if (response.ok) {
                const data = await response.json()
                const photos = data.map(p => ({
                    src: p.urls.full,
                    alt: p.description,
                    blur: p.blur_hash,
                    width: p.width,
                    height: p.height,
                    srcSet: [
                        {
                            src: p.urls.regular,
                            width: 1080,
                            height: (p.height / p.width) * 1080
                        },
                        {
                            src: p.urls.small,
                            width: 400,
                            height: (p.height / p.width) * 400
                        },
                        {
                            src: p.urls.thumb,
                            width: 200,
                            height: (p.height / p.width) * 200
                        }
                    ]
                }))

                setCollection(photos)
            } else {
                throw new Error(`Response status: ${response.status}`)
            }
        }
        fetchCollection()
    }, [])

    return (
        <>
            <MasonryPhotoAlbum
                photos={photos}
                onClick={({ index: current }) => setIndex(current)}
            />

            <Lightbox
                index={index}
                slides={collection}
                open={index >= 0}
                close={() => setIndex(-1)}
            />
        </>
    )
}
