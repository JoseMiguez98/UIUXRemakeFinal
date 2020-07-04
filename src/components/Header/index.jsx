import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import { login, logout } from '../../redux/actions';

const SessionLinks = ({ login, logout, logged }) => (
    <div className="session-links-wrapper">
        <div className="session-links-wrapper__login-wrapper">
            <svg id="sign-up" enableBackground="new 0 0 515.556 515.556" width="15" height="15" fill="#aaa" viewBox="0 0 515.556 515.556" xmlns="http://www.w3.org/2000/svg">
                <path d="m348.918 37.751c50.334 50.334 50.334 131.942 0 182.276s-131.942 50.334-182.276 0-50.334-131.942 0-182.276c50.334-50.335 131.942-50.335 182.276 0"/>
                <path d="m455.486 350.669c-117.498-79.391-277.917-79.391-395.415 0-17.433 11.769-27.848 31.656-27.848 53.211v111.676h451.111v-111.676c0-21.555-10.416-41.442-27.848-53.211z"/>
            </svg>
            {logged ?
            <Link onClick={logout} to="/logout">Logout</Link>:
            <Link onClick={login} to="/login">Login</Link>}
        </div>
        <div className="session-links-wrapper__login-wrapper__sign-up-wrapper">
            <Link to="/sign-up">Sign-Up</Link>
        </div>
    </div>
);

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos:  window.pageYOffset,
            visible: true
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        const { prevScrollpos } = this.state;
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
    };

    render() {
        const { visible } = this.state;
        const { login, logout, logged } = this.props;
        return (
            <header className={'header ' + (!visible ? 'header--hidden' : '')}>
                <NavBar/>
                <SessionLinks logged={logged} login={login} logout={logout}/>
            </header>
        );
    }
}

const mapStateToProps = ({ user }) => {
    const { logged } = user;

    return { logged };
};

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(login()),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
