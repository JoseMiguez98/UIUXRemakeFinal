import React, { Component } from 'react';
import COVER from '../../assests/game/cover.jpg';
import CartButton from '../CartButton';

class GameInfoBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            inCart: false
        }

        this.toggleCart = this.toggleCart.bind(this);
        this.toggleExpanded = this.toggleExpanded.bind(this);
    }

    toggleCart() {
        this.setState(prevState => ({
            ...prevState,
            inCart: !prevState.inCart
        }));
    }

    toggleExpanded(e) {
        e.preventDefault();
        this.setState(prevState => ({
            ...prevState,
            expanded: !prevState.expanded
        }));
    }

    render() {
        const { inCart, expanded } = this.state;
        return (
                <div className="game-info-wrapper">
                    <div className="game-info-wrapper__image-wrapper">
                        <img src={COVER} alt="game cover"></img>
                    </div>
                    <div className="game-info-wrapper__text-wrapper">
                        <h1 className="game-info-wrapper__text-wrapper__title">
                            Mortal Kombat 11
                        </h1>
                        <p className={"game-info-wrapper__text-wrapper__description " + (expanded ? "game-info-wrapper__text-wrapper__description--expanded" : "")} >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quisquam ducimus sed similique exercitationem. Architecto nobis sint voluptas dignissimos. Exercitationem molestias eos quae mollitia totam. Quod aspernatur quas porro ab!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quisquam ducimus sed similique exercitationem. Architecto nobis sint voluptas dignissimos. Exercitationem molestias eos quae mollitia totam. Quod aspernatur quas porro ab!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quisquam ducimus sed similique exercitationem. Architecto nobis sint voluptas dignissimos. Exercitationem molestias eos quae mollitia totam. Quod aspernatur quas porro ab!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quisquam ducimus sed similique exercitationem. Architecto nobis sint voluptas dignissimos. Exercitationem molestias eos quae mollitia totam. Quod aspernatur quas porro ab!
                        </p>
                        <div className={"game-info-wrapper__text-wrapper__view-more-link " + (expanded ? "game-info-wrapper__text-wrapper__view-more-link--expanded" : "")}>
                            <a href="#" role="button" onClick={(e) => this.toggleExpanded(e)}>
                                {expanded ? "Ver menos" : "Ver mas"}
                                <svg version="1.1"
                                className={"game-info-wrapper__text-wrapper__view-more-link__arrow " + (expanded ? "game-info-wrapper__text-wrapper__view-more-link__arrow--expanded" : "")}
                                id="view-more-arrow" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	                                 viewBox="0 0 612 612" enableBackground="new 0 0 612 612;">
	                                <g id="_x39__30_">
	                                	<g>
	                                		<path d="M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27
	                                			L7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832
	                                			c9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z"/>
	                                	</g>
	                                </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="game-info-wrapper__button-wrapper">
                        <CartButton handleClick={this.toggleCart} add={!inCart} price={1200}/>
                    </div>
                </div>
            )
    }
}

export default GameInfoBox;
