import { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { collection, getDocs } from "firebase/firestore";

import 'chart.js/auto';
import { database } from './firebase'
import styled from 'styled-components';

type Measurement = {
  timestamp: number,
  temp: number
}

const getDisplayDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return `${date.getMonth()}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

export const LineChart = (): JSX.Element => {
  const [points, setPoints] = useState<Measurement[]>([]);
  const fetchPost = async () => {
    await getDocs(collection(database, "temps"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        setPoints(newData as unknown as Measurement[])
      })
  }

  const ref = useRef();

  useEffect(() => {
    fetchPost();
  }, [])

  const plot = {
    labels: points.map(({ timestamp }) => getDisplayDate(timestamp)),
    datasets: [
      {
        label: 'Temp (F)',
        data: points.map(({ temp }) => temp),
        fill: true,
        backgroundColor: 'rgba(255, 151, 47, 0.789)',
        borderColor: '#4b80c0',
      },
    ],
  };

  const options = {
    bezierCurve: true,
    maintainAspectRatio: false,
    scales: {
      x: { ticks: { maxTicksLimit: 10 } },
      y: { min: 0, max: 120 }
    },
    tension: 0.2,
    elements: {
      point: {
        radius: 0
      }
    }
  }

  return <Wrapper>
    <Line options={options} ref={ref} data={plot} />
  </Wrapper>
};


const Wrapper = styled.div`
  width: 90vw;
  aspect-ratio: 3/1;
  height: auto;
  min-height: 300px;

  canvas {
    height: 100%;
  }
`

export default LineChart