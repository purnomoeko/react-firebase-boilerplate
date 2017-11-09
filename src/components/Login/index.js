import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser, fetchUser, loginWithProvider, getUserInfo } from '../../actions/';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            error: null,
        };
        this.submit = this.submit.bind(this);
    }

    componentWillMount() {
        document.body.className = 'login';
    }

    componentWillUnmount() {
        document.body.className = 'nav-md';
    }

    submit(e) {
        e.preventDefault();
        this.setState({ error: null });
        const { password, email } = this.state;
        this.props.loginUser({ password, email })
            .then(res => console.log(res))
            .catch((error) => {
                this.setState({ error });
            });
    }


    render() {
        if (this.props.user !== null) return <Redirect to="/" />;
        return (
            <div>
                <a className="hiddenanchor" id="signup">signup</a>
                <a className="hiddenanchor" id="signin">signin</a>

                <div className="login_wrapper">
                    <div className="animate form login_form">
                        <section className="login_content">
                            <form onSubmit={this.submit}>
                                <h1>Login Form</h1>
                                <div className="alert alert-danger" style={{ display: this.state.error === null ? 'none' : 'block' }}>
                                    {this.state.error ? this.state.error.errorMessage : ''}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        required=""
                                        onChange={e => this.setState({ email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        required=""
                                        onChange={e => this.setState({ password: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <button className="btn btn-default submit" type="submit" onClick={this.submit}>Log in</button>
                                    <Link to="/reset-pwd">Lost your password?</Link>
                                </div>

                                <div className="clearfix" />

                                <div className="separator">
                                    <p className="change_link">New to site?
                                        <a href="#signup" className="to_register"> Create Account </a>
                                    </p>
                                    <div className="clearfix" />
                                    <br />
                                    <div>
                                        <h1><i className="fa fa-paw" /> React Firebase Boilerplate!</h1>
                                        <p>&copy; 2017 Eko Purnomo, using gantella Bootstrap 3 template.</p>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        loginUser,
        fetchUser,
        loginWithProvider,
        getUserInfo,
    }, dispatch)
);

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
