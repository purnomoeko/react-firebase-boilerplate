import React from 'react';
import { Link } from 'react-router-dom';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
    }

    componentWillMount() {
        document.body.className = 'login';
    }

    componentWillUnmount() {
        document.body.className = '';
    }

    submit() {
        const { password, username } = this.state;
    }


    render() {
        return (
            <div>
                <a className="hiddenanchor" id="signup">signup</a>
                <a className="hiddenanchor" id="signin">signin</a>

                <div className="login_wrapper">
                    <div className="animate form login_form">
                        <section className="login_content">
                            <form>
                                <h1>Login Form</h1>
                                <div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Username"
                                        required=""
                                        onChange={e => this.setState({ username: e.target.value })}
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
                                    <button className="btn btn-default submit" onClick={this.submit}>Log in</button>
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

export default Login;
