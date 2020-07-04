import React from 'react';
import PropTypes from 'prop-types';

const CartButton = ({add, price, handleClick}) => (
    <button onClick={handleClick} className={"btn-buy " + (add ? "btn-buy--add" : "btn-buy--remove")}>
        <div className="btn-buy__caption">
            <div className="btn-buy__caption__icon">
                {add ?
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
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
                    </svg> :
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	                        viewBox="0 0 512 512" enableBackground="new 0 0 512 512;">
                        <g>
                        	<g>
                        		<g>
                        			<polygon points="353.574,176.526 313.496,175.056 304.807,412.34 344.885,413.804"/>
                        			<rect x="235.948" y="175.791" width="40.104" height="237.285"/>
                        			<polygon points="207.186,412.334 198.497,175.049 158.419,176.52 167.109,413.804"/>
                        			<path d="M17.379,76.867v40.104h41.789L92.32,493.706C93.229,504.059,101.899,512,112.292,512h286.74
                        				c10.394,0,19.07-7.947,19.972-18.301l33.153-376.728h42.464V76.867H17.379z M380.665,471.896H130.654L99.426,116.971h312.474
                        				L380.665,471.896z"/>
                        		</g>
                        	</g>
                        </g>
                        <g>
                        	<g>
                        		<path d="M321.504,0H190.496c-18.428,0-33.42,14.992-33.42,33.42v63.499h40.104V40.104h117.64v56.815h40.104V33.42
                        			C354.924,14.992,339.932,0,321.504,0z"/>
                        	</g>
                        </g>
                    </svg>
                }
            </div>
            <div className="btn-buy__caption__text">
                {add ? "Añadir al carrito" : "Quitar del carrito"}
            </div>
        </div>
        <div className="btn-buy__price">
            {price !== 0 ? `${price} ARS`: "Gratis"}
        </div>
    </button>
);

CartButton.defaultProps = {
    price: 0
}

CartButton.propTypes = {
    price: PropTypes.number,
    handleClick: PropTypes.func
}

export default CartButton;
