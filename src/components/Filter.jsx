import { useState } from 'react'
import reloadMsnry from '../msnry'

export default function Filter() {
    const continents = ['All', 'Africa', 'Asia', 'Australasia', 'Europe', 'North America', 'South America']

    const [filterToggleClass, setFilterToggleClass] = useState('')
    const [activeCity, setActiveCity] = useState(continents[0])

    const continentOptions = continents.map((continent, i) => {
        let slug = continent.toLowerCase().replace(' ', '-')

        return (
            <li key={i}>
                <a className={activeCity === continent && 'active'} id={slug} onClick={filterCities}>{continent}</a>
            </li>
        )
    })

    function toggleOptions() {
        // If neither class is there, add slide-in otherwise toggle one or the other
        if (filterToggleClass !== 'slide-out' && filterToggleClass !== 'slide-in') {
            setFilterToggleClass('slide-in')
        } else if (filterToggleClass === 'slide-out') {
            setFilterToggleClass('slide-in')
        } else {
            setFilterToggleClass('slide-out')
        }
    }

    function filterCities(e) {
        e.preventDefault()

        setActiveCity(e.target.textContent)

        const clicked = e.target

        // Get the clicked continent's id 
        const toShow = clicked.getAttribute('id')

        // Get all cities and loop through them
        const cities = document.getElementsByClassName("grid-item");

        [...cities].forEach(city => {
            // Hide all cities not in the selected continent
            !city.classList.contains(toShow) && city.classList.add('d-none')
            
            // Make all cities in selected continent visible again if hidden
            city.classList.contains(toShow) && city.classList.remove('d-none')

            // Change data-lightbox attribute so that lightbox gallery only contains visible cities
            const lightboxTrigger = city.querySelector(".grid-item .photo a")
            city.classList.contains(toShow) && lightboxTrigger.setAttribute('data-lightbox', toShow);
        });

        // Call Masonry again to reinitialise the layout
        reloadMsnry()
    }

    return (
        <div className="Filter">
            <div className="container">
                <div className="row position-relative">
                    <div className="col-4 bg-white filter-info">
                        <p>Currently showing: <span id="current">{activeCity}</span></p>
                    </div>

                    <div className="col-8 bg-white">
                        <button className="filter-button" onClick={toggleOptions}>Filter</button>
                    </div>

                    <div className={`col-12 continent-menu ${filterToggleClass}`}>
                        <ul className="options">
                            {continentOptions}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
