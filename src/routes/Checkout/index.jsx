import React, { Fragment } from 'react';
import CheckoutPayment from '../../components/CheckoutPayment';
import CheckoutProduct from '../../components/CheckoutProduct';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [finished, setFinished] = useState(false);
  return (
    <div className="checkout-screen">
      <div className="checkout-wrapper">
        <CheckoutPayment onFinish={ setFinished } />
        {!finished && (
          <Fragment>
            <CheckoutProduct />
            <Link to="/game">Cancelar compra</Link>
          </Fragment>)}
      </div>
    </div>
  )
};

export default Checkout;