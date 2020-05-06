import React from 'react';

import { Cards, CountryPicker, Chart,CasesByRate,IndiaByState } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.jpg';
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
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

<img className={styles.image} src={image} alt="COVID-19" />
<nav className={styles.navcenter} role="navigation">
    <div className={styles.navwrapper}>
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
          </ul>
    </div>
</nav>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
          <div className={styles.container}>
          {/* <img className={styles.image} src={image} alt="COVID-19" /> */}
        
          <IndiaByState/>
          {/* <CasesByRate data={data} /> */}
          </div>
          </Route>
          <Route exact path="/world">
          <div className={styles.container}>
          
        <CountryPicker handleCountryChange={this.handleCountryChange} />
         <Chart data={data} country={country} /> 
         <Cards data={data} />
         </div>
          </Route>
          <Route exact path="/india">
          <div className={styles.container}>
          <CasesByRate data={data} />
          </div>
          </Route>
         
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