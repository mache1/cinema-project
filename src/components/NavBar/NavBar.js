import { useState, useEffect } from 'react';
import './NavBar.scss';
import logo from '../../assets/logo.jpg';

import { useLocation, NavLink } from 'react-router-dom';

const NavBar = (props) => {
    const [link1, setLink1] = useState(false);
    const [link2, setLink2] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/' || location.pathname === '/home') {
            setLink1(false);
            setLink2(false);
            setLink1(true);
        }

        else if (location.pathname === '/most-popular') {
            setLink1(false);
            setLink2(false);
            setLink2(true);
        }

    }, [setLink1, setLink2, location]);

    const linkMouseOverHandler = (e) => {
        if (e.target.id === "home")
            setLink1(true);
        else if (e.target.id === "most-popular")
            setLink2(true);
    };

    const linkMouseOutHandler = (e) => {
        if (e.target.id === "home" && (location.pathname !== "/" && location.pathname !== "/home"))
            setLink1(false);
        else if (e.target.id === "most-popular" && location.pathname !== "/most-popular")
            setLink2(false);
    };

    return (
        <div className="nav">
            <NavLink to="/home">
                <img className="nav__logo logo" src={logo} alt="logo" />
            </NavLink>

            <ul>
                <li className="nav__item active">
                    <NavLink
                        id="home"
                        onMouseOver={linkMouseOverHandler}
                        onMouseOut={linkMouseOutHandler}
                        style={{
                            borderBottom: link1 ? '4px solid #FE6D00' : 'none'
                        }}
                        to="/home">Home</NavLink>
                </li>

                <li className="nav__item">
                    <NavLink
                        id="most-popular"
                        onMouseOver={linkMouseOverHandler}
                        onMouseOut={linkMouseOutHandler}
                        style={{
                            borderBottom: link2 ? '4px solid #FE6D00' : 'none'
                        }}
                        to="most-popular">Most Popular</NavLink>
                </li>
            </ul>

            <i className="fas fa-bars" onClick={props.toggleSidebar}></i>
        </div>
    );
}

export default NavBar;