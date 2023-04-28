import React, { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import "@css/flip.css";
import "@css/carousel.css";
import slide_image from '@assets/img/Taro_back.png';
import slide_image1 from '@assets/img/Taro_back5.png';
import slide_image2 from '@assets/img/Taro_back4.png';
import slide_image3 from '@assets/img/Taro_back3.png';
import slide_image4 from '@assets/img/Taro_back2.png';
import slide_image5 from '@assets/img/Taro_back1.png';

import { EffectCoverflow, EffectFlip } from "swiper";

export default function TodayTaro() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);




  // useEffect(() => {
  //   const pos = swiperRef.current;
  //   if (pos.current) {
  //     pos.current.on("slideChange", () => {
  //       setIndex(pos.current.activeIndex);
  //       console.log(pos)
  //     });
  //   }
  //   console.log(Swiper)
  //   console.log(Swiper.activeIndex)
  //   console.log(Swiper.slides)
  //   console.log(swiperRef.activeIndex)
  //   console.log(swiperRef.Index)
  //   console.log(Index)
  //   console.log(swiperRef)
  //   console.log(swiperRef.current)
  //   console.log(swiperRef.current.activeIndex)
  //   console.log(setIndex)
  //   console.log(swiperRef.Swiper)
  //   // console.log(swiperRef.current.)
  // }, [swiperRef, Index]);

  // useEffect(() => {
  //   const swiper = swiperRef.current;
  //   if (swiper) {
  //     swiper.current.on("slideChange", () => {
  //       setActiveIndex(swiper.activeIndex);
  //     });
  //   }
  // }, [swiperRef]);



  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    swiperInstance.on("slideChange", () => {
      setActiveIndex(swiperInstance.activeIndex);
    });
    console.log(activeIndex)
    console.log(swiperInstance.list)
  }, [activeIndex]);






  return (
    <>
      <Swiper
        ref={swiperRef}
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 30,
          depth: 70,
          modifier: 1,
          slideShadows: true,
        }}
        
        modules={[EffectCoverflow, EffectFlip]}
        className="mySwiper"
      >
        <SwiperSlide style={activeIndex === 0 ? { transform: "rotateY(180deg)" } : {}}>
          {/* <div className="flip">  
            <div className="card">
              <div className="front">                
              </div>              
              <div className="back">                
              </div>
            </div>
          </div> */}
            <img src={slide_image} alt="pic5" className="photos" />
          0
        </SwiperSlide>
        <SwiperSlide style={activeIndex === 1 ? { transform: "rotateY(180deg)" } : {}}>
          <div className="flip">  
            <div className="card">
              <div className="front">                
              </div>              
              <div className="back">                
              </div>
            </div>
          </div>
          1
        </SwiperSlide>
        <SwiperSlide style={activeIndex === 2 ? { transform: "rotateY(180deg)" } : {}}>
          <div className="flip">  
            <div className="card">
              <div className="front">                
              </div>              
              <div className="back">                
              </div>
            </div>
          </div>
          2
        </SwiperSlide>
        <SwiperSlide style={activeIndex === 3 ? { transform: "rotateY(180deg)" } : {}}>
        <div className="flip">  
            <div className="card">
              <div className="front">                
              </div>              
              <div className="back">                
              </div>
            </div>
          </div>
          3
        </SwiperSlide>
        <SwiperSlide style={activeIndex === 4 ? { transform: "rotateY(180deg)" } : {}}>
          <div className="flip">  
            <div className="card">
              <div className="front">                
              </div>              
              <div className="back">                
              </div>
            </div>
          </div>
          4
        </SwiperSlide>
        <SwiperSlide style={activeIndex === 5 ? { transform: "rotateY(180deg)" } : {}}>
          <div className="flip">  
            <div className="card">
              <div className="front">                
              </div>              
              <div className="back">                
              </div>
            </div>
          </div>
          5
        </SwiperSlide>
        <SwiperSlide style={activeIndex === 6 ? { transform: "rotateY(180deg)" } : {}}>
          <div className="flip">  
            <div className="card">
              <div className="front">                
              </div>              
              <div className="back">                
              </div>
            </div>
          </div>
          6
        </SwiperSlide>
        <SwiperSlide style={activeIndex === 7 ? { transform: "rotateY(180deg)" } : {}}>
          <div className="flip">  
            <div className="card">
              <div className="front">                
              </div>              
              <div className="back">                
              </div>
            </div>
          </div>
          7
        </SwiperSlide>
        <SwiperSlide style={activeIndex === 8 ? { transform: "rotateY(180deg)" } : {}}>
          <div className="flip">  
            <div className="card">
              <div className="front">                
              </div>              
              <div className="back">                
              </div>
            </div>
          </div>
          8
        </SwiperSlide>
        <SwiperSlide style={activeIndex === 9 ? { transform: "rotateY(180deg)" } : {}}>
          <div className="flip">  
            <div className="card">
              <div className="front">                
              </div>              
              <div className="back">                
              </div>
            </div>
          </div>
          9
        </SwiperSlide>
        <SwiperSlide style={activeIndex === 10 ? { transform: "rotateY(180deg)" } : {}}>
          <div className="flip">  
            <div className="card">
              <div className="front">                
              </div>              
              <div className="back">                
              </div>
            </div>
          </div>
          10
        </SwiperSlide>
        <SwiperSlide style={activeIndex === 11 ? { transform: "rotateY(180deg)" } : {}}>
          <div className="flip">  
            <div className="card">
              <div className="front">                
              </div>              
              <div className="back">                
              </div>
            </div>
          </div>
          11
        </SwiperSlide>
        <SwiperSlide style={activeIndex === 12 ? { transform: "rotateY(180deg)" } : {}}>
          <div className="flip">  
            <div className="card">
              <div className="front">                
              </div>              
              <div className="back">                
              </div>
            </div>
          </div>
          12
        </SwiperSlide>
        <SwiperSlide style={activeIndex === 13 ? { transform: "rotateY(180deg)" } : {}}>
          <div className="flip">  
            <div className="card">
              <div className="front">                
              </div>              
              <div className="back">                
              </div>
            </div>
          </div>
          13
        </SwiperSlide>
        <SwiperSlide style={activeIndex === 14 ? { transform: "rotateY(180deg)" } : {}}>
          <div className="flip">  
            <div className="card">
              <div className="front">                
              </div>              
              <div className="back">                
              </div>
            </div>
          </div>
          14
        </SwiperSlide>








        {/* <SwiperSlide>
          <img src={slide_image} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image5} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image4} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image3} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image2} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image1} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="pic5" className="photos" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}