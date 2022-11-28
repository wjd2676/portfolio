import React, { useState } from "react";
import styled from "styled-components";
import menuIcon from "../assets/menu.png";
import { Link } from "react-scroll";

const TabletNav = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onClick = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <HeaderContainer>
      <Header>
        <PageTitle to="Top" spy={true} smooth={true}>
          JungHyunJun's Portfolio
        </PageTitle>
        <HeaderIcon src={menuIcon} alt="menuIcon" onClick={() => onClick()} />
      </Header>
      {modalOpen && (
        <HeaderNav modalOpen={modalOpen}>
          <HeaderNavMenu
            to="AboutMe"
            spy={true}
            smooth={true}
            onClick={() => onClick()}
          >
            About me
          </HeaderNavMenu>
          <HeaderNavMenu
            to="Skills"
            spy={true}
            smooth={true}
            onClick={() => onClick()}
          >
            Skills
          </HeaderNavMenu>
          <HeaderNavMenu
            to="Archiving"
            spy={true}
            smooth={true}
            onClick={() => onClick()}
          >
            Archiving
          </HeaderNavMenu>
          <HeaderNavMenu
            to="Projects"
            spy={true}
            smooth={true}
            onClick={() => onClick()}
          >
            Projects
          </HeaderNavMenu>
          <HeaderNavMenu
            to="Career"
            spy={true}
            smooth={true}
            onClick={() => onClick()}
          >
            Career
          </HeaderNavMenu>
        </HeaderNav>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  transition: all 1s;
  background-color: white;
  z-index: 10;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
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

const HeaderIcon = styled.img`
  width: 30px;
  height: 30px;

  &:hover {
    cursor: pointer;
  }
`;

const HeaderNav = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
  max-height: 15.75rem;
  background-color: #fff;
  transition: max-height 0.2s ease;
  padding-left: 2rem;
  perspective: 1000px;
  z-index: 100;
  animation: growDown 300ms ease-in-out forwards;
  transform-origin: top center;
  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;

const HeaderNavMenu = styled(Link)`
  display: inline-block;
  margin-bottom: 1rem;
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
