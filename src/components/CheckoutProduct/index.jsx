import React from 'react';
import Cover from '../../assests/game/cover.jpg';

const CheckoutProduct = () => (
  <div className="checkout-product">
    <div className="checkout-product__preview">
      <div  className="checkout-product__cover-wrapper">
        <img className="checkout-product__image" alt="checkout-preview" src={ Cover } />
      </div>
      <div className="checkout-product__title">
        Mortal Kombat 11
      </div>
    </div>
    <div className="checkout-product__info">
      <span className="checkout-product__cost">
        <strong>Costo: </strong>
        1500 ARS
      </span>
      <span className="checkout-product__taxes">
        <strong>Impuestos: </strong>
        10 ARS
      </span>
      <span className="checkout-product__total">
      <strong>Total: </strong>
        1510 ARS
      </span>
    </div>
  </div>
);

export default CheckoutProduct;