import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SelectSearch from 'react-select-search';
import { NativeSelect, FormControl } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import styles from './AllNews.module.css';
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { fetchNewsData } from '../../api';
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));
//const classes = useStyles();
const AllNews = () => {
  //console.log("Chart",Chart)
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchNewsData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);





  return (
    dailyData[0] ? 
    <div>
    { console.log(" dailyData[0]", dailyData)}
    <p>News Headlines</p>
    {dailyData.map((country, i) => <ExpansionPanel>
                 <ExpansionPanelSummary className={styles.lightblue}
                   expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                   id= {i}
                 >
                   <Typography >{country.title}</Typography>
                 </ExpansionPanelSummary>
                 <ExpansionPanelDetails>
                   <Typography>
                   {country.description}
                   </Typography>
                 </ExpansionPanelDetails>
               </ExpansionPanel>)}
              </div>  : 'Loading..' 
  );
  
};

export default AllNews;

// export default class AllNews extends React.Component {
  
//   // state = {
//   //   news :[],
//   //   //testlatlong: []
//   // }
  
//   // componentDidMount(){
//   //   axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=ac385d82856b4df09ca19e740e16eac3`)
//   //     .then(res => {
//   //       console.log(res);
//   //       console.log(res.data.articles);
//   //      //this.state.datato = res.data;
//   //      this.setState({
//   //       news: res.data.articles
//   //     });
//   //     })
//   // }


 
//   render() {
  

//     const classes = useStyles();
//     return (
//       <div>
        
//         <ExpansionPanel>
//         <ExpansionPanelSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography className={classes.heading}>Expansion Panel 1</Typography>
//         </ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>
//         </div>
//     )
  
// }
// }