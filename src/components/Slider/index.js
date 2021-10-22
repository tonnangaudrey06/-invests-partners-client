import { Button } from '..';
import Slider from "react-slick";
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import AOS from 'aos';
import React from 'react';

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
    <div id="carouselExampleSlidesOnly" class="carousel slide" style={{height: 'auto'}}>
      <div className="slide-section carousel-inner" role="listbox">
        <Slider ref={c => (slider = c)} {...settings}>
          {slides.map((slide, index) => (
            <div class="carousel-item active">
              <img class="d-block img-fluid" src={slide.image} alt={slide.image} />
              <div className="filter"></div>
              <div class="carousel-caption text-white ">
                <h1 id="title" className="text-uppercase">{slide.title}</h1>
                <div className="mb-2 textEntete">{slide.description}</div>
                <div class="d-grid gap-2  bouttonEntete">
                  <Button title={'Découvrir les opportunités'} color={'transparent'} borderColor={'white'} url={'/projets'} />
                  <Button title={'Parler à un conseiller'} color={'#585b60'} borderColor={'grey'} url={'/contact'} />
                </div>
              </div>
            </div>
          ))}</Slider>

        <div className="slider-buttons">
          <IoArrowBack className="prev-arrow" onClick={previous} />
          <IoArrowForward className="forward-arrow" onClick={next} />
        </div>
      </div>
    </div>

  );
};

export default BannerSlider;
