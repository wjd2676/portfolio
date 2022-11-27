import React from "react";
import styled from "styled-components";
import TopImage from "../assets/TopImage.svg";
import TopImage2 from "../assets/TopImage2.svg";

const Top = () => {
  return (
    <div id="Top">
      <MainImageConatiner>
        <MainImage src={TopImage} alt="mainImage" />
        <MainImage2 src={TopImage2} alt="mainImage2" />
      </MainImageConatiner>
      <MainPageContents>
        <MainPageTitle>정현준</MainPageTitle>
        <MainPageTitle>웹 개발자 포트폴리오</MainPageTitle>
        <IntroduceContainer>
          <div>안녕하세요.</div>
          <div>
            Frontend 개발자 정현준입니다. 이 페이지는 저를 소개하는 페이지
            입니다.
          </div>
          <div>저에 대해 궁금하시다면, 아래의 컨텐츠를 봐주세요!</div>
        </IntroduceContainer>
      </MainPageContents>
    </div>
  );
};

const MainImageConatiner = styled.div`
  display: flex;
  flex-direction: row;
  height: 750px;
`;

const MainImage = styled.img`
  height: 100%;
  opacity: 0.3;
`;

const MainImage2 = styled.img`
  height: 100%;
  opacity: 0.3;
`;

const MainPageContents = styled.div`
  position: absolute;
  top: 5%;
  left: 20%;
  width: 100%;
  max-width: 71.25rem;
  margin: 0 auto;
  padding: 0 calc(4rem + 4.5rem) 2rem 4rem;
  text-align: center;
`;

const MainPageTitle = styled.div`
  font-weight: 700;
  font-size: 4rem;
  color: black;
  word-break: keep-all;
`;

const IntroduceContainer = styled.div`
  margin-top: 5rem;
  font-weight: 500;
  font-size: 1.5rem;
  color: black;
  word-break: keep-all;
`;

export default Top;
