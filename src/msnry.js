import Masonry from 'masonry-layout'
import imagesloaded from 'imagesloaded'

export default function reloadMsnry() {
    const grid = document.querySelector('.grid')

    if (grid) {
        imagesloaded(grid, () => {
            const msnry = new Masonry('.grid', {
                itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
                columnWidth: '.grid-sizer',
                percentPosition: true,
                transitionDuration: '2.5s'
            })
        })
    }
}
