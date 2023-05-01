import "./App.css";
import "@scss/main.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WhiteholeTest } from "@page/WhiteholeTest";
import { Main } from "@page/Main";
import TarotService from "@page/TarotService";
import TodayTaro from "@page/TodayTaro";
import MemberLogin from "@page/member/MemberLogin";
import MemberSignup from "@page/member/MemberSignup";
import MemberMypage from "@page/member/MemberMypage";
import { Background } from "@component/Background";

function App() {
  return (
    <div className="App">
      <Background style={{ position: "relative", zIndex: -100 }} />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/prompt" element={<WhiteholeTest />} />
          <Route path="/tarot" element={<TarotService />} />
          <Route path="/todaytaro" element={<TodayTaro />} />
          <Route path="/member/memberlogin" element={<MemberLogin />} />
          <Route path="/member/membersignup" element={<MemberSignup />} />
          <Route path="/member/membermypage" element={<MemberMypage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
