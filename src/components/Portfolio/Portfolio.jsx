import './portfolio.scss'

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li >Web App - <span >Coming Soon</span></li>
                <li >Design - <span >Coming Soon</span></li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/f76.png" alt="" />
                    <h3>F76 Inventory Management app</h3>
                </div>
                <div className="item">
                    <img src="assets/MARVEL.png" alt="" />
                    <h3>Marvel Hero Information app</h3>
                </div>
            </div>
        </div>
    )
}
