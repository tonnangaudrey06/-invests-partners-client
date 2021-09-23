import ButtonCustom from '../Button';
import {IoMdArrowRoundForward} from 'react-icons/io';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';
import {useEffect, useRef, useState} from 'react';
import ButtonRadius from '../ButtonRadius';

const Slider = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null)

  useEffect(() => {
    const title = document.getElementById("title");
    title.style.animation = "anim 1s ease in out";
    timeout.current = setTimeout(nextSlide, 10000)
      return () => {
          if (timeout.current) {
              clearTimeout(timeout.current)
          }
      }
  }, [current, length])

  const nextSlide = () => {
    if (timeout.current) {
        clearTimeout(timeout.current)
    }
      setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    if (timeout.current) {
        clearTimeout(timeout.current)
    }
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <div className="sliderSection">
      <div className="sliderWrapper">
        {slides.map((slide, index) => {
          return (
            <div className={current === index ? "slide active-anim-slider" : "slide"} key={index}>
                {index === current && (
                    <div className="slider">
                    <img src={slide.image} alt={slide.alt} className={current === index ? "slideImage active-anim-slider" : "slideImage"} />
                    <div className="slideContent">
                      <h1 id="title">{slide.title}</h1>
                      <p>{slide.subtitle}</p>
                      <div style={{display: 'flex', flexDirection: 'row'}}>
                      {slide.label.map((item) => <ButtonRadius title={item.text} color={item.backgroundColor} borderColor={item.color} />)}
                      </div>
                    </div>
                </div>
                )}
            </div>
          );
        })}
        <div className="sliderButtons">
          <IoArrowBack className="prevArrow" onClick={prevSlide} />
          <IoArrowForward className="forwardArrow" onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
