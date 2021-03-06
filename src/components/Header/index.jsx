import React, { Component, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import { login, logout } from '../../redux/actions';
import 'react-dropdown/style.css';

const SessionLinks = ({ logout, logged }) => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <div className="session-links-wrapper">
        <div className="session-links-wrapper__login-wrapper">
          {logged ?
            <svg id="sign-up" enableBackground="new 0 0 515.556 515.556" width="15" height="15" fill="#aaa" viewBox="0 0 515.556 515.556" xmlns="http://www.w3.org/2000/svg">
                <path d="m348.918 37.751c50.334 50.334 50.334 131.942 0 182.276s-131.942 50.334-182.276 0-50.334-131.942 0-182.276c50.334-50.335 131.942-50.335 182.276 0"/>
                <path d="m455.486 350.669c-117.498-79.391-277.917-79.391-395.415 0-17.433 11.769-27.848 31.656-27.848 53.211v111.676h451.111v-111.676c0-21.555-10.416-41.442-27.848-53.211z"/>
            </svg> :
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="m465.535156.320312c-.53125-.042968-.980468-.320312-1.535156-.320312h-229.332031c-35.285157 0-64 28.714844-64 64v21.332031c0 11.777344 9.554687 21.335938 21.332031 21.335938s21.332031-9.558594 21.332031-21.335938v-21.332031c0-11.753906 9.578125-21.332031 21.335938-21.332031h99.390625l-6.507813 2.175781c-17.277343 5.972656-28.882812 22.25-28.882812 40.488281v320h-64c-11.757813 0-21.335938-9.578125-21.335938-21.332031v-42.667969c0-11.773437-9.554687-21.332031-21.332031-21.332031s-21.332031 9.558594-21.332031 21.332031v42.667969c0 35.285156 28.714843 64 64 64h64v21.332031c0 23.53125 19.132812 42.667969 42.664062 42.667969 4.566407 0 8.898438-.660156 13.589844-2.113281l128.171875-42.730469c17.300781-5.972656 28.90625-22.25 28.90625-40.488281v-384c0-24.875-21.441406-44.375-46.464844-42.347657zm0 0"/><path d="m228.414062 198.25-85.332031-85.332031c-6.101562-6.101563-15.273437-7.9375-23.253906-4.628907-7.957031 3.304688-13.160156 11.09375-13.160156 19.710938v64h-85.335938c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h85.335938v64c0 8.617187 5.203125 16.402343 13.160156 19.710937 7.980469 3.304688 17.152344 1.472656 23.253906-4.628906l85.332031-85.335938c8.34375-8.339843 8.34375-21.820312 0-30.164062zm0 0"/>
          </svg>}
            {logged ?
            <Fragment>
              <Link
                className={`session-links__dropdown ${isOpen ? 'session-links__dropdown--open' : ''}`}
                onClick={ () => toggleOpen(!isOpen) }>
                JoseMiguez98
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                	viewBox="0 0 612 612" enableBackground="new 0 0 612 612;">
                	<g id="_x39__30_">
                		<g>
                			<path d="M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27
                				L7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832
                				c9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z"/>
                		</g>
                	</g>
                </svg>
              </Link>
              {isOpen &&
              <div className="session-links__user-options">
                  <ul>
                    <li className="session-links__option">
                      <svg id="sign-up" enableBackground="new 0 0 515.556 515.556" width="15" height="15" fill="#aaa" viewBox="0 0 515.556 515.556" xmlns="http://www.w3.org/2000/svg">
                        <path d="m348.918 37.751c50.334 50.334 50.334 131.942 0 182.276s-131.942 50.334-182.276 0-50.334-131.942 0-182.276c50.334-50.335 131.942-50.335 182.276 0"/>
                        <path d="m455.486 350.669c-117.498-79.391-277.917-79.391-395.415 0-17.433 11.769-27.848 31.656-27.848 53.211v111.676h451.111v-111.676c0-21.555-10.416-41.442-27.848-53.211z"/>
                      </svg>
                      <Link to="#">Mi cuenta</Link>
                    </li>
                    <li className="session-links__option">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      viewBox="0 0 53.626 53.626" enableBackgroynd="new 0 0 53.626 53.626;">
                      <g>
                        <path d="M48.831,15.334c-7.083-11.637-17.753-3.541-17.753-3.541c-0.692,0.523-1.968,0.953-2.835,0.955
                          l-2.858,0.002c-0.867,0.001-2.143-0.429-2.834-0.952c0,0-10.671-8.098-17.755,3.539C-2.286,26.97,0.568,39.639,0.568,39.639
                          c0.5,3.102,2.148,5.172,5.258,4.912c3.101-0.259,9.832-8.354,9.832-8.354c0.556-0.667,1.721-1.212,2.586-1.212l17.134-0.003
                          c0.866,0,2.03,0.545,2.585,1.212c0,0,6.732,8.095,9.838,8.354c3.106,0.26,4.758-1.812,5.255-4.912
                          C53.055,39.636,55.914,26.969,48.831,15.334z M20.374,24.806H16.7v3.541c0,0-0.778,0.594-1.982,0.579
                          c-1.202-0.018-1.746-0.648-1.746-0.648v-3.471h-3.47c0,0-0.433-0.444-0.549-1.613c-0.114-1.169,0.479-2.114,0.479-2.114h3.675
                          v-3.674c0,0,0.756-0.405,1.843-0.374c1.088,0.034,1.885,0.443,1.885,0.443l-0.015,3.604h3.47c0,0,0.606,0.778,0.656,1.718
                          C20.996,23.738,20.374,24.806,20.374,24.806z M37.226,28.842c-1.609,0-2.906-1.301-2.906-2.908c0-1.61,1.297-2.908,2.906-2.908
                          c1.602,0,2.909,1.298,2.909,2.908C40.135,27.542,38.828,28.842,37.226,28.842z M37.226,20.841c-1.609,0-2.906-1.3-2.906-2.907
                          c0-1.61,1.297-2.908,2.906-2.908c1.602,0,2.909,1.298,2.909,2.908C40.135,19.542,38.828,20.841,37.226,20.841z M44.468,25.136
                          c-1.609,0-2.906-1.3-2.906-2.908c0-1.609,1.297-2.908,2.906-2.908c1.602,0,2.909,1.299,2.909,2.908
                          C47.377,23.836,46.07,25.136,44.468,25.136z"/>
                      </g>
                    </svg>
                      <Link to="#">Mis juegos</Link>
                    </li>
                    <li className="session-links__option">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	                      viewBox="0 0 512 512" enableBackground="new 0 0 512 512;">
                      <g>
                        <g>
                          <g>
                            <path d="M510.371,226.513c-1.088-2.603-2.645-4.971-4.629-6.955l-63.979-63.979c-8.341-8.32-21.824-8.32-30.165,0
                              c-8.341,8.341-8.341,21.845,0,30.165l27.584,27.584H320.013c-11.797,0-21.333,9.557-21.333,21.333s9.536,21.333,21.333,21.333
                              h119.168l-27.584,27.584c-8.341,8.341-8.341,21.845,0,30.165c4.16,4.181,9.621,6.251,15.083,6.251s10.923-2.069,15.083-6.251
                              l63.979-63.979c1.984-1.963,3.541-4.331,4.629-6.955C512.525,237.606,512.525,231.718,510.371,226.513z"/>
                            <path d="M362.68,298.667c-11.797,0-21.333,9.557-21.333,21.333v106.667h-85.333V85.333c0-9.408-6.187-17.728-15.211-20.437
                              l-74.091-22.229h174.635v106.667c0,11.776,9.536,21.333,21.333,21.333s21.333-9.557,21.333-21.333v-128
                              C384.013,9.557,374.477,0,362.68,0H21.347c-0.768,0-1.451,0.32-2.197,0.405c-1.003,0.107-1.92,0.277-2.88,0.512
                              c-2.24,0.576-4.267,1.451-6.165,2.645c-0.469,0.299-1.045,0.32-1.493,0.661C8.44,4.352,8.376,4.587,8.205,4.715
                              C5.88,6.549,3.939,8.789,2.531,11.456c-0.299,0.576-0.363,1.195-0.597,1.792c-0.683,1.621-1.429,3.2-1.685,4.992
                              c-0.107,0.64,0.085,1.237,0.064,1.856c-0.021,0.427-0.299,0.811-0.299,1.237V448c0,10.176,7.189,18.923,17.152,20.907
                              l213.333,42.667c1.387,0.299,2.795,0.427,4.181,0.427c4.885,0,9.685-1.685,13.525-4.843c4.928-4.053,7.808-10.091,7.808-16.491
                              v-21.333H362.68c11.797,0,21.333-9.557,21.333-21.333V320C384.013,308.224,374.477,298.667,362.68,298.667z"/>
                          </g>
                        </g>
                      </g>
                    </svg>
                      <Link onClick={ logout } to="/">Cerrar sesión</Link>
                    </li>
                  </ul>
                </div>}
            </Fragment>
            :
            <Link
              to={{pathname: '/login', state: { redirectPath: location.pathname }}}>
              Iniciar sesión
            </Link>}
        </div>
        {!logged &&
          <div className="session-links-wrapper__login-wrapper__sign-up-wrapper">
              <Link to="/sign-up">Registrarse</Link>
          </div>}
    </div>
  );
};

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
