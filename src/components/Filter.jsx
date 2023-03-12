import reloadMsnry from '../msnry'

export default function Filter() {
    function toggleOptions() {
        const options = document.getElementsByClassName("continent-menu")[0]

        // If neither class is there, add slide-in otherwise toggle one or the other
        if (!options.classList.contains("slide-out") && !options.classList.contains("slide-in")) {
            options.classList.add("slide-in")
        } else if (options.classList.contains("slide-out")) {
            options.classList.replace("slide-out", "slide-in")
        } else {
            options.classList.replace("slide-in", "slide-out")
        }
    }

    function filterCities(e) {
        e.preventDefault()

        let options = document.querySelectorAll(".options li a");
        [...options].map(option => option.classList.remove("active"));

        // Add active class to the continent that has been clicked
        const clicked = e.target
        clicked.classList.add("active")

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
                        <p>Currently showing: <span id="current">All</span></p>
                    </div>

                    <div className="col-8 bg-white">
                        <button className="filter-button" onClick={toggleOptions}>Filter</button>
                    </div>

                    <div className="col-12 continent-menu">
                        <ul className="options">
                            <li><a className="active" id="all" href="#" onClick={filterCities}>All</a></li>
                            <li><a id="africa" href="#" onClick={filterCities}>Africa</a></li>
                            <li><a id="asia" href="#" onClick={filterCities}>Asia</a></li>
                            <li><a id="australasia" href="#" onClick={filterCities}>Australasia</a></li>
                            <li><a id="europe" href="#" onClick={filterCities}>Europe</a></li>
                            <li><a id="north-america" href="#" onClick={filterCities}>North America</a></li>
                            <li><a id="south-america" href="#" onClick={filterCities}>South America</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
