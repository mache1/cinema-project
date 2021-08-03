import { useState } from 'react';
import './App.scss';

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
                <Navbar toggleSidebar={toggleSidebar} />
            </header>
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/most-popular" exact component={MostPopular} />
                <Redirect from="/" to="/home" />
            </Switch>
        </div>
    );
}

export default App;
