import React, { useState, useEffect } from 'react';
import { Line, Polar, HorizontalBar,Bubble,Pie,Bar } from 'react-chartjs-2';
import { Doughnut,Scatter } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  console.log("Chart",Chart)
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const barChart = (
    confirmed ? (
      <Pie
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'No of People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
         // title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );

  const lineChart = (
    
    dailyData[0] ? (
      
      <Bar
      data={{
        labels: [[...dailyData].pop().date],
        datasets: [
          {
            label: 'Confirmed',
            backgroundColor: 'rgba(0, 0, 255, 0.5)',
            borderColor: 'rgba(0, 0, 255, 0.5)',
            borderWidth: 2,
            data: [[...dailyData].pop().confirmed]
          },
          {
            label: 'Deaths',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            borderColor: 'rgba(0, 255, 0, 0.5)',
            borderWidth: 2,
            data: [[...dailyData].pop().deaths]
          }
        ]
      }}
      options={{
        title:{
          display:false,
          text:'World Data',
          fontSize:10
        },
        legend:{
          display:true,
          position:'bottom'
        },
         maintainAspectRatio: false ,
        scales: {
          yAxes: [{
              //  gridLines: {
              //     display: false,
              // },
              display : false
          }]
     }
      }
    }
      />
      // <Line
      // data={{
      //   labels: dailyData.map(({ date }) => date),
      //   datasets: [{
      //     data: dailyData.map((data) => data.confirmed),
      //     label: 'Infected',
      //     borderColor: '#3333ff',
      //     fill: true,
      //   }, {
      //     data: dailyData.map((data) => data.deaths),
      //     label: 'Deaths',
      //     borderColor: 'red',
      //     backgroundColor: 'rgba(255, 0, 0, 0.5)',
      //     fill: true,
      //   },
      //   ],
      // }}
    ///>
    ) : null
  );

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  );
  
};

export default Chart;
