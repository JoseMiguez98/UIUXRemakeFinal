import React from 'react';
import Figure from 'react-bootstrap/Figure';
import COD from '../../assests/covers/cod.jpg';
import { Link } from 'react-router-dom';

const Card = () => (
    <div className="card-wrapper">
        <Figure className="game-card">
        <div className="card-wrapper__links">
            <div className="card-wrapper__links__see-more"><Link to="/game">Ver más</Link></div>
            <div className="card-wrapper__links__buy-game"><a href="#">Comprar</a></div>
        </div>
            <Figure.Image
            src={COD}/>
        </Figure>
        <div className="card-wrapper__footer">
            <div className="card-wrapper__footer__name">Call of duty: Black Ops</div>
            <div className="card-wrapper__footer__developer">Activisión</div>
            <div className="card-wrapper__footer__price">300 ARS</div>
        </div>
    </div>
);

export default Card;
