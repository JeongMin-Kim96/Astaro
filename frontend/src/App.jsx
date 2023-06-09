import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Background } from "@component/common/Background";
import Header from "@component/common/Header";
import Body from "./component/common/Body";
import { Main } from "@page/Main";
import TarotService from "@page/tarot/TarotService";
import TodayTaro from "@page/tarot/TodayTaro";
import MemberLogin from "@page/member/MemberLogin";
import MemberSignup from "@page/member/MemberSignup";
import MemberMypage from "@page/member/MemberMypage";
import MessageListPage from "@page/message/MessageList";
import ChatPage from "@page/shootingStar/ChatPage";
import StarPage from "@page/shootingStar/StarPage";
import TarotResult from "@page/tarot/TarotResult";
import FlipGame from "@page/tarot/FlipGame";
import TaroStoryPage from "@page/shootingStar/TaroStoryPage";
import BlackHolePage from "@page/shootingStar/BlackHolePage";
import TarotTest from "@page/tarot/TarotTest";
import Landing from "./page/Landing";
import music from "@assets/A_Quiet_Thought-Wayne_Jones.mp3";
import music2 from "@assets/cinematic_documentary_light.mp3";
import "./App.css";
import TarotStory from "@page/tarot/TarotStory";
import { IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io";
import Medium from "@component/text/Medium";
import VolumeButton from "@component/VolumeButton";

function App() {
  const [backgroundAudio] = useState(new Audio(music));
  const [audioToggle, setAudioToggle] = useState(true);

  const audioPlay = () => {
    backgroundAudio.loop = true;
    backgroundAudio.play();
    setAudioToggle(true);
  };

  const audioPause = () => {
    backgroundAudio.loop = false;
    backgroundAudio.pause();
    setAudioToggle(false);
  };

  return (
    <div className="App">
      <Background style={{ position: "relative", zIndex: -100 }} />
      {audioToggle ? (
        <VolumeButton onClick={audioPause} style={{ height: "15px", padding: "2vh 0"}}>
          <Medium>
            <IoMdVolumeHigh />
          </Medium>
        </VolumeButton>
      ) : (
        <VolumeButton onClick={audioPlay} style={{ height: "9%" }}>
          <Medium>
            <IoMdVolumeOff />
          </Medium>
        </VolumeButton>
      )}

      <Router>
        <Header />
        <Body>
          <Routes>
            <Route path="/" element={<Landing audio={audioPlay} />} />
            <Route path="/home" element={<Main />} />
            <Route path="/tarot" element={<TarotService />} />
            <Route path="/result" element={<TarotResult />} />
            <Route path="/todaytaro" element={<TodayTaro />} />
            <Route path="/tarot/story" element={<TarotStory />} />
            <Route path="/login" element={<MemberLogin />} />
            <Route path="/signup" element={<MemberSignup />} />
            <Route path="/mypage" element={<MemberMypage />} />
            <Route path="/message/message-list" element={<MessageListPage />} />
            <Route path="/star/chat/:id" element={<ChatPage />} />
            <Route path="/star" element={<StarPage />} />
            <Route path="/star/black-hole" element={<BlackHolePage />} />
            <Route path="/flipgame" element={<FlipGame />} />
            <Route path="/star/taro-story" element={<TaroStoryPage />} />
            <Route path="/tarottest" element={<TarotTest />} />
          </Routes>
        </Body>
      </Router>
    </div>
  );
}

export default App;
