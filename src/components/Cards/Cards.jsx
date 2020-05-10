import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }
      
  
  return (
    <div className={styles.container}>
      {/* <Grid container spacing={3} justify="center">
      
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={1} separator="," />
              
            </Typography>
           
          
            <Typography variant="body2" component="p">
              No of active cases
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            
              Recovered : <span className={(Number(((recovered.value)/(confirmed.value)*100)).toFixed(0))  > 25 ? styles.class3 : styles.class1 }>{Number(((recovered.value)/(confirmed.value)*100)).toFixed(0) }%</span>
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={1} separator="," />
            </Typography>
            
            <Typography>
            
            </Typography>
            <Typography></Typography>
            <Typography variant="body2" component="p">
              No.of recoveries made
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths : <span className={(Number(((deaths.value)/(confirmed.value)*100)).toFixed(0))  > 5 ? styles.class1 : styles.class2 }>{Number(((deaths.value)/(confirmed.value)*100)).toFixed(0) }%</span>
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={1} separator="," />
            </Typography>
           
            <Typography variant="body2" component="p">
              Number of deaths COVID19.   
            </Typography>
            <Typography>
            
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card)}>
        <CardContent>
        <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            </CardContent>
        </Grid>
        
      </Grid> */}

<table className={styles.customers}>
<caption className = {styles.flashColor}>Last Updated : {new Date(lastUpdate).toDateString()} {new Date(lastUpdate).toLocaleTimeString()} </caption>
      {/* <caption>{new Date(lastUpdate).toLocaleTimeString()}</caption> */}
      <thead>
        <tr>
         <th>Confirmed</th>
          <th>Recovered</th>
          <th>Recovered Rate</th>
          <th>Deaths</th>
          <th>Deaths Rate</th>
          
        </tr>
      </thead>
      <tbody>
        
          <tr>
            <td>{confirmed.value}</td>
            <td>{recovered.value}</td>
            <td><span className={(Number(((recovered.value)/(confirmed.value)*100)).toFixed(0))> 25 ? styles.class3 : styles.class1 }>{Number(((recovered.value)/(confirmed.value)*100)).toFixed(0) }%</span></td>
            <td>{deaths.value}</td>
            <td><span className={(Number(((deaths.value)/(confirmed.value)*100)).toFixed(0))  > 5 ? styles.class1 : styles.class2 }>{Number(((deaths.value)/(confirmed.value)*100)).toFixed(0) }%</span></td>
          </tr>  
    
      </tbody>
    </table> 


    </div>
  );
};
export default Info;