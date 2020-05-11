import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { Line, Polar, HorizontalBar,Bubble,Pie,Bar } from 'react-chartjs-2';
import { indiaStateValue } from '../../api';
import icons from 'glyphicons'  
// import _ from 'underscore'  
import styles from './IndiaByState.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const IndiaByState = ({ data }) => {
  
  // const [state,setCountries] = useState([]);
  // console.log("data IndiaByState",[state])

  
  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     setCountries(await indiaStateValue());
  //   };
  //   fetchAPI();
  const [firstName, setFirstName] = React.useState(null);
  const [lastName, setLastName] = React.useState(null);
  const [allStateData, setallStateData] = React.useState(null);
  
  React.useEffect(() => {
    fetch('https://api.covid19india.org/state_district_wise.json')
      .then(results => results.json())
      .then(data => {
        console.log("data",data)
        window.data= data;
         const [name] = [data];
         function filterTypes(accepted) {
      
          for (var type in window.data)
              if (accepted.indexOf(type) > -1) 
              window.result[type] = window.data[type];
          console.log("result", window.result);
      }
  
      // console.log("const [name] = [data];",[name])
      window.result = {}  
  
  console.log("widnow Data",window.data)
  const allSt = Object.keys(window.data);
  console.log("widnow allSt",allSt)
  setallStateData(allSt);
  filterTypes(['Andaman and Nicobar Islands']);
  console.log("window.result",window.result)
  const test  = Object.values(window.result);
  console.log("window.result['key'].districtData",test);
  const test1 = test[0].districtData;
  console.log("test1",test1)
  Object.keys(test1);
  const test2 = Object.keys(test1);
  const test3 = Object.entries(test1);
  console.log("test2",test2)
  console.log("test3",test3)
     setFirstName(test3);
     setLastName(test2);
        
      });



  }, []);

  // if(!state) {
   
  //   window.result = {};
  //   function filterTypes(accepted) {
      
  //     for (var type in state)
  //         if (accepted.indexOf(type) > -1) 
  //         window.result[type] = state[type];
  //     console.log("result", window.result);
  // }
  // filterTypes(['Maharashtra']);

  // }
  function handleCountryChange(e){
    console.log("inside handleCountryChange",e)
    window.result = {};
    for (var type in window.data)
    if (e.indexOf(type) > -1) 
    window.result[type] = window.data[type];
    console.log("widnow Data",window.data)
    const allSt = Object.keys(window.data);
    console.log("widnow allSt",allSt)
    setallStateData(allSt);
    //filterTypes(['Jharkhand']);
    
    console.log("window.result",window.result)
    const test  = Object.values(window.result);
    console.log("window.result['key'].districtData",test);
    const test1 = test[0].districtData;
    console.log("test1",test1)
    Object.keys(test1);
    const test2 = Object.keys(test1);
    const test3 = Object.entries(test1);
    console.log("test2",test2)
    console.log("test3",test3)
       setFirstName(test3);
       setLastName(test2);
    
  }
  return (
    <div className={styles.container}>
      {!firstName || !lastName  || !allStateData ? 'Loading...' : 
       <div>
        <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        {/* <option value="">Assam</option> */}
        {allStateData.map((product, i) => <option key={i} value={product}>{product}</option>)}
      </NativeSelect>
    </FormControl>
     
      {/* <table className={styles.customers}>
      <caption>All States Data</caption>
      <thead>
        <tr>
         <th>District</th>
          <th>Confirmed</th>
          <th>Active</th>
          <th>Deaths</th>
          <th>Recovered</th>
          
        </tr>
      </thead>
      <tbody>
        {firstName.map((product,i) => (
          <tr key={i}>
            <td className={styles.tdBreak}>{product[0]}</td>
            <td className={(product[1].confirmed)  > 25 ? styles.class3 : styles.class1 }><div>{product[1].confirmed}  </div><div>{product[1].delta.confirmed}<span className={styles.arrowCss}>{icons.arrowN}</span></div></td>
            <td>{product[1].active}</td>
            <td><div>{product[1].deceased}</div> <div>{product[1].delta.deceased}<span className={styles.arrowCss}>{icons.arrowN}</span></div></td>
            <td><div>{product[1].recovered}</div><div>{product[1].delta.recovered}<span className={styles.arrowCss}>{icons.arrowN}</span></div></td>
            
          </tr>
        ))}
      </tbody>
    </table>  */}
   
    
    
    
    <TableContainer component={Paper}>
      <Table className={styles.customers} aria-label="simple table">
        <TableHead className={styles.fontWeight}>
          <TableRow>
            <TableCell className={styles.fontWeight}><div>District</div><div>Total</div>Rate<div></div></TableCell>
            {/* <TableCell  className={styles.fontWeight} className={styles.testPadding} className={styles.colorRed1}><div>Confirm</div><div>{firstName.reduce((totalCalories, firstName) => totalCalories + firstName[1].confirmed, 0)}</div><div><p className={styles.hidden}>T</p></div></TableCell> */}
  <TableCell  className={styles.fontWeight} className={styles.testPadding} className={styles.colorRed1}><div>Confirmed</div><div>{firstName.reduce((totalCalories, firstName) => totalCalories + firstName[1].confirmed, 0)}</div><div>-</div></TableCell>
            <TableCell  className={styles.fontWeight} className={styles.testPadding} className={styles.colorGreen1}><div>Active</div><div>{firstName.reduce((totalCalories, firstName) => totalCalories + firstName[1].active, 0)}</div><div>{Number(((firstName.reduce((totalCalories, firstName) => totalCalories + firstName[1].active, 0)/(firstName.reduce((totalCalories, firstName) => totalCalories + firstName[1].confirmed, 0)))*100)).toFixed(0)  }%</div></TableCell>
            <TableCell  className={styles.fontWeight} className={styles.testPadding1}><div>Deaths</div><div>{firstName.reduce((totalCalories, firstName) => totalCalories + firstName[1].deceased, 0)}</div><div>{Number(((firstName.reduce((totalCalories, firstName) => totalCalories + firstName[1].deceased, 0)/(firstName.reduce((totalCalories, firstName) => totalCalories + firstName[1].confirmed, 0)))*100)).toFixed(0)  }%</div></TableCell>
            <TableCell className={styles.fontWeight} className={styles.testPadding1}><div>Recovered</div><div>{firstName.reduce((totalCalories, firstName) => totalCalories + firstName[1].recovered, 0)}</div><div>{Number(((firstName.reduce((totalCalories, firstName) => totalCalories + firstName[1].recovered, 0)/(firstName.reduce((totalCalories, firstName) => totalCalories + firstName[1].confirmed, 0)))*100)).toFixed(0)  }%</div></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {/* <span>{_.firstName(_.map(product, confirmed => confirmed.total))}</span> */}
          {firstName.map((product,i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row" className={styles.fontWeight} className={styles.testPadding1}>
              {product[0]}
              </TableCell>
              <TableCell  className={styles.colorRed} className={styles.colorRed}><div>{product[1].confirmed}  </div><div>{product[1].delta.confirmed}<span className={styles.arrowCss}>{icons.arrowN}</span></div></TableCell>
              <TableCell  className={styles.colorGreen} className={styles.colorGreen}>{product[1].active}</TableCell>
              <TableCell   className={styles.testPadding}><div>{product[1].deceased}</div> <div>{product[1].delta.deceased}<span className={styles.arrowCss}>{icons.arrowN}</span></div></TableCell>
              <TableCell  className={styles.font8}><div>{product[1].recovered}</div><div>{product[1].delta.recovered}<span className={styles.arrowCss}>{icons.arrowN}</span></div></TableCell>
              
            </TableRow>
          ))}
          
          {/* {_.sum(_.map(firstName, product => product[1].total))} 
          const meals = [
  { calorie: 10},
  { calorie: 15},
  { calorie: 20}
];

const calorieTotal = meals.reduce((totalCalories, meal) => totalCalories + meal.calorie, 0);

console.log(calorieTotal);
          */}
        </TableBody>
      </Table>
    </TableContainer>
    
    </div>}
    </div>
    

  );
};




export default IndiaByState;
