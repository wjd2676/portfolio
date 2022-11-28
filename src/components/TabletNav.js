import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const TabletNav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    });
  });

  const isScrollMoved = scrollPosition < 5;

  return (
    <HeaderContainer isScrollMoved={isScrollMoved}>
      <Header>
        <PageTitle to="Top" spy={true} smooth={true}>
          JHJ
        </PageTitle>
        <HeaderNav>
          <HeaderNavMenu to="AboutMe" spy={true} smooth={true}>
            About me
          </HeaderNavMenu>
          <HeaderNavMenu to="Skills" spy={true} smooth={true}>
            Skills
          </HeaderNavMenu>
          <HeaderNavMenu to="Archiving" spy={true} smooth={true}>
            Archiving
          </HeaderNavMenu>
          <HeaderNavMenu to="Projects" spy={true} smooth={true}>
            Projects
          </HeaderNavMenu>
          <HeaderNavMenu to="Career" spy={true} smooth={true}>
            Career
          </HeaderNavMenu>
        </HeaderNav>
      </Header>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  transition: all 1s;
  background-color: ${({ isScrollMoved }) =>
    isScrollMoved ? "transperate" : "#f3f3f3"};
  z-index: 10;
`;

const Header = styled.div`
  width: 100%;
  max-width: 71.25rem;
  height: 4.5rem;
  padding: 1.25rem 2rem;
  margin: 0 auto;
`;

const PageTitle = styled(Link)`
  display: inline-block;
  font-weight: 900;
  font-size: 2rem;
  color: black;
  line-height: 2rem;
  cursor: pointer;
`;

const HeaderNav = styled.div`
  float: right;
`;

const HeaderNavMenu = styled(Link)`
  display: inline-block;
  padding: 0 1rem;
  font-weight: 700;
  font-size: 1rem;
  color: black;
  line-height: 2rem;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    font-weight: 900;
    font-size: 1.5rem;
  }
`;

export default TabletNav;
