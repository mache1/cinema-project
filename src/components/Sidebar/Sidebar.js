import { useEffect } from 'react';
import './Sidebar.scss';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Sidebar = (props) => {
    useEffect(() => {
        if (props.showSidebar === true) {
            document.querySelector('.sidebar').classList.add('active');
        }

        else if (props.showSidebar === false) {
            document.querySelector('.sidebar').classList.remove('active');
        }
    });

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <NavLink
                        id="sidebar-home"
                        onClick={props.toggleSidebar}
                        to="/home">Home</NavLink>
                </li>

                <li>
                    <NavLink
                        id="sidebar-most-popular"
                        onClick={props.toggleSidebar}
                        to="most-popular">Most Popular</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;