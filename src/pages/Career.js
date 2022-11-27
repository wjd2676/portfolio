import React from "react";
import styled from "styled-components";
import endoaiImage from "../assets/endoai.png";

const Career = () => {
  return (
    <CareerPage id="Career">
      <CareerContainer>
        <CareerTitle>Career</CareerTitle>
        <CareerContents>
          <CareerLogoContents>
            <CareerLogoBox>
              <CareerLogo src={endoaiImage} alt="endoai" />
            </CareerLogoBox>
          </CareerLogoContents>
          <TextContents>
            <CopTitle>ENDO AI</CopTitle>
            <CopDate>2022.09 ~ 2022.12</CopDate>
            <CopInfomation>
              <p>
                (주)엔도아이는 임상의가 직접 수집 가공한 전향적 데이터를
                기반으로 차별화된 소화기관 전문 <br /> 인공지능 솔루션을
                제공하고 한국의 의료서비스의 글로벌화에 앞장섭니다.
              </p>
              <br />
              <p>
                대장내시경 임상에서 발생하는 의료진 간 숙련도 차이 문제를
                경감시키고, 의료진 편의성 증진과 <br />
                효율적 검사 수행을 가능토록 하여 Human error를 최소화시키면서
                대장 용종 및 병변의 검출 정확도를 향상시킵니다.
              </p>
            </CopInfomation>
            <MyCareerContents>
              <h4>▎Local 환경에서의 웹 프론트 작성</h4>
              <h5>2022.09 ~ 2022.12</h5>
              <MyCareerList>회원가입/로그인 기능 개발</MyCareerList>
              <MyCareerList>
                검사 기록 조회를 위한 DatePicker기능 개발
              </MyCareerList>
              <MyCareerList>검사 리스트의 pagenation 기능 개발</MyCareerList>
              <MyCareerList>
                그룹 생성,읽기,삭제,업데이트(CRUD) 기능 개발
              </MyCareerList>
              <MyCareerList>HTML to Image, PDF 기능 개발</MyCareerList>
              <MyCareerList>Email js, KaKao 공유 기능 개발</MyCareerList>
              <MyCareerList>Docker Deployment</MyCareerList>
            </MyCareerContents>
          </TextContents>
        </CareerContents>
        <ButtonContents>
          <a href="https://sandy-thread-f9f.notion.site/EndoAI-2022-09-15-2022-12-15-39fe85842db94ba8be1fb06aa2149737">
            <BlogButton>프로젝트 후기 Notion</BlogButton>
          </a>
        </ButtonContents>
      </CareerContainer>
    </CareerPage>
  );
};

const CareerPage = styled.div`
  width: 100%;
  background-color: white;
`;

const CareerContainer = styled.div`
  width: 100%;
  max-width: 71.25rem;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
`;

const CareerTitle = styled.div`
  font-size: 4rem;
  font-weight: 900;
  margin: 0 auto 3rem;
  color: black;
`;

const CareerContents = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const CareerLogoContents = styled.div`
  padding-right: 3rem;
  border-right: 1px solid #ccc;
`;

const CareerLogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 15rem;
  height: 15rem;
  border: 1px solid #ccc;
  border-radius: 10rem;
  background-color: #fff;
`;

const CareerLogo = styled.img`
  display: block;
  flex-shrink: 0;
  width: 90%;
`;

const TextContents = styled.div`
  padding-left: 3rem;
  text-align: start;
`;

const CopTitle = styled.div`
  padding-bottom: 0.5rem;
  font-weight: 900;
  font-size: 1.8rem;
`;

const CopDate = styled.div`
  padding-bottom: 1rem;
  font-weight: 400;
  font-size: 1.5rem;
  color: #6c757d;
`;

const CopInfomation = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  text-align: start;
`;

const MyCareerContents = styled.ul`
  padding-left: 1rem;
  margin: 1rem 0;

  h4 {
    margin: 2rem 0 1rem -1rem;
    font-size: 1.5rem;
    color: #222;
  }
  h5 {
    margin: 0 0 1rem -1rem;
    font-size: 1.5rem;
    font-weight: 400;
    color: #6c757d;
  }
`;

const MyCareerList = styled.li`
  margin-bottom: 1rem;
`;

const ButtonContents = styled.div`
  margin: 5rem;
`;

const BlogButton = styled.button`
  width: 30rem;
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

export default Career;
