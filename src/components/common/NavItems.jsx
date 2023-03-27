import React from 'react';
import { Link } from "react-router-dom";

function NavItems() {
    return (
        <nav className="m-nav">
            <ul>
                <li>
                    <Link to="/home-three" >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" >
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/service" >
                        Services
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio" >
                        Portfolio
                    </Link>
                </li>
                
                <li>
                    <Link to="/contact" >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavItems;