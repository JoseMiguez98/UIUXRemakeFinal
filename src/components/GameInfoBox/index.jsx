import React, { Component } from 'react';
import TextTruncate from 'react-text-truncate';
import COVER from '../../assests/game/cover.jpg';
import CartButton from '../CartButton';
import Modal from '../Modal';

const gameDescription = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quisquam ducimus sed similique exercitationem. Architecto nobis sint voluptas dignissimos. Exercitationem molestias eos quae mollitia totam. Quod aspernatur quas porro ab!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quisquam ducimus sed similique exercitationem. Architecto nobis sint voluptas dignissimos. Exercitationem molestias eos quae mollitia totam. Quod aspernatur quas porro ab!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quisquam ducimus sed similique exercitationem. Architecto nobis sint voluptas dignissimos. Exercitationem molestias eos quae mollitia totam. Quod aspernatur quas porro ab!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quisquam ducimus sed similique exercitationem. Architecto nobis sint voluptas dignissimos. Exercitationem molestias eos quae mollitia totam. Quod aspernatur quas porro ab!`;

const gameTitle = 'Mortal Kombat 11';

class GameInfoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      inCart: false
    }
    this.toggleCart = this.toggleCart.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleCart() {
    this.setState(prevState => ({
      ...prevState,
      inCart: !prevState.inCart
    }));
  }

  toggleModal(e) {
    e.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { inCart, isOpen } = this.state;
    return (
      <div className="game-info-wrapper">
        <div className="game-info-wrapper__image-wrapper">
          <img src={COVER} alt="game cover" />
        </div>
        <div className="game-info-wrapper__text-wrapper">
          <h1 className="game-info-wrapper__text-wrapper__title">{ gameTitle }</h1>
          <TextTruncate
            line={4}
            element="p"
            truncateText="…"
            text={gameDescription}
            textTruncateChild={
            <a
              className="game-info-wrapper__view-more"
              href="#"
              role="button"
              onClick={this.toggleModal}>Ver mas</a>
            }
          />
         <Modal
          description={ gameDescription }
          title={ gameTitle }
          isOpen={ isOpen }
          onClose={ this.toggleModal }
         />
        </div>
        <div className="game-info-wrapper__button-wrapper">
          <CartButton handleClick={this.toggleCart} add={!inCart} price={1200}/>
        </div>
      </div>
    );
  }
}

export default GameInfoBox;
