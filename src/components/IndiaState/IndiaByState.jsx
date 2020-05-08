import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { Line, Polar, HorizontalBar,Bubble,Pie,Bar } from 'react-chartjs-2';
import { indiaStateValue } from '../../api';

import styles from './IndiaByState.module.css';

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
  filterTypes(['Assam']);
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
     
      <table className={styles.customers}>
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
            <td className={(product[1].confirmed)  > 25 ? styles.class3 : styles.class1 }>{product[1].confirmed}</td>
            <td>{product[1].active}</td>
            <td>{product[1].deceased}</td>
            <td>{product[1].recovered}</td>
          </tr>
        ))}
      </tbody>
    </table> </div>}
    </div>
    

  );
};




export default IndiaByState;
