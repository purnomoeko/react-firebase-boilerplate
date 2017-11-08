import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'gentelella/build/css/custom.min.css';
import propTypes from 'prop-types';
import Login from './Login';

const Home = () => <h1>Home</h1>;
const PrivateRoute = ({ component, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            <Redirect
                to={{
                    pathname: '/login',
                    state: { from: props.location },
                }}
            />
        )}
    />
);

PrivateRoute.propTypes = {
    component: propTypes.func.isRequired,
}

const AllRoutes = () => (
    <Router>
        <div>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route
                    render={props => (
                        <Redirect
                            to={{
                                pathname: '/404.html',
                                state: { from: props.location },
                            }}
                        />
                    )}
                />
            </Switch>
        </div>
    </Router>
);

export default AllRoutes;
