import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { Line, Polar, HorizontalBar,Bubble,Pie,Bar } from 'react-chartjs-2';
import { indiaStateValue } from '../../api';
import icons from 'glyphicons'  
import styles from './IndiaAllDistrict.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fetchZones } from '../../api';


const IndiaAllDistrict = ({  data:  district,state,zone }) => {
    
  const [dailyData, setDailyData] = useState([]);
  console.log("data dailyData : ddistrict",dailyData)
  // useEffect(() => {
  //   const fetchMyAPI = async () => {
  //     //const initialDailyData = await fetchZones();
  //     //setCountries(await indiaDailyValue());
  //     setDailyData(await fetchZones );
  //   };

  //   fetchMyAPI();
  // }, []);
  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchZones();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  return (
    <div className={styles.container}>
     
     

         
      
  {!dailyData[0] ? 'Loading' : <div>
{   
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead className={styles.fontWeight}>
          <TableRow>
            <TableCell className={styles.fontWeight}>State</TableCell>
           
  <TableCell className={styles.fontWeight}>District</TableCell>
            <TableCell className={styles.fontWeight}>Zone</TableCell>
            
           
          </TableRow>
        </TableHead>
        <TableBody>
        
          {dailyData.map((product,i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
              {product.state}
              </TableCell>
          <TableCell>{product.district}</TableCell>
          <TableCell><span>{product.zone}</span></TableCell>
       
          
              
            </TableRow>
          ))}
          
      
        
        </TableBody>
      </Table>
    </TableContainer> }
    
   
  
    </div>
 
}
</div>
  );
};




export default IndiaAllDistrict;





