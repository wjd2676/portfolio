import React from "react";
import styled from "styled-components";
import Top from "./Top";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Archive from "./Archive";

const Main = () => {
  return (
    <MainContainer>
      <Top />
      <AboutMe />
      <Skills />
      <Archive />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  width: 98vw;
`;

export default Main;
