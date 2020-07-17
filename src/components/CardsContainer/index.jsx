import React, { Component } from 'react';
import Card from '../Card';
import Swiper from 'react-id-swiper';

class CardsContainer extends Component {
  constructor(props) {
      super(props);

      this.goPrev = this.goPrev.bind(this);
      this.goNext = this.goNext.bind(this);

      this.state = {
          swiper: null
      };
  }

  goPrev() {
      const { swiper } = this.state;
      swiper.slidePrev();
  }

  goNext() {
      const { swiper } = this.state;
      swiper.slideNext();
  }

  render() {
    const { caption, elems } = this.props;
    const params = {
      slidesPerView: 5,
      spaceBetween: 20,
      setWrapperSize: true,
      noSwiping: true,

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    }
    return (
      <div className="cards-slider">
        <h2 className="row-caption">{caption}</h2>
        <Swiper getSwiper={swiper => {
            this.setState(prevState => (
              {...prevState, swiper}
          ));
          }}{...params}
        >
          {elems.map((elem, i) =>
            <span key={`elem${ i }`}>
              <Card
                cover={ elem.cover }
                name={ elem.name } 
                dev={ elem.dev }
                price={ elem.price }
              />
            </span>)}
        </Swiper>
      <div className="swiper-button-next-wrapper">
        <button className="swiper-button-next" onClick={this.goNext}>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50px" height="50px"  fill="#bbb" viewBox="0 0 612 612" enableBackground="new 0 0 612 612">
            <g id="_x39__30_">
              <g>
                <path d="M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27
                    L7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832
                    c9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z"/>
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div className="swiper-button-prev-wrapper">
        <button className="swiper-button-prev" onClick={this.goPrev}>
          <svg version="1.1" id="Capa_2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50px" height="50px"  fill="#bbb" viewBox="0 0 612 612" enableBackground="new 0 0 612 612">
            <g id="_x39__30_">
              <g>
                <path d="M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27
                    L7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832
                    c9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z"/>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>);
  }
}

export default CardsContainer;
