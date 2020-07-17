import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Redirect } from 'react-router';

const CartButton = ({ price, bought, logged }) => {
  const [redirect, setRedirect] = useState(false);

  function handleRedirect() {
    setRedirect(true);
  }

  return (
    redirect ? <Redirect to={{ pathname: (logged ? '/checkout' : '/login'), state: { redirectPath: '/checkout' }}} /> :
    <button
      className={'btn-buy ' + (!bought ? 'btn-buy--add' : 'btn-buy--play')}
      onClick={ !bought && handleRedirect }>
      <div className="btn-buy__caption">
        <div className="btn-buy__caption__icon">
            { !bought ? (
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              viewBox="0 0 469.333 469.333" enableBackground="new 0 0 469.333 469.333;">
                <g>
                  <g>
                    <g>
                      <path d="M434.979,42.667H85.333c-1.053,0-2.014,0.396-3.001,0.693l-8.594-28.241C71.005,6.138,62.721,0,53.333,0H10.667
                          C4.776,0,0,4.776,0,10.667V32c0,5.891,4.776,10.667,10.667,10.667h26.865l66.646,219.01l-24.891,29.039
                          c-9.838,11.477-14.268,27.291-9.74,41.713c5.791,18.445,22.07,30.237,40.839,30.237H416c5.891,0,10.667-4.776,10.667-10.667
                          v-21.333c0-5.891-4.776-10.667-10.667-10.667H110.385l33.813-39.448c0.85-0.992,1.475-2.112,2.12-3.219h206.703
                          c16.533,0,31.578-9.548,38.618-24.507l74.434-158.17c2.135-4.552,3.26-9.604,3.26-14.615v-3.021
                          C469.333,58.048,453.952,42.667,434.979,42.667z"/>
                      <circle cx="128" cy="426.667" r="42.667"/>
                      <circle cx="384" cy="426.667" r="42.667"/>
                    </g>
                  </g>
                </g>
              </svg> ) : (
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
            )}
        </div>
        <div className="btn-buy__caption__text">
            {!bought ? 'Comprar' : 'Jugar ahora'}
        </div>
      </div>
      {!bought &&
        <div className="btn-buy__price">
            { price !== 0 ? `${price} ARS`: 'Gratis' }
        </div>}
    </button>
  );
};

CartButton.defaultProps = {
    price: 0
}

CartButton.propTypes = {
    price: PropTypes.number,
    handleClick: PropTypes.func
}

const mapStateToProps = ({ user }) => {
  const { logged } = user;
  return { logged };
};

export default connect(mapStateToProps)(CartButton);
