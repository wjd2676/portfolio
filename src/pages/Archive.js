import React from "react";
import styled from "styled-components";
import nostionTitle from "../assets/nostion.png";
import githubTitle from "../assets/github.png";

const Archive = () => {
  return (
    <ArchivePage id="Archiving">
      <ArchiveContainer>
        <PageTitle>ARCHIVE</PageTitle>
        <ArchiveContents>
          {ABOUT_ME_DATA.map(data => (
            <SkillsBox key={data.id}>
              <ImageTitleContents>
                <ImageTitle src={data.titleImage} alt={data.title} />
              </ImageTitleContents>
              <ArchiveLink href={data.link}>{data.title}</ArchiveLink>
              <Archiving>
                <ArchivingTitle>{data.archiveTitle}</ArchivingTitle>
                <ArchivingContainer>
                  {data.text.map(el => (
                    <ArchivingList key={el.id}>{el.text}</ArchivingList>
                  ))}
                </ArchivingContainer>
              </Archiving>
            </SkillsBox>
          ))}
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
  display: border-box;
  width: 26rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: #f5f5f5;
  text-decoration: none;
`;

const ImageTitleContents = styled.div`
  display: block;
  width: 12rem;
  margin-bottom: 1rem;
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

const Archiving = styled.div`
  color: black;
`;

const ArchivingTitle = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  font-size: 18px;
  font-weight: 600;
`;

const ArchivingContainer = styled.ul`
  padding-left: 1rem;
  margin: 0;
  text-align: start;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const ArchivingList = styled.li`
  margin-bottom: 1rem;
`;

const ABOUT_ME_DATA = [
  {
    id: 1,
    titleImage: `${githubTitle}`,
    title: "Github",
    link: "https://github.com/wjd2676",
    archiveTitle: "개인공부 소스 코드 저장소입니다.",
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
    titleImage: `${nostionTitle}`,
    title: "Notion",
    link: "https://sandy-thread-f9f.notion.site/Front-End-abf5b8c637fb4a2a8a11a48be76c7209",
    archiveTitle: "기록을 위한 개인 블로그입니다.",
    text: [
      {
        id: 1,
        text: "기억보다 기록을, 정리하기위해 블로그를 작성",
      },
      {
        id: 2,
        text: "프로젝트 관련 후기, 느낌점 들을 정리",
      },
      {
        id: 3,
        text: "개발자를 시작하면서 공부한 웹 지식 정리",
      },
    ],
  },
];

export default Archive;
