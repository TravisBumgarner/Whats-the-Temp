import { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { collection, getDocs } from "firebase/firestore";

import 'chart.js/auto';
import { database } from './firebase'

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
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = { scales: { x: { ticks: { maxTicksLimit: 10 } } } }


  return <Line options={options} ref={ref} data={plot} />
};

export default LineChart