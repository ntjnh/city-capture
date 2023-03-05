export default function Filter() {
    return (
        <div className="Filter">
            <div className="container">
                <div className="row">
                    <div className="col-4 filter-info">
                        <p>Currently showing: <span id="current">All</span></p>
                    </div>

                    <div className="col-8">
                        <button className="filter-button" id="filter-button">Filter</button>
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
