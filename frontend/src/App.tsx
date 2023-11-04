// DataViewer.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LineChart from './LineChart';

export type Temps = {
  temp: number,
  date: Date
}

function formatDate(date: any) {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];

  const d = new Date(date);
  const year = d.getFullYear();
  const month = months[d.getMonth()];
  const day = d.getDate();
  const time = '09:30PM'; // Replace with your time data
  return `${year}-${month}-${day}:${time}`;
}


function DataViewer() {
  return (
    <div>
      <h2>Data Viewer</h2>
      <LineChart />
    </div>
  );
}


export default DataViewer;