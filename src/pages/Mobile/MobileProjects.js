import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";
import nose1 from "../../assets/nosemain.svg";
import nose2 from "../../assets/nosemain2.svg";
import nose3 from "../../assets/nosemain3.svg";
import nose4 from "../../assets/nosemain4.svg";
import nose5 from "../../assets/nosemain5.svg";
import fakeTrip1 from "../../assets/faketripmain.svg";
import fakeTrip2 from "../../assets/faketripmain2.svg";
import fakeTrip3 from "../../assets/faketripmain3.svg";
import fakeTrip4 from "../../assets/faketripmain4.svg";

const MobileProjects = () => {
  return (
    <ProjectPage id="Projects">
      <ProjectsContainer>
        <PageTitle>PROJECTS</PageTitle>
        <ProjectsContents>
          <ProjectTitle>NOSE</ProjectTitle>
          <ProjectSubTitle>2022.06(wecode 6인 프로젝트)</ProjectSubTitle>
          <ProjectInfomation>
            <StyledCarousel>
              <div>
                <img src={nose1} alt="nose1" />
              </div>
              <div>
                <img src={nose2} alt="nose2" />
              </div>
              <div>
                <img src={nose3} alt="nose3" />
              </div>
              <div>
                <img src={nose4} alt="nose4" />
              </div>
              <div>
                <img src={nose5} alt="nose5" />
              </div>
            </StyledCarousel>
            <ProjectTextContainer>
              <ProjectTextTitle>
                국내 향수 커머스 사이트 <br /> PAFFEM 클론 프로젝트 입니다.
              </ProjectTextTitle>
              <p>
                짧은 프로젝트 기간동안 개발에 집중하기 위해
                <br /> 디자인/기획 부분만 클론했습니다.
              </p>
              <p>
                이 사이트는 국내 퍼스널 향수를 가이드 해주는 사이트로, perfume
                teller 라는 survey 서비스를 통해 향수
              </p>
              <p>
                처음인 사람들도 설문을 통해
                <br />
                향수를 추천해 주는 기능이 있어 선정했습니다.
              </p>
            </ProjectTextContainer>
            <ButtonContents>
              <a href="https://sandy-thread-f9f.notion.site/NOSE-5ef9e77ad07844b496d10b695dca95fb">
                <BlogButton>프로젝트 후기 Notion</BlogButton>
              </a>
            </ButtonContents>
          </ProjectInfomation>
        </ProjectsContents>
        <ProjectsContents>
          <ProjectTitle>FakeTrip</ProjectTitle>
          <ProjectSubTitle>2022.07(wecode 6인 프로젝트)</ProjectSubTitle>
          <ProjectInfomation>
            <StyledCarousel>
              <div>
                <img src={fakeTrip1} alt="fakeTrip1" />
              </div>
              <div>
                <img src={fakeTrip2} alt="fakeTrip2" />
              </div>
              <div>
                <img src={fakeTrip3} alt="fakeTrip3" />
              </div>
              <div>
                <img src={fakeTrip4} alt="fakeTrip4" />
              </div>
            </StyledCarousel>
            <ProjectTextContainer>
              <ProjectTextTitle>
                국내 여행 커머스 사이트 <br />
                마이리얼트립 클론 프로젝트 입니다.
              </ProjectTextTitle>
              <p>
                짧은 프로젝트 기간동안 개발에 집중하기 위해 <br />
                디자인/기획 부분만 클론했습니다.
              </p>
              <p>
                이 사이트는 여행 예약 커머스 사이트로,
                <br /> 기능 구현은 국내 숙소로 한해 구현했습니다.
              </p>
              <p>
                KaKao 소셜 로그인, Library 를<br /> 다양하게 사용해 볼 수 있는
                프로젝트 였습니다.
              </p>
            </ProjectTextContainer>
            <ButtonContents>
              <a href="https://sandy-thread-f9f.notion.site/FakeTrip-bdbc2e97e520421a952ec320f1d5a3cb">
                <BlogButton>프로젝트 후기 Notion</BlogButton>
              </a>
            </ButtonContents>
          </ProjectInfomation>
        </ProjectsContents>
      </ProjectsContainer>
    </ProjectPage>
  );
};

const ProjectPage = styled.div`
  background-color: #1d809f;
`;

const ProjectsContainer = styled.div`
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

const ProjectsContents = styled.div`
  padding: 3rem;
  margin: 0 auto 2rem;
  width: 100%;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);
`;

const ProjectTitle = styled.div`
  padding-bottom: 0.5rem;
  font-weight: 400;
  font-size: 2.5rem;
  color: #222;
  text-align: center;
`;

const ProjectSubTitle = styled.div`
  margin-bottom: 2rem;
  font-weight: 400;
  font-size: 1.5rem;
  color: #6c757d;
  text-align: center;
  opacity: 0.8;
`;

const ProjectInfomation = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
`;

const StyledCarousel = styled(Carousel)`
  max-width: 23rem !important;
  height: 20rem !important;
  background-color: black;
  color: #f3f3f3;

  img {
    width: 23rem;
    height: 20rem;
  }
`;

const ProjectTextContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: start;
  p {
    margin-bottom: 1rem;
  }
`;

const ProjectTextTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const ButtonContents = styled.div`
  width: 100%;
  margin: 5rem;
`;

const BlogButton = styled.button`
  width: 20rem;
  height: 6rem;
  background-color: black;
  color: white;
  font-size: 2rem;
  font-weight: 700;
  border: 0;
  transition: all 1s;
  &:hover {
    cursor: pointer;
    border: 5px solid yellow;
  }
`;

export default MobileProjects;
