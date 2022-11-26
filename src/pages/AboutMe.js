import React from "react";
import styled from "styled-components";
import birthIcon from "../assets/date-of-birth.png";
import emailIcon from "../assets/email.png";
import educateIcon from "../assets/graduation.png";
import locationIcon from "../assets/location.png";
import phoneIcon from "../assets/telephone.png";
import userIcon from "../assets/user.png";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <PageTitle>AboutMe</PageTitle>
      <ContactContainer>
        {ABOUT_ME_DATA.map(data => (
          <ContactContents key={data.id}>
            <ContactBox>
              <ContactIcon src={data.icon} />
              <ContactTextContainer>
                <ContactTitle>{data.title}</ContactTitle>
                <ContactText>{data.text}</ContactText>
              </ContactTextContainer>
            </ContactBox>
          </ContactContents>
        ))}
      </ContactContainer>
    </AboutMeContainer>
  );
};

const AboutMeContainer = styled.div`
  width: 100%;
  height: 480px;
  background-color: #f3f3f3;
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

const ContactContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const ContactContents = styled.div`
  display: block;
  width: 33.333333%;
  margin-bottom: 2rem;
`;

const ContactBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  max-width: 14rem;
  margin: 0 auto;
  opacity: 0.8;
`;

const ContactIcon = styled.img`
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  margin-top: 0.2rem;
  margin-right: 2rem;
`;

const ContactTextContainer = styled.div`
  box-sizing: border-box;
  text-align: start;
`;

const ContactTitle = styled.div`
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 1.25rem;
`;

const ContactText = styled.div`
  font-weight: 400;
  font-size: 1rem;
`;

const ABOUT_ME_DATA = [
  {
    id: 1,
    icon: `${userIcon}`,
    title: "이름",
    text: "정현준",
  },
  {
    id: 2,
    icon: `${birthIcon}`,
    title: "생년월일",
    text: "95.02.16",
  },
  {
    id: 3,
    icon: `${locationIcon}`,
    title: "주소지",
    text: "경기도 용인시 처인구",
  },
  {
    id: 4,
    icon: `${phoneIcon}`,
    title: "연락처",
    text: "010-9331-5947",
  },
  {
    id: 5,
    icon: `${emailIcon}`,
    title: "이메일",
    text: "wjd2676@gmail.com",
  },
  {
    id: 6,
    icon: `${educateIcon}`,
    title: "교육",
    text: "WECODE \n 34기 수료",
  },
];

export default AboutMe;
