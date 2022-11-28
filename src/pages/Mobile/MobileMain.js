import React from "react";
import styled from "styled-components";
import MobileNav from "../../components/MobileNav";
import MobileTop from "./MobileTop";
import MobileAboutMe from "./MobileAboutMe";
import MobileSkills from "./MobileSkills";
import MobileArchive from "./MobileArchive";
import MobileProjects from "./MobileProjects";
import MobileCareer from "./MobileCareer";
import MobileFooter from "./MobileFooter";

const MobileMain = () => {
  return (
    <MainContainer>
      <MobileNav />
      <MobileTop />
      <MobileAboutMe />
      <MobileSkills />
      <MobileArchive />
      <MobileProjects />
      <MobileCareer />
      <MobileFooter />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  width: 98vw;
`;

export default MobileMain;
