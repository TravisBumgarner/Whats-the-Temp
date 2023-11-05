// DataViewer.js
import styled from 'styled-components';
import LineChart from './LineChart';
import MoreFromCreator from './MoreFromCreator';

function DataViewer() {
  return (
    <>
      <Wrapper>
        <Header>What's the temp in my van?</Header>
        <LineChart />
        <Text>Measure realtime temperature with Boron LTE microcontroller. Post data to Firebase cloud function webhook for storage in Firestore. Visualize with React. Written with TypeScript.</Text>
      </Wrapper>
      <MoreFromCreator />
    </>
  );
}

const Header = styled.h1`
  font-family: 'Comfortaa', cursive;
  font-size: 4rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #4b80c0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Text = styled.p`
  font-family: 'Comfortaa', cursive;
  font-size: 1.5rem;
  margin-top: 2rem;
  text-align: center;
  max-width: 1050px;
  color: #4b80c0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -40%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default DataViewer;