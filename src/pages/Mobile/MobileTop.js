import React from "react";
import styled from "styled-components";
import TopImage from "../../assets/TopImage.svg";
import TopImage2 from "../../assets/TopImage2.svg";

const MobileTop = () => {
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
          <div>Frontend 개발자 정현준입니다. </div>
          <div> 이 페이지는 저를 소개하는 페이지 입니다.</div>
          <div>저에 대해 궁금하시다면</div>
          <div> 아래의 컨텐츠를 봐주세요!</div>
        </IntroduceContainer>
      </MainPageContents>
    </div>
  );
};

const MainImageConatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 47rem;
  overflow-x: hidden;
`;

const MainImage = styled.img`
  opacity: 0.3;
`;

const MainImage2 = styled.img`
  opacity: 0.3;
`;

const MainPageContents = styled.div`
  position: absolute;
  top: 2%;
  left: 1%;
  max-width: 71.25rem;
  padding: 0 auto;
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

export default MobileTop;
