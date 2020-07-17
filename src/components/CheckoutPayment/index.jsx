import React, { useState, Fragment } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { times } from 'lodash';
import Card from '../../assests/checkout/card.png';
import { buy } from '../../redux/actions';

let intervalPending;

const Input = ({
  className,
  containerClass,
  label,
  labelClass,
  id,
  type,
  TooltipIcon,
  Tooltip,
  ...rest
}) => {
  return (
    <div className={`checkout-payment__input-wrapper ${ containerClass ? containerClass : '' }`}>
      <label className={`checkout-payment__label ${type === 'radio' ? 'radio-label' : ''}`} htmlFor={ id }>{ label }</label>
      <input
        className={`checkout-payment__input ${ className }`}
        type={ type }
        id={ id }
        {...rest}
      />
      { TooltipIcon && <TooltipIcon /> }
      { Tooltip && <Tooltip /> }
    </div>
  )
};

const CheckoutPayment = ({ onFinish, buyGame }) => {
  const [isShow, toggleShow] = useState(false);
  const [isSummary, toggleSummary] = useState(false);
  const [isFinished, setFinished] = useState(false);
  const [isPending, setPending] = useState(false);
  const [homeRedirect, setHomeRedirect] = useState(false);
  const [gameRedirect, setGameRedirect] = useState(false);

  function buy() {
    buyGame();
    handleContinue();
  }

  function handleContinue() {
    setPending(true);
    intervalPending = setInterval(() => {
      setPending(false);
      if (isSummary) {
        handleFinish();
      } else {
        toggleSummary(!isSummary);
      }
      clearInterval(intervalPending);
    }, 2000);
  }

  function handleFinish() {
    onFinish(true);
    setFinished(true);
    toggleSummary(!isSummary);
  }

  function handleHomeRedirect() {
    setHomeRedirect(true);
  }

  function handleGameRedirect() {
    setGameRedirect(true);
  }

  return  (
    gameRedirect ? <Redirect to="/game" /> :
    homeRedirect ? <Redirect to="/home" /> :
    <div className={`checkout-payment
      ${isSummary ? 'checkout-payment--summary'  : ''}
      ${isPending ? 'checkout-payment--pending'  : ''}
      ${isFinished ?'checkout-payment--finished' : '' }`
    }>
    { isPending ? ( <Spinner animation="border" size="lg" variant="secondary" /> ) :
    isSummary ? (
      <div className="checkout-payment__summary">
        <h1 className="checkout-payment__summary-title">
          Resumén de compra
        </h1>
        <span className="checkout-payment__summary-subtitle">
          <strong>Tarjeta:</strong> VISA que finaliza 9030
        </span>
        <span className="checkout-payment__summary-subtitle">
          <strong>Usuario:</strong> jose-miguez98
        </span>
        <br/>
        <span className="checkout-payment__summary-subtitle">
          <strong>Datos de facturación:</strong>
          <ul>
            <li>Miguez José Maria</li>
            <li>Tandil, AR</li>
            <li>CP 7000</li>
            <li>Rivadavia 1800</li>
          </ul>
        </span>

        <button
          className="checkout-payment__summary-accept"
          type="submit"
          title="Realizar transacción"
          onClick={ buy }
        >
          Finalizar compra
        </button>
        <button
          className="checkout-payment__summary-back"
          type="submit"
          title="Correjir datos"
          onClick={() => toggleSummary(!isSummary)}
        >
          Atras
        </button>
      </div>
    ) : isFinished ? (
      <Fragment>
         <h1 className="checkout-payment__finished-title">
           Transacción realizada con exito! <br />
           Gracias por su compra!
         </h1>
         <div className="checkout-payment__finished-info">
          <span className="checkout-payment__finished-subtitle">
            <strong>Nro de transacción:</strong> 025591725130002
           </span>
           <span className="checkout-payment__finished-subtitle">
             <strong>Fecha:</strong> 14/10/20
          </span>
         </div>
        <button
          className="checkout-payment__finished-continue"
          type="submit"
          onClick={ handleGameRedirect }
        >
          Ir a pantalla del juego
        </button>
        <button
          className="checkout-payment__finished-home"
          type="submit"
          onClick={ handleHomeRedirect }
        >
          Ir al home
        </button>
      </Fragment>
    ) : (
      <Fragment>
        <div className="checkout-payment__cards">
          <h2 className="checkout-payment__title">
            Tarjetas guardadas
          </h2>
          <ul className="checkout-payment__cards-list">
            <li>
              <Input
                className="checkout-payment__card-radio"
                containerClass="checkout-payment__radio-wrapper"
                id="card-radio1"
                label="Visa que termina en 9030"
                labelClass="checkout-payment__radio-label"
                name="card-radio"
                type="radio"
              />
            </li>
            <li>
              <Input
                className="checkout-payment__card-radio"
                containerClass="checkout-payment__radio-wrapper"
                id="card-radio2"
                label="MasterCard que finaliza en 2510"
                labelClass="checkout-payment__radio-label"
                name="card-radio"
                type="radio"
              />
            </li>
          </ul>
          <div className="checkout-payment__submit-button">
            <button type="submit" onClick={ handleContinue }>Continuar</button>
          </div>
        </div>
        <div className="checkout-payment__new-card">
          <h2 className="checkout-payment__title">Nueva tarjeta</h2>
            <form className="checkout-payment__form">
              <Input
                className="checkout-payment__number"
                type="text"
                label="Numero de la tarjeta"
                id="card-number"
              />
              <Input
                className="checkout-payment__name"
                type="text"
                label="Nombre de la tarjeta"
                id="card-name"
              />

              <div className="checkout-payment__exp-cvv">
                <Input
                  className="checkout-payment__cvv"
                  type="text"
                  label="Codigo de seguridad"
                  id="card-cvv"
                  maxLength="3"
                  TooltipIcon={ () =>
                  <button onClick={ () => toggleShow(!isShow) } className="checkout-payment__question-button">
                    ?
                    </button>
                  }
                  Tooltip={ () =>
                    <div className={`checkout-payment__cvv-tooltip${ isShow ? ' checkout-payment__cvv-tooltip--open' : '' }`}>
                      <img src={ Card } alt="card-cvv"/>
                    </div>
                  }
                />
                <div className="checkout-payment__input-wrapper">
                  <label className="checkout-payment__label" htmlFor="expiration-date">Fecha de expiración</label>
                  <select className="checkout-payment__input checkout-payment__select">
                    {times(31, i => (
                      <option key={`day${i+1}`} className={`checkout_payment__day${i+1}`}>{i+1}</option>
                    ))}
                  </select>
                  <select className="checkout-payment__input checkout-payment__select">
                    {times(12, i => (
                      <option key={`month${i+1}`} className={`checkout_payment__month${i+1}`}>{i+1}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="checkout-payment__submit-button">
                <button type="submit">Añadir tarjeta</button>
              </div>
          </form>
      </div>
      </Fragment>
    )}
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  buyGame: () => dispatch(buy())
});

export default connect(null, mapDispatchToProps)(CheckoutPayment);