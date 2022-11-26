import React from "react";
import styled from "styled-components";
import frontImage from "../assets/frontEnd.png";
import docker from "../assets/docker.png";
import git from "../assets/git.png";

const Skills = () => {
  return (
    <SkillPage>
      <SkillsContainer>
        <PageTitle>Skills</PageTitle>
        <SkillsContents>
          <SkillsBox>
            <SkillsTitle>FrontEnd</SkillsTitle>
            <FrontImage src={frontImage} alt="frontImage" />
          </SkillsBox>
          <SkillsBox>
            <SkillsTitle>Deployment</SkillsTitle>
            <FrontImage src={docker} alt="docker" />
          </SkillsBox>
          <SkillsBox>
            <SkillsTitle>Version Control</SkillsTitle>
            <FrontImage src={git} alt="git" />
          </SkillsBox>
        </SkillsContents>
      </SkillsContainer>
    </SkillPage>
  );
};

const SkillPage = styled.div`
  width: 100%;
  background-color: yellow;
`;

const SkillsContainer = styled.div`
  width: 100%;
  max-width: 71.25rem;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
`;

const PageTitle = styled.div`
  font-size: 4rem;
  font-weight: 900;
  margin: 0 auto 3rem;
`;

const SkillsContents = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
  height: calc(100% - (7.5rem + 1px));
`;

const SkillsBox = styled.div`
  flex-shrink: 0;
  width: 17rem;
  margin-top: 1.5rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: #f3f3f3;
  box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);
`;

const SkillsTitle = styled.div`
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ccc;
  font-weight: 700;
  font-size: 1.5rem;
  color: #f4623a;
`;

const FrontImage = styled.img`
  width: 100%;
`;

export default Skills;
