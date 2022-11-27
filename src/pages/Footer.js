import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2022. JungHyunJun. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  height: 11rem;
  padding-top: 3rem;
  background-color: #222;
  text-align: center;
`;

const FooterText = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: #f5f5f5;
`;

export default Footer;
