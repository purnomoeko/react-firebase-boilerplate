import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'gentelella/build/css/custom.min.css';
import propTypes from 'prop-types';
import Login from './Login';
import Home from './Home';

const CPrivateRoute = props => (
    <Route
        render={() => {
            if (props.currentUser !== null) {
                return <props.component />;
            }
            return (<Redirect to={{
                pathname: '/login',
                state: { from: props.location},
            }}
            />);
        }}
    />
);


CPrivateRoute.propTypes = {
    component: propTypes.func.isRequired,
    location: propTypes.any.isRequired,
};

const privateRouteToProps = state => ({
    currentUser: state.user,
});

const PrivateRoute = connect(privateRouteToProps)(CPrivateRoute);


const AllRoutes = () => (
    <Router>
        <div>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route
                    render={(props) => {
                        window.location = `/404.html?from=${props.location.pathname}`;
                    }}
                />
            </Switch>
        </div>
    </Router>
);

export default AllRoutes;
