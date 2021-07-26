import { useState } from 'react';
import './App.scss';

import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import Overlay from './components/Overlay/Overlay';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import MostPopular from './components/MostPopular/MostPopular';

const App = (props) => {
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
        <div>
            <Overlay showOverlay={sidebar} toggleSidebar={toggleSidebar} />
            <Sidebar showSidebar={sidebar} toggleSidebar={toggleSidebar} />
            <header>
                <Navbar routePath={props.route} toggleSidebar={toggleSidebar} />
            </header>
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/most-popular" exact component={MostPopular} />
                <Redirect from="/" to="/home" />
            </Switch>
            {/* footer ce ici ovde */}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        route: state.route
    }
}

export default connect(mapStateToProps, null)(App);
