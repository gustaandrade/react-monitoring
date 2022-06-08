import { useState } from 'react';
import styled from 'styled-components';

import Sidenav from './components/Sidenav';
import Chart from './components/Chart';
import Dataset from './components/Dataset';
import Register from './components/Register';
import Report from './components/Report';

import './App.css';

const MainContentWrapper = styled.div`
  margin-left: 20%;
`;

function App() {
  const [isHomeEnabled, setIsHomeEnabled] = useState(true);
  const [isRegisterEnabled, setIsRegisterEnabled] = useState(false);
  const [isReportEnabled, setIsReportEnabled] = useState(false);

  const onHomeClicked = () => {
    setIsHomeEnabled(true);
    setIsReportEnabled(false);
    setIsRegisterEnabled(false);
  };

  const onRegisterClicked = () => {
    setIsHomeEnabled(false);
    setIsReportEnabled(false);
    setIsRegisterEnabled(true);
  };

  const onReportClicked = () => {
    setIsHomeEnabled(false);
    setIsReportEnabled(true);
    setIsRegisterEnabled(false);
  };

  return (
    <div className='App'>
      <div>
        <Sidenav
          onHomeClicked={onHomeClicked}
          onRegisterClicked={onRegisterClicked}
          onReportClicked={onReportClicked}
        />
      </div>
      <MainContentWrapper>
        {isHomeEnabled && (
          <>
            <Chart />
            <Dataset />
          </>
        )}
        {isRegisterEnabled && <Register />}
        {isReportEnabled && <Report />}
      </MainContentWrapper>
    </div>
  );
}

export default App;
