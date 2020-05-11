import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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

{/* <table className={styles.customers}>
<caption className = {styles.flashColor}>Last Updated : {new Date(lastUpdate).toDateString()} {new Date(lastUpdate).toLocaleTimeString()} </caption>
   
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
    </table>  */}
<caption className = {styles.flashColor}>Last Updated : {new Date(lastUpdate).toDateString()} {new Date(lastUpdate).toLocaleTimeString()} </caption>
<TableContainer component={Paper}>
      <Table className={styles.customers} aria-label="simple table">
        <TableHead className={styles.fontWeight}>
          <TableRow>
            <TableCell className={styles.fontWeight}>Confirmed</TableCell>
            <TableCell  className={styles.fontWeight} className={styles.testPadding} className={styles.colorRed1}>Recovered</TableCell>
            <TableCell  className={styles.fontWeight} className={styles.testPadding} className={styles.colorGreen1}>R Rate.</TableCell>
            <TableCell  className={styles.fontWeight} className={styles.testPadding1}>Deaths</TableCell>
            <TableCell className={styles.fontWeight} className={styles.testPadding1}>D Rate.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow >
              <TableCell component="th" scope="row" className={styles.fontWeight} className={styles.testPadding1}>
              {confirmed.value}
              </TableCell>
              <TableCell  className={styles.colorRed} className={styles.colorRed}>{recovered.value}</TableCell>
              <TableCell  className={styles.colorGreen} className={styles.colorGreen}>{Number(((recovered.value)/(confirmed.value)*100)).toFixed(0) }%</TableCell>
              <TableCell   className={styles.testPadding}>{deaths.value}</TableCell>
              <TableCell  className={styles.font8}>{Number(((deaths.value)/(confirmed.value)*100)).toFixed(0) }%</TableCell>
              
            </TableRow>
       
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};
export default Info;
