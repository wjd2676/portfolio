import React from "react";
import styled from "styled-components";
import TabletNav from "../../components/TabletNav";
import TabletTop from "./TabletTop";
import TabletAboutMe from "./TabletAboutMe";
import TabletSkills from "./TabletSkills";
import TabletArchive from "./TabletArchive";
import TabletProjects from "./TabletProjects";
import TabletCareer from "./TabletCareer";
import TabletFooter from "./TabletFooter";

const TabletMain = () => {
  return (
    <MainContainer>
      <TabletNav />
      <TabletTop />
      <TabletAboutMe />
      <TabletSkills />
      <TabletArchive />
      <TabletProjects />
      <TabletCareer />
      <TabletFooter />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  width: 98vw;
`;

export default TabletMain;
