export default function Filter() {
    return (
        <div className="Filter">
          <div>
            <p>Currently showing: <span id="current">All</span></p>
            <button id="filter-button">Filter</button>
          </div>

          <ul className="options">
            <li><a id="all" href="#">All</a></li>
            <li><a id="africa" href="#">Africa</a></li>
            <li><a id="asia" href="#">Asia</a></li>
            <li><a id="australasia" href="#">Australasia</a></li>
            <li><a id="europe" href="#">Europe</a></li>
            <li><a id="n-america" href="#">North America</a></li>
            <li><a id="s-america" href="#">South America</a></li>
          </ul>
        </div>
    )
}