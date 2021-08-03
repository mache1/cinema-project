import { useEffect } from 'react';
import './NavBar.scss';
import logo from '../../assets/logo.jpg';

import { useLocation, NavLink } from 'react-router-dom';

const NavBar = (props) => {
    const location = useLocation();

    useEffect(() => {
        document.querySelectorAll('.nav__item').forEach(i => i.classList.remove('active'));

        if (location.pathname === '/' || location.pathname === '/home')
            document.getElementById('home').parentElement.classList.add('active');

        else if (location.pathname === '/most-popular')
            document.getElementById('most-popular').parentElement.classList.add('active');
    });

    const linkMouseOverHandler = (e) => {
        if (e.target.nodeName === "A")
            e.target.parentElement.classList.add('hovered');
    };

    const linkMouseOutHandler = (e) => {
        if (e.target.nodeName === "A")
            e.target.parentElement.classList.remove('hovered');
    };

    return (
        <div className="nav">
            <a href="/home">
                <img className="nav__logo logo" src={logo} alt="logo" />
            </a>

            <ul>
                <li className="nav__item active">
                    <NavLink
                        id="home"
                        onMouseOver={linkMouseOverHandler}
                        onMouseOut={linkMouseOutHandler}
                        to="/home">Home</NavLink>
                </li>

                <li className="nav__item">
                    <NavLink
                        id="most-popular"
                        onMouseOver={linkMouseOverHandler}
                        onMouseOut={linkMouseOutHandler}
                        to="most-popular">Most Popular</NavLink>
                </li>
            </ul>

            <i className="fas fa-bars" onClick={props.toggleSidebar}></i>
        </div>
    );
}

export default NavBar;