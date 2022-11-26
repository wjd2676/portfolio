import React from "react";
import styled from "styled-components";
import nostionTitle from "../assets/nostion.png";
import githubTitle from "../assets/github.png";

const Archive = () => {
  return (
    <ArchivePage>
      <ArchiveContainer>
        <PageTitle>ARCHIVE</PageTitle>
        <ArchiveContents>
          <SkillsBox>
            <ImageTitle src={githubTitle} alt="githubTitle" />
            <ArchiveLink href="https://github.com/wjd2676">Git Hub</ArchiveLink>
          </SkillsBox>
          <SkillsBox>
            <ImageTitle src={nostionTitle} alt="nostionTitle" />
            <ArchiveLink href="https://sandy-thread-f9f.notion.site/Front-End-abf5b8c637fb4a2a8a11a48be76c7209">
              Notion
            </ArchiveLink>
          </SkillsBox>
        </ArchiveContents>
      </ArchiveContainer>
    </ArchivePage>
  );
};

const ArchivePage = styled.div`
  width: 100%;
  background-color: black;
`;

const ArchiveContainer = styled.div`
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
  color: #f3f3f3;
`;

const ArchiveContents = styled.div`
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
`;

const ImageTitle = styled.img`
  width: 100%;
  height: 60px;
`;

const ArchiveLink = styled.a`
  margin-bottom: 1rem;
  color: #258ddb;
  font-weight: 700;
`;

const ABOUT_ME_DATA = [
  {
    id: 1,
    title: "개인공부 소스 코드 저장소입니다.",
    text: [
      {
        id: 1,
        text: "과거 진행한 프로젝트의 소스 코드",
      },
      {
        id: 2,
        text: "혼자서 코딩 연습을 위해 작성한 소스 코드",
      },
      {
        id: 3,
        text: "부트캠프 때 협업을 위한 레포 생성",
      },
    ],
  },
  {
    id: 2,
    title: "공부한 것을 바탕으로 작성한 개인 블로그입니다.",
    text: [
      {
        id: 1,
        text: "기억보다 기록을, 정리하기위해 블로그를 작성하고있습니다.",
      },
      {
        id: 2,
        text: "",
      },
      {
        id: 3,
        text: "",
      },
    ],
  },
];

export default Archive;
