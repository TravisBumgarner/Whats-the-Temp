import { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { collection, getDocs } from "firebase/firestore";

import 'chart.js/auto';
import { Temps } from './App';
import { database } from './firebase'
import { ref as fbRef, onValue } from "firebase/database";

export const LineChart = (): JSX.Element => {
  const fetchPost = async () => {
    await getDocs(collection(database, "temps"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        console.log(newData);
      })
  }

  useEffect(() => {
    fetchPost();
  }, [])

  return <p>hello world</p>
  // const plot = {
  //   labels: data.map((d) => d.date),
  //   datasets: [
  //     {
  //       label: 'Temp (F)',
  //       data: data.map((d) => d.temp),
  //       fill: true,
  //       backgroundColor: 'rgba(75,192,192,0.2)',
  //       borderColor: 'rgba(75,192,192,1)'
  //     },
  //   ],
  // };

  // return <Line ref={ref} data={plot} />
};

export default LineChart