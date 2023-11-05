// DataViewer.js
import styled from 'styled-components';
import LineChart from './LineChart';

function DataViewer() {
  return (
    <Wrapper>
      <Header>What's the temp?</Header>
      <LineChart />
    </Wrapper>
  );
}

const Header = styled.h1`
  font-family: 'Comfortaa', cursive;
  font-size: 4rem;
  margin-bottom: 1rem;
  text-align: center;
`

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export default DataViewer;