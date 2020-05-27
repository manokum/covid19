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
import icons from 'glyphicons'  
import styles from './Cases.module.css';

const CasesByRate = ({  data: {  confirmed,active,deltaconfirmed, deaths, recovered, states ,lastupdatedtime,deltadeaths,deltarecovered } }) => {
  
  const [state,setCountries] = useState([]);
 
  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await indiaDailyValue());
    };
    fetchAPI();
  }, []);





  return (
  
    <div className={styles.container}>
 

<TableContainer component={Paper}>
      <Table className={styles.customers} aria-label="simple table">
        <TableHead className={styles.fontWeight}>
          <TableRow>
            <TableCell className={styles.fontWeight}>States</TableCell>
            <TableCell  className={styles.fontWeight} className={styles.testPadding} className={styles.colorRed1}>Confirmed</TableCell>
            <TableCell  className={styles.fontWeight} className={styles.testPadding1}>Active</TableCell>
            <TableCell  className={styles.fontWeight} className={styles.testPadding} className={styles.colorGreen1}>Recovered</TableCell>
            <TableCell  className={styles.fontWeight} className={styles.testPadding1}>Deaths</TableCell>
            {/* <TableCell className={styles.fontWeight} className={styles.testPadding1}>Last Updated</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {state.map((row,i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row" className={styles.fontWeight} className={styles.testPadding1}>
                {row.states}
                <div className={styles.font8}>{row.lastupdatedtime}</div>
              </TableCell>
              <TableCell  className={styles.colorRed} className={styles.colorRed}><div>{row.confirmed}</div><div className={styles.visiblehide}>gg</div><div>{row.deltaconfirmed}<span className={styles.arrowCss}>{icons.arrowN}</span></div></TableCell>
              <TableCell  className={styles.colorRed} className={styles.colorRed}><div>{row.active}</div><div>{isNaN(parseInt(Number(((row.active)/(row.confirmed)*100)).toFixed(0)) ) ? 0 : parseInt(Number(((row.active)/(row.confirmed)*100)).toFixed(0))  }%</div><div className={styles.visiblehide}>gg</div></TableCell>
          <TableCell  className={styles.colorGreen} className={styles.colorGreen}><div>{row.recovered}</div><div>{isNaN(parseInt(Number(((row.recovered)/(row.confirmed)*100)).toFixed(0)) ) ? 0 : parseInt(Number(((row.recovered)/(row.confirmed)*100)).toFixed(0))  }%</div><div>{row.deltarecovered}<span className={styles.arrowCss}>{icons.arrowN}</span></div></TableCell>
          <TableCell   className={styles.testPadding}><div>{row.deaths} </div><div>{isNaN(parseInt(Number(((row.deaths)/(row.confirmed)*100)).toFixed(0) )) ? 0 : parseInt(Number(((row.deaths)/(row.confirmed)*100)).toFixed(0)) } %</div><div>{row.deltadeaths}<span className={styles.arrowCss}>{icons.arrowN}</span></div></TableCell>
              {/* <TableCell  className={styles.font8}>{row.lastupdatedtime}</TableCell> */}
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


  </div>
  );
};




export default CasesByRate;
