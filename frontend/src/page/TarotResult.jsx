import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "@/css/swiper-custom.css";
import styled from "styled-components";
import UpDownContainer from "@component/layout/UpDownContainer";
import Medium from "@component/text/Medium";
import ColContainer from "@component/layout/ColContainer";
import GapH from "@component/layout/GapH";
import Small from "@component/text/Small";
import TarotCard from "@component/TarotCard";
import { useSelector } from "react-redux";
import tarotCardArr from "@assets/TarotCardArr";

SwiperCore.use([Pagination]);

const SlideWrapper = styled.div`
  width: 400px;
`;

const PaginationWrapper = styled.div`
  position: absolute;
  bottom: 5%; // 이 부분을 변경하였습니다.
  left: 50%;
  transform: translateX(-50%);
`;

const StyledSwiper = styled(Swiper)`
  margin: 0;
  height: 100%;
`;

const ResultDiv = styled.div`
  width:80vw;
  max-width: 400px;
`

function TarotResult() {
  const tarotResults = useSelector((state) => state.tarot.stateResults);
  const dalleImgUrl = useSelector((state) => state.tarot.stateImgUrl);
  const respStory = useSelector((state) => state.tarot.stateStory);
  const tarotCardsSeq = useSelector((state) => state.tarot.stateCardsSeq);

  return (
    <UpDownContainer height="80vh">
      <StyledSwiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          dynamicBullets: true,
          direction: "horizontal",
        }}
      >
        <SwiperSlide>
          <ColContainer height="100%" className="tarot-result">
            <img width="200px" src={tarotCardArr[0].image}  alt={tarotCardArr[0]}/>
            <GapH height="10vh"/>
            <ResultDiv>
              <Small style={{lineHeight:"2em"}}>{tarotResults[0]}</Small>
            </ResultDiv>
          </ColContainer>
          </SwiperSlide>
        <SwiperSlide>
          <SlideWrapper>
            <Medium>{tarotResults[1]}</Medium>
          </SlideWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <SlideWrapper>
            <Small>{tarotResults[2]}</Small>
          </SlideWrapper>
        </SwiperSlide>

        <SwiperSlide>
          <SlideWrapper>
            <ColContainer
              id="slide-from-story"
              style={{ position: "absolute" }}
              className="slide-in right-hidden"
            >
              <GapH height="10vh" />
              <Medium>- 당신의 이야기 -</Medium>
              <ColContainer width="80vw" gap="35px">
                <div className="selected-tarocard">
                  <img alt="img" src={dalleImgUrl} width="256px" height="256px" />
                </div>
                <Small lineHeight="2em">{respStory}</Small>
              </ColContainer>
            </ColContainer>
          </SlideWrapper>
        </SwiperSlide>
      </StyledSwiper>
      <PaginationWrapper>
        <div className="swiper-pagination" />
      </PaginationWrapper>
    </UpDownContainer>
  );
};

export default TarotResult;