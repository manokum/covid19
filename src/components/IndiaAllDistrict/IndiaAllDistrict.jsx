import React from 'react';
import axios from 'axios';
import SelectSearch from 'react-select-search';
import { NativeSelect, FormControl } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import styles from './IndiaAllDistrict.module.css';

export default class IndiaAllDistrict extends React.Component {
  state = {
    datato :[],
    testlatlong: []
  }
  
  handleChange = event => {
    console.log("event",event)
    //const test = [event];
    //console.log("test",test)
    //this.setState({ testlatlong: test });
    this.handleSubmit(event);
  }

  handleSubmit = (t) => {
    //event.preventDefault();
    console.log("value of t",t)
    var array = JSON.parse("[[" + t + "]]");
    const string = JSON.stringify(t);
    string.replace (/"/g,''); 
console.log("inside submit string",array)
    const user = {
      "latlngs":array,
      "key":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtYWlsSWRlbnRpdHkiOiJtYW5vcmFuamFua3VtQGdtYWlsLmNvbSJ9.65QsDiBeKvnUnswtFjmfTEUrUt6tiaPZ92_1jvQMsCo"
    };

    axios.post(`https://data.geoiq.io/dataapis/v1.0/covid/locationcheck`,  user )
      .then(res => {
        console.log(res);
        console.log(res.data);
       //this.state.datato = res.data;
       this.setState({
        datato: res.data
      });
      })
      console.log("this.state.datato",this.state.datato)
  }



  render() {
    const options = [
      {name: 'Bangalore', value: [[12.959743999999999,77.6470528]]},
      {name: 'Mumbai', value: [[19.0760 ,72.8777]]}, 
      {name: 'Dhanbad', value: [[23.80039349,86.41998572]]},
      {name: 'Jamshedpur', value: [[22.78753542	 ,86.19751868]]},
      {name: 'Ranchi', value: [[23.37000633,85.33002641]]},
      {name: 'Bokaro', value: [[ 23.6693,86.1511]]},
      {name: 'Pune', value: [[ 18.5204,73.8567]]},
      {name: ' Andaman And Nicobar', value: [[ 11.66702557,92.73598262]]},
      {name: 'Andhra Pradesh', value: [[ 14.7504291,78.57002559]]},
  
  
      {name: 'Arunachal Pradesh', value: [[27.10039878,93.61660071]]},
      {name: 'Assam', value: [[26.7499809,94.21666744]]}, 
      {name: 'Bihar', value: [[25.78541445,87.4799727]]},
      {name: 'Delhi', value: [[28.6699929,77.23000403]]},
      {name: 'Kerala', value: [[8.900372741,76.56999263]]},
      {name: 'Bokaro', value: [[ 23.6693,86.1511]]},
      {name: 'Pune', value: [[ 18.5204,73.8567]]},
      {name: ' Andaman And Nicobar', value: [[ 11.66702557,92.73598262]]},
      {name: 'Andhra Pradesh', value: [[ 14.7504291,78.57002559]]},
      
      
      
       
      // Chandigarh (1)	30.71999697	76.78000565
      // Chhattisgarh (3)	22.09042035	82.15998734
      // Dadra And Nagar Haveli (12)	20.26657819	73.0166178
     
      // Goa (1)	15.491997	73.81800065
      // Haryana (10)	28.45000633	77.01999101
      // Himachal Pradesh (2)	31.10002545	77.16659704
      // Jammu And Kashmir (4)	34.29995933	74.46665849
      // Jharkhand (3)	23.80039349	86.41998572
      // Karnataka (16)	12.57038129	76.91999711
       
      // Lakshadweep (1)	10.56257331	72.63686717
      // Madhya Pradesh (8)	21.30039105	76.13001949
      // Maharashtra (20)	19.25023195	73.16017493
      // Manipur (1)	24.79997072	93.95001705
      // Meghalaya (1)	25.57049217	91.8800142
      // Mizoram (1)	23.71039899	92.72001461
      // Nagaland (1)	25.6669979	94.11657019
      // Orissa (6)	19.82042971	85.90001746
      // Puducherry (1)	11.93499371	79.83000037
      // Punjab (6)	31.51997398	75.98000281
      // Rajasthan (12)	26.44999921	74.63998124
      // Sikkim (1)	27.3333303	88.6166475
      // Tamil Nadu (19)	12.92038576	79.15004187
      // Tripura (1)	23.83540428	91.27999914
      // Uttar Pradesh (29)	27.59998069	78.05000565
      // Uttaranchal (1)	30.32040895	78.05000565
      // West Bengal (10)	22.58039044	88.32994665	
  ];
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Search</button>
        </form> */}
        {/* <SelectSearch options={options} defaultValue="sv" name="language" placeholder="Choose your language" /> */}

        <FormControl className={styles.formControl}>
      <NativeSelect defaultValue=""  onChange={(e) => this.handleChange(e.target.value)} >
        <option value="">Select State/District</option>
        {options.map((country, i) => <option key={i} value={country.value}>{country.name}</option>) }
      </NativeSelect>
    </FormControl>
    {/* <Autocomplete
      id="combo-box-demo"
      options={options}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    /> */}
        { this.state.datato.length != 0  ? <table className={styles.customers}>
      <caption>Zone Data</caption>
      <thead>
        <tr>
         <th>Zone </th>
          <th>Zone Type</th>
          
        </tr>
      </thead>
      <tbody>
        {this.state.datato.data.map((product,i) => (
          <tr>
            <td>{product.district}</td>
            <td className={product.districtZoneType.length === 8 ? styles.red : product.districtZoneType.length === 10 ? styles.green : styles.orange }>{product.districtZoneType}</td>
          </tr>
        ))}
        {/* <tr><td>{this.state.datato.data[0].containmentsAvailability}</td></tr> */}
      </tbody>
        </table> : <p>Please enter state name to see data</p>}

      </div>
    )
  }
}