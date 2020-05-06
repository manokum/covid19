import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { Line, Polar, HorizontalBar,Bubble,Pie,Bar } from 'react-chartjs-2';
import { indiaDailyValue } from '../../api';

import styles from './Cases.module.css';

const CasesByRate = ({  data: { confirmed, deaths, recovered, states } }) => {
  
  const [state,setCountries] = useState([]);
  console.log("data CasesByRate",state)
  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await indiaDailyValue());
    };
    fetchAPI();
  }, []);

  const options = {
    scales: {
         xAxes: [{
             stacked: true
         }],
         yAxes: [{
             stacked: true
         }]
     }
 }

 let data ={ 
   datasets:[{
     label: 'Confirmed',
       data: state.map((data) => data.confirmed),
       backgroundColor: ['rgba(0, 0, 255, 0.5)'],
     },
     {
       label: 'Deaths',
       data: state.map((data) => data.deaths),
       backgroundColor: ['rgba(0, 255, 0, 0.5)'],
     },
     {
        label: 'Recovered',
        data: state.map((data) => data.recovered),
        backgroundColor: ['rgba(255, 0, 0, 0.5)'],
      },
    //   {
    //     label: 'states',
    //     data: state.map((data) => data.states),
    //     backgroundColor: ['rgba(255, 0, 0, 0.5)'],
    //   }
    ],
   labels:['India']
 }

  const barChart = (
    confirmed ? (
      <Bar 
      data={data}
       options={options}
           
            
           
        // }}
        // data={{
        //   labels: ['Infected', 'Recovered', 'Deaths','State'],
        //   datasets: [
        //     {
        //       label: 'No of People',
        //       backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
        //       data: state.map((data) => data.confirmed),
        //     },
        //   ],
        // }}
        // options={{
        //   legend: { display: false },
        //   title: { display: true, text: `Current state in ${country}` },
        // }}
      />
    ) : null
  );

  return (
    // <FormControl className={styles.formControl}>
    //   <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
    //     <option value="">Global</option>
    //     {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
    //   </NativeSelect>
    // </FormControl> confirmed, deaths, recovered,
    <div className={styles.container}>
    { <table className={styles.customers}>
      <caption>All States Data</caption>
      <thead>
        <tr>
          <th>States</th>
          <th>Confirmed</th>
          <th>Deaths</th>
          <th>Recovered</th>
        </tr>
      </thead>
      <tbody>
        {state.map(product => (
          <tr key={product.id}>
            <td>{product.states}</td>
            <td>{product.confirmed}</td>
            <td>{product.deaths}</td>
            <td>{product.recovered}</td>
          </tr>
        ))}
      </tbody>
    </table> }
  </div>
  );
};




export default CasesByRate;
