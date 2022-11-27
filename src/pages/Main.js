import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Top from "./Top";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Archive from "./Archive";
import Career from "./Career";
import Footer from "./Footer";
import Projects from "./Projects";

const Main = () => {
  return (
    <MainContainer>
      <Nav />
      <Top />
      <AboutMe />
      <Skills />
      <Archive />
      <Projects />
      <Career />
      <Footer />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  width: 98vw;
`;

export default Main;
