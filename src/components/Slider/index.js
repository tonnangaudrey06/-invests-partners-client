import { Button } from '..';

import Slider from "react-slick";

import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

import AOS from 'aos';

const BannerSlider = ({ slides }) => {

  AOS.init({
    isable: false,
    startEvent: 'load',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease-in-out-quad',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'

  });

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1500,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1
};

let slider = new Slider(settings);

const next = () => {
  slider.slickNext();
}

const previous = () => {
  slider.slickPrev();
}

if (!Array.isArray(slides) || slides.length <= 0) {
  return null
}

return (
  <div className="slide-section">
    <div>
      <Slider ref={c => (slider = c)} {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="slide-preview" style={{ backgroundImage: "url('" + slide.image + "')" }}>
              <div className="slide-content">
                <h1 id="title" data-aos='fade-up'>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  {slide.label.map((item) => <Button title={item.text} color={item.backgroundColor} borderColor={item.color} />)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="slider-buttons">
        <IoArrowBack className="prev-arrow" onClick={previous} />
        <IoArrowForward className="forward-arrow" onClick={next} />
      </div>
    </div>
  </div>
);
};

export default BannerSlider;
