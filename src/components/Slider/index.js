import { Button } from '..';
import Slider from "react-slick";
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import AOS from 'aos';
import React, { Fragment, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const BannerSlider = ({ slides, translate, lang }) => {

  const { i18n } = useTranslation()
  // useEffect(() => {
  //   console.log(i18n.language)
  // },[i18n.language])

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
    <Fragment>
      <div className="carousel-inner">
        <Slider ref={c => (slider = c)} {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="carousel-item">

              <div className="circle-1" style={{ backgroundImage: `url(${slide.image})` }}></div>
              <div className="circle-2"></div>

              <div className="carousel-caption text-white">
                <h1 id="title" className="text-uppercase">{i18n.language ==='en' ? slide.title_en : slide.title}</h1>
                <div className="mb-2 textEntete">{i18n.language ==='en' ? slide.description_en : slide.description}</div>
                <div className="d-grid gap-2  bouttonEntete">
                  <Button title={translate('button.opportuniter')} color={'transparent'} borderColor={'white'} url={'/projets'} />
                  <Button title={translate('button.conseiller')} color={'#585b60'} borderColor={'grey'} url={'/contact'} />
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
    </Fragment>
  );
};

export default BannerSlider;
