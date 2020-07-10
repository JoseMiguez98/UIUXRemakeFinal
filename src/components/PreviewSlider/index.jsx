import React, { Component } from 'react';
import SimpleBar from 'simplebar-react';
import { connect } from 'react-redux';
import { changeSlide } from '../../redux/actions';

let interval1;

class PreviewSlider extends Component {
  constructor(props) {
    super(props);
    this.changeSlide = this.changeSlide.bind(this);
    this.setTimer = this.setTimer.bind(this);
    this.checkScrollPosition = this.checkScrollPosition.bind(this);

    this.simpleBarRef = React.createRef();
  }

  setTimer() {
    const { pictures, slide } = this.props;
    clearInterval(interval1);
    interval1 = setInterval(() =>
    this.changeSlide( slide === pictures.length-1 ? 0 : slide+1 ), 10000);
  }

  componentDidMount() {
    this.setTimer();
  }

  checkScrollPosition() {
    const { slide } = this.props;
    const { current:simpleBar } = this.simpleBarRef
    const scrollWidth = simpleBar.wrapperEl.scrollWidth;
    const pictureWidth = simpleBar.contentEl.firstElementChild.offsetWidth;
    const picsPerScroll = Math.floor(scrollWidth/pictureWidth);

    if(slide % picsPerScroll  === 0) {
      simpleBar.contentWrapperEl.scrollTo({left: pictureWidth * slide, behavior: 'smooth'});
    }
  }

  changeSlide(slide) {
    const { changeSlide } = this.props;
    changeSlide(slide);
    this.checkScrollPosition();
  }

  render() {
    const { pictures, slide } = this.props;
    return (
      <div className="preview-slider-wrapper" onMouseEnter={() => { clearInterval(interval1) }} onMouseOut={ this.setTimer }>
        <div className="preview-slider-wrapper__actual-slide">
          { pictures.map((pic, key) => (
            <img
              key={`image${key}`}
              src={pic}
              alt="actual-slide"
              className={"preview-slider-wrapper__actual-slide__picture " + (slide === key ? "preview-slider-wrapper__actual-slide__picture--active" : "")}
            />
          )) }
        </div>
        <SimpleBar ref={this.simpleBarRef} className="preview-slider-wrapper__slides">
          {pictures.map((pic, key) => (
            <div
              className={"preview-slider-wrapper__slides__picture-wrapper " + (slide === key ? "preview-slider-wrapper__slides__picture-wrapper--active" : "")}
              key={`slide${key}`}
              onClick={() => this.changeSlide(key)}>
              <div className="slides-progress-bar" />
              <img className="preview-slider-wrapper__slides__picture-wrapper__picture" src={pic} alt="slide-preview" />
            </div>
          ))}
        </SimpleBar>
      </div>
    );
  }
}

const mapStateToProps = ({previewSlider}) => {
    const { slide } = previewSlider;
    return { slide };
}

const mapDispatchToProps = dispatch => ({ changeSlide: slide => dispatch(changeSlide(slide)) })

export default connect(mapStateToProps, mapDispatchToProps)(PreviewSlider);
