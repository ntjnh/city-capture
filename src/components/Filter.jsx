export default function Filter() {
    function toggleOptions() {
        const options = document.getElementsByClassName("continent-menu")[0]

        // If neither class is there, add slide-in otherwise toggle one or the other
        if (!options.classList.contains("slide-out") && !options.classList.contains("slide-in")) {
            options.classList.add("slide-in")
        } else if (options.classList.contains("slide-out")) {
            options.classList.remove("slide-out")
            options.classList.add("slide-in")
        } else {
            options.classList.remove("slide-in")
            options.classList.add("slide-out")
        }
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
                            <li><a className="active" id="all" href="#">All</a></li>
                            <li><a id="africa" href="#">Africa</a></li>
                            <li><a id="asia" href="#">Asia</a></li>
                            <li><a id="australasia" href="#">Australasia</a></li>
                            <li><a id="europe" href="#">Europe</a></li>
                            <li><a id="n-america" href="#">North America</a></li>
                            <li><a id="s-america" href="#">South America</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
