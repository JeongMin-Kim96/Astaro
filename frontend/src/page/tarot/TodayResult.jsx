import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "@css/todayresult.css";
import { useNavigate } from "react-router-dom";
import Button from "@component/Button";
import RowContainer from "@component/layout/RowContainer";
import axios from "@utils/axiosInstance";
import { Modal } from "@component/SNSshare";
import html2canvas from "html2canvas";
import * as PropTypes from "prop-types";
import ColContainer from "@component/layout/ColContainer";
import Medium from "@component/text/Medium";
import Small from "@component/text/Small";

function UpDowncontainer(props) {
  return null;
}

UpDowncontainer.propTypes = { children: PropTypes.node };

export function TodayResult() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    console.log("Modal opened");
    captureScreenshot();
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const navigate = useNavigate();

  const [result, setResult] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/taro-service/tarot/today`)
      .then((res) => {
        setResult(res.data);
      })
      .catch(() => {});
  }, []);


  const captureScreenshot = () =>{
    html2canvas(document.getElementById("todayresultcard"), {
      logging: true,
      letterRendering: 1,
      backgroundColor: "black",
      allowTaint: false,
      useCORS: true,
    }).then(function (canvas) {
      const downloadLink = document.createElement("a");
      downloadLink.download = "Horoscope.png";
      downloadLink.href = canvas.toDataURL();
      downloadLink.click();
    });
  }; 

  return (
    <>
    <ColContainer
      justify="start"
      style={{ position: "relative", width: "100%", height: "inherit", overflowY:"scroll" }}
    >
      <ColContainer
        width="80%"
        justify="start"
        height="100%"
        style={{ top: "20px", position: "absolute", paddingTop: "2vh", backgroundColor:'rgba(0,0,0,0.1)', maxWidth:"600px" }}
        id="todayresultcard"
      >
        <TodayMainCard>
          <img
            src={result.mainImageUrl}
            alt=""
            height="100%"
            style={{
              position: "relative",
              zIndex: 2,
            }}
          />
        </TodayMainCard>
        <Medium style={{ margin: "4vh 0" }}>{result.cardName}</Medium>
        <Small style={{ marginBottom: "2vh", fontSize:'18px' }}>{result.content}</Small>
        <RowContainer style={{ margin: "2vh 0" }} height="inherit" align="start">
          <TodayTarotCard>
            상성이 좋은 카드
            <div className="today-subcard">
              <img src={result.goodImageUrl} alt="" width="50vh" />
            </div>
            {result.goodCardName}
          </TodayTarotCard>
          <TodayTarotCard>
            상성이 나쁜 카드
            <div className="today-subcard">
              <img src={result.badImageUrl} alt="" width="50vh" />
            </div>
            {result.badCardName}
          </TodayTarotCard>
        </RowContainer>
      </ColContainer>
    </ColContainer>
      <RowContainer
        width="100%"
        style={{
          maxWidth: "600px",
          justifyContent: "space-evenly",
          position: "relative",
        }}
        >
        <Button height="20px" onClick={() => navigate("/")} >홈으로</Button>
        <Button height="20px" onClick={openModal}>SNS공유</Button>
        <Modal open={modalOpen} close={closeModal} />
      </RowContainer>
    </>
  );
}

const TodayMainCard = styled.div`
  width: auto;
  height: 30vh;
  position: relative;
  &::after {
    height: 100%;
    content: "";
    border-radius: 8px;
    background-image: linear-gradient(
      var(--rotate),
      #fffde7,
      #fdd835 43%,
      #f57f17
    );
    position: absolute;
    z-index: 0;
    top: -2%;
    left: -2.5%;
    animation: spin 1s linear infinite, light-effect 1s forwards;
  }
  animation: floating-card 1s linear infinite alternate;
  @keyframes floating-card {
    0% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(5px);
    }
  }
`;

const TodayTarotCard = styled.div`
  flex: 1;
  font-family: TAEBAEKmilkyway;
  text-align: center;
  font-size: 14px;
  height: 10vh;
  color: white;
  & > .today-subcard > img {
    max-width: 120px;
  }
`;
