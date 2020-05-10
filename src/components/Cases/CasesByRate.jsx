import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { Line, Polar, HorizontalBar,Bubble,Pie,Bar } from 'react-chartjs-2';
import { indiaDailyValue } from '../../api';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import styles from './Cases.module.css';

const CasesByRate = ({  data: { confirmed, deaths, recovered, states,lastupdatedtime } }) => {
  
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
    /**
     * 
     * .data.map((product,i) => (
          <tr key={i}>
     */
    <div className={styles.container}>
    {/* { <table className={styles.customers}>
      <caption>All States Data</caption>
      <thead>
        <tr>
          <th>States</th>
          <th>Confirmed</th>
          <th>Recovered</th>
          <th>Deaths</th>
          
          <th>Last Updated</th>
        </tr>
      </thead>
      <tbody >
        {state.map((product,i) => (
          <tr key={i}>
            <td>{product.states}</td>
            <td className={styles.colorRed}>{product.confirmed}</td>
           
            <td  className={styles.colorGreen}><div>{product.recovered}</div><div>{Number(((product.recovered)/(product.confirmed)*100)).toFixed(0)  }%</div></td>
            <td><div>{product.deaths} </div><div>{Number(((product.deaths)/(product.confirmed)*100)).toFixed(0)  }%</div></td>
            <td className={styles.font8}>{product.lastupdatedtime}</td> 
          </tr>
        ))}
      </tbody>
    </table> } */}

<TableContainer component={Paper}>
      <Table className={styles.customers} aria-label="simple table">
        <TableHead className={styles.fontWeight}>
          <TableRow>
            <TableCell className={styles.fontWeight}>States</TableCell>
            <TableCell align="right" className={styles.fontWeight}  className={styles.colorRed1}>Confirmed</TableCell>
            <TableCell align="right" className={styles.fontWeight} className={styles.colorGreen1}>Recovered</TableCell>
            <TableCell align="right" className={styles.fontWeight}>Deaths</TableCell>
            <TableCell align="right" className={styles.fontWeight}>Last Updated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.map((row,i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row" className={styles.fontWeight}>
                {row.states}
              </TableCell>
              <TableCell align="right" className={styles.colorRed}>{row.confirmed}</TableCell>
              <TableCell align="right" className={styles.colorGreen}><div>{row.recovered}</div><div>{Number(((row.recovered)/(row.confirmed)*100)).toFixed(0)  }%</div></TableCell>
              <TableCell align="right"><div>{row.deaths} </div><div>{Number(((row.deaths)/(row.confirmed)*100)).toFixed(0)  }%</div></TableCell>
              <TableCell align="right" className={styles.font8}>{row.lastupdatedtime}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


  </div>
  );
};




export default CasesByRate;
