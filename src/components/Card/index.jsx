import React, { useState } from 'react';
import Figure from 'react-bootstrap/Figure';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

const Card = ({ cover, name, price, dev, logged }) => {
  const [redirect, setRedirect] = useState(false);

  function handleRedirect() {
    setRedirect(true);
  }

  return (
    redirect ? <Redirect to={{ pathname: (logged ? '/checkout' : '/login'), state: { redirectPath: '/checkout' }}} /> :
    <div className="card-wrapper">
        <Figure className="game-card">
        <div className="card-wrapper__links">
            <div className="card-wrapper__links__see-more">
              <Link to="/game">Ver más</Link>
            </div>
            <div className="card-wrapper__links__buy-game">
              <Link onClick={ handleRedirect }>Comprar</Link>
            </div>
        </div>
            <Figure.Image src={ cover }/>
        </Figure>
        <div className="card-wrapper__footer">
            <div className="card-wrapper__footer__name">{ name }</div>
            <div className="card-wrapper__footer__developer">{ dev }</div>
            <div className="card-wrapper__footer__price">{ price }</div>
        </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  const { logged } = user;
  return { logged };
};

export default connect(mapStateToProps)(Card);
