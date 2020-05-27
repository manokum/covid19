import React from 'react';

import { Cards, CountryPicker, Chart,CasesByRate,IndiaByState,IndiaAllDistrict,AllNews } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import { NavLink } from 'react-router-dom';
import image from './images/image.jpg';
import icons from 'glyphicons'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
  Link
} from "react-router-dom";

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <HashRouter basename='/'>
      {/* <Router> */}
      <div className={styles.container}>
       

<img className={styles.image} src={image} alt="COVID-19" />
<nav className={styles.navcenter} role="navigation" className={styles.navbar} >
    {/* <div className={styles.navwrapper}>
    <ul>
            <li>
              <Link to="/">Indian State Data</Link>
            </li>
            <li>
              <Link to="/world">World Statistics</Link>
            </li>
            <li>
              <Link to="/india">India All State</Link>
            </li>
            <li>
              <Link to="/zonedata">India Zone Data</Link>
            </li>
          </ul>
    </div> */}
    <div className={styles.navwrapper}>
    <NavLink
      exact
      activeClassName={styles.navbar__link__active}
      className={styles.navbar__link}
      to="/"
    >
      {/* <img
    src="./images/image.jpg"
    alt="Unactive Link Image"
    height="45"
    width="45" 
  /> */} 
  <span className={styles.removeborder}>{icons.globe}</span>
      World
    </NavLink>
    <NavLink
      activeClassName={styles.navbar__link__active}
      className={styles.navbar__link}
      to="/indiaall"
    >  <span className={styles.removeborder}>{icons.castle}</span>
      India
    </NavLink>
    <NavLink
      activeClassName={styles.navbar__link__active}
      className={styles.navbar__link}
      to="/india"
    ><span className={styles.removeborder}>{icons.map}</span>
      State
    </NavLink>
    {/* <NavLink
      activeClassName={styles.navbar__link__active}
      className={styles.navbar__link}
      to="/zonedata"
    ><span className={styles.removeborder}>{icons.homes}</span>
      Zone
    </NavLink> */}
    </div>
</nav>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
          <div className={styles.container}>
          {/* <img className={styles.image} src={image} alt="COVID-19" /> */}
        
          <div className={styles.container}>
          
          <CountryPicker handleCountryChange={this.handleCountryChange} />
           <Chart data={data} country={country} /> 
           <Cards data={data} />
          {/* < AllNews/> */}
           </div>
          {/* <IndiaAllDistrict/> */}
          {/* <CasesByRate data={data} /> */}
          </div>
          </Route>
          <Route exact path="/indiaall">
          <div className={styles.container}>
          <CasesByRate data={data} />
          </div>
          
          </Route>
          <Route exact path="/india">
          <IndiaByState/>
          </Route>
          {/* <Route exact path="/zonedata">
          <div className={styles.container}>
          <IndiaAllDistrict/>
          </div>
          </Route> */}
         
        </Switch>
      </div>
    {/* </Router> */}
      {/* // <div className={styles.container}>
      //   <img className={styles.image} src={image} alt="COVID-19" />
      //   <CountryPicker handleCountryChange={this.handleCountryChange} />
      //   <Chart data={data} country={country} /> 
      //   <Cards data={data} />
      //   <CasesByRate data={data} /> */}
     
     </HashRouter>
    );
  }
}

export default App;