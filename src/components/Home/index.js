import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/';

const Home = props => (
    <div className="container body">
        <div className="main_container">
            <div className="col-md-3 left_col">
                <div className="left_col scroll-view">
                    <div className="navbar nav_title" style={{ border: 0 }}>
                        <a href="index.html" className="site_title"><i className="fa fa-paw" /> <span>{props.title}</span></a>
                    </div>

                    <div className="clearfix" />
                    <div className="profile clearfix">
                        <div className="profile_pic">
                            <img src="https://colorlib.com/polygon/gentelella/images/img.jpg" alt="..." className="img-circle profile_img" />
                        </div>
                        <div className="profile_info">
                            <span>Welcome </span>
                            <h2>{props.user ? props.user.uid : 'John Doe'}</h2>
                        </div>
                    </div>
                    <div className="">
                        <button onClick={props.logoutUser} className="btn btn-default btn-block">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


Home.propTypes = {
    title: PropTypes.string,
    logoutUser: PropTypes.func.isRequired,
};
Home.defaultProps = {
    title: 'Hello World',
};


const mapDispatchToProps = dispatch => (
    bindActionCreators({
        logoutUser,
    }, dispatch)
);

const mapStateToProps = state => ({
    user: state.user,
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);

