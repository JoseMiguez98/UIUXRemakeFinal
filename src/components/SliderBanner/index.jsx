import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { changeBannerSlide } from '../../redux/actions';

let interval;

class SliderBanner extends Component {
    constructor(props) {
        super(props);
        this.slideNext = this.slideNext.bind(this);
        this.slidePrev = this.slidePrev.bind(this);
        this.setTimer = this.setTimer.bind(this);
    }

    slideNext() {
        const { elems, changeSlide, slide } = this.props;
        changeSlide(slide !== elems.length - 1 ? slide+1 : 0);
        this.setTimer();
    }

    slidePrev() {
        const { elems, changeSlide, slide } = this.props;
        changeSlide(slide !== 0 ? slide-1 : elems.length - 1);
    }

    setTimer() {
        clearInterval(interval);
        interval = setInterval(this.slideNext, 10000);
    }

    componentDidMount() {
        this.setTimer();
    }

    render() {
        const { elems, slide } = this.props;
        return (
            <div className="sliderBanner-container" onMouseEnter={() => {clearInterval(interval)}} onMouseOut={this.setTimer}>
                <div className="sliderBanner-container__slides">
                    <Carousel
                    activeIndex={slide}
                    controls={false}
                    onSelect={() => {return true;}}
                    slide={true}>
                        {
                            elems.map((elem, index) => (
                                <Carousel.Item key={index}>
                                    <img src={elem.img} alt={elem.title}/>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </div>
                <div className="sliderBanner-container__description">
                    <div className="sliderBanner-container__description__items">
                        {
                            elems.map((elem, index) => (
                                <div className={"description-item" + (index === slide ? ' description-item--active': '')} key={index}>
                                    <h1 className="description-item__title">
                                        {elem.title}
                                    </h1>
                                    <div className="description-item__body">
                                        <p>{elem.msg}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <button className="carousel-arrow-prev" role="button" onClick={this.slidePrev}>
                        <svg version="1.1" id="carousel-prev" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" height="25px"  fill="#bbb" viewBox="0 0 612 612" enableBackground="new 0 0 612 612">
                            <g id="_x39__30_">
                                <g>
                                    <path d="M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27
                                        L7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832
                                        c9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z"/>
                                </g>
                            </g>
                        </svg>
                    </button>
                    <button className="carousel-arrow-next" role="button" onClick={this.slideNext}>
                        <svg version="1.1" id="carousel-next" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" height="25px"  fill="#bbb" viewBox="0 0 612 612" enableBackground="new 0 0 612 612">
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
            </div>
        );
    }
}

const mapStateToProps = ({sliderBanner}) => {
    const { slide } = sliderBanner;
    return { slide };
};

const mapDispatchToProps = dispatch => ({
        changeSlide: slide => dispatch(changeBannerSlide(slide))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(SliderBanner);
