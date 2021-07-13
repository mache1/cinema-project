import './NavBar.scss';
import logo from '../../assets/logo.jpg';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { useEffect } from 'react';

const NavBar = (props) => {
    const navItemActiveHandler = (e) => {
        document.querySelectorAll('.nav__item').forEach(i => {
            i.classList.remove('active');
        });

        e.target.parentElement.classList.add('active');
        if (e.target === document.getElementById('home')) {
            props.home();
        }

        else if (e.target === document.getElementById('most-popular')) {
            props.mostPopular();
        }
    }

    useEffect(() => {
        document.querySelectorAll('.nav__item').forEach(i => {
            i.classList.remove('active');
        });

        if (props.routePath === '/' || props.routePath === '/home') {
            document.getElementById('home').parentElement.classList.add('active');
        }

        else if (props.routePath === '/most-popular') {
            document.getElementById('most-popular').parentElement.classList.add('active');
        }
    });

    const linkMouseOverHandler = (e) => {
        if (e.target.nodeName === "A")
            e.target.parentElement.classList.add('hovered');
    }

    const linkMouseOutHandler = (e) => {
        if (e.target.nodeName === "A")
            e.target.parentElement.classList.remove('hovered');
    }

    const loginHandler = () => {
        document.querySelector('.form').style.display = "inline-block";

        // ovde bih mogao da postavljam atribute forme (posebno za login i register)
        // npr setAttribute('nes', 'nes')
    }

    const registerHandler = () => {
        document.querySelector('.form').style.display = "inline-block";
    }

    return (
        <div className="nav section">
            <a href="/home">
                <img className="nav__logo logo" src={logo} alt="logo" /></a>
            <ul>
                <li className="nav__item">
                    <NavLink
                        id="home"
                        onMouseOver={linkMouseOverHandler}
                        onMouseOut={linkMouseOutHandler}
                        onClick={navItemActiveHandler}
                        to="/home">Home</NavLink>
                </li>

                <li className="nav__item">
                    <NavLink
                        id="most-popular"
                        onMouseOver={linkMouseOverHandler}
                        onMouseOut={linkMouseOutHandler}
                        onClick={navItemActiveHandler}
                        to="most-popular">Most Popular</NavLink>
                </li>

                <li className="nav__item"><button onClick={loginHandler} className="nav__button">Login</button></li>
                <li className="nav__item"><button onClick={registerHandler} className="nav__button">Register</button></li>
            </ul>
            <i className="fas fa-bars"></i>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        route: state.route
    }
}

const mapDispatchToProps = dispatch => {
    return {
        home: () => dispatch({ type: 'HOME' }),
        mostPopular: () => dispatch({ type: 'MOST_POPULAR' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);