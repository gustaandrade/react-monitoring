import React from 'react';
import styled from 'styled-components';

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from '@trendmicro/react-sidenav';

import HomeIcon from '@mui/icons-material/Home';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';

import logo from '../../assets/logo_proj.png';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

const MainLogo = styled.img`
  margin: 24px 0 18px 0;
  width: 200px;
`;

const Sidenav = ({ onHomeClicked, onRegisterClicked, onReportClicked }) => {
  return (
    <SideNav
      expanded
      onSelect={selected => {
        switch (selected) {
          case 'home':
            onHomeClicked();
            break;
          case 'register':
            onRegisterClicked();
            break;
          case 'reports':
            onReportClicked();
            break;
          default:
            break;
        }
      }}
    >
      {/* <SideNav.Toggle /> */}

      <MainLogo src={logo} alt='FIAP e Bayer' />

      <SideNav.Nav defaultSelected='home'>
        <NavItem eventKey='home'>
          <NavIcon>
            <IconWrapper>
              <HomeIcon />
            </IconWrapper>
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>

        <NavItem eventKey='register'>
          <NavIcon>
            <IconWrapper>
              <AppRegistrationIcon />
            </IconWrapper>
          </NavIcon>
          <NavText>Cadastrar</NavText>
        </NavItem>

        <NavItem eventKey='reports'>
          <NavIcon>
            <IconWrapper>
              <AssignmentReturnedIcon />
            </IconWrapper>
          </NavIcon>
          <NavText>Relatórios</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default Sidenav;
