import './App.scss';

import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import Form from './components/Form/Form';
import Navbar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import MostPopular from './components/MostPopular/MostPopular';

const App = (props) => {
    return (
        <div>
            <Form />
            <Navbar routePath={props.route} />
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/most-popular" exact component={MostPopular} />
                <Redirect from="/" to="/home" />
            </Switch>
            {/* footer ce ici ovde */}
            {console.log(window.location.href)}
            {console.log(window.location.href.slice(21))}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        route: state.route
    }
}

export default connect(mapStateToProps, null)(App);
