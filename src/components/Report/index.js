import React from 'react';
import styled from 'styled-components';

import Chart from '../../assets/jsonchart.png';

const MainChart = styled.img`
  margin: 24px 0 18px 0;
  width: 90%;
`;

const Report = () => {
  return (
    <div>
      <h1>Report</h1>

      <MainChart src={Chart} alt='Report Chart' />
    </div>
  );
};

export default Report;
