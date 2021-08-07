import './Sidebar.scss';

import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
    return (
        <div className="sidebar" style={{
            transform: props.showSidebar ? 'translateY(0)' : 'translateY(-500px)'
        }}>
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