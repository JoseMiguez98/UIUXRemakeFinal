import React, { useState } from 'react';
import { withRouter, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { login } from '../../redux/actions';
import { Container } from 'react-bootstrap';

const Login = ({ location, login }) => {
  const [redirect, setRedirect] = useState(false);
  const [path, setPath] = useState('/');
  console.log(location);

  useEffect(() => {
    if(location.state.redirectPath) {
      setPath(location.state.redirectPath);
    }
  }, []);

  function handleRedirect(e) {
    e.preventDefault();
    login();
    setRedirect(true);
  }

  return (
    redirect ? <Redirect to={ path } /> :
    <div className="login-wrapper">
      <div className="login-content">
        <div className="login">
          <h1 className="login__title">Ingresa con tu cuenta</h1>
          <form className="login__form">
            <div className="login__input-wrapper">
              <label
                className="login__label"
                htmlFor="username" >Nombre de usuario o correo electronico</label>
              <input className="login__input" type="text" />
            </div>
            <div className="login__input-wrapper">
              <label
                className="login__label"
                htmlFor="password">Contraseña</label>
              <input className="login__input" type="password" />
            </div>
            <div className="login__input-wrapper">
              <button
                type="submit"
                className="login__submit"
                onClick={ handleRedirect }>Ingresar</button>
            </div>
          </form>
        </div>
        <div className="login__links">
          <a href="#" className="login__link">Olvidaste tu Contraseña?</a>
          <a href="#" className="login__link">No tenes cuenta? <br />Registrate</a>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login())
});

export default connect(null, mapDispatchToProps)(withRouter(Login));