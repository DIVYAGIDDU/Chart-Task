
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">WEB-PAGE WITH CHART!</Link>
        <div className="ml-auto">
            <ul className="navbar-nav">
            <li className="nav-list"><Link className="nav-link" to="/"></Link></li>
            <li className="nav-list"><Link className="nav-link" to="/barchart">Bar-Chart</Link></li>
                <li className="nav-list"><Link className="nav-link" to="/linechart">Line-Chart</Link></li>
                <li className="nav-list"><Link className="nav-link" to="/piechart">Pie-Chart</Link></li>
            </ul>
        </div>
    </nav>
}

export default Navbar
