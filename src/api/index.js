import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const url1 = 'https://api.covid19india.org/data.json';
const url2 = 'https://api.covid19india.org/state_district_wise.json';
const url3= 'https://newsapi.org/v2/top-headlines?country=in&apiKey=ac385d82856b4df09ca19e740e16eac3';
const urlZones = 'https://api.covid19india.org/zones.json'
export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
export const fetchZones = async () => {
  try {
    const { data } = await axios.get(`${urlZones}`);

    return data.zones.map(({ district, state, zone,lastupdated:statecode}) => ({district:district,state:state,zone:zone,statecode }));
  } catch (error) {
    return error;
  }
};
//district,state,zone 
export const indiaDailyValue = async () => {
  try{
    const { data} = await axios.get(`${url1}`);

    // return countries.map((country) => country.name);
    return data.statewise.map(({ confirmed,active,deltaconfirmed, deaths, recovered, state ,lastupdatedtime,deltadeaths,deltarecovered}) => ({deltarecovered:deltarecovered,deltadeaths:deltadeaths, deltaconfirmed:deltaconfirmed,confirmed: confirmed,active:active, deaths: deaths, recovered : recovered,states : state ,lastupdatedtime: lastupdatedtime}));
  } catch(err){
    return err;
  }
};

export const indiaStateValue = async () => {
  try{
    const { data} = await axios.get(`${url2}`);

    return data;
    //return data.statewise.map(({ confirmed, deaths, recovered, state }) => ({ confirmed: confirmed, deaths: deaths, recovered : recovered,states : state}));
  } catch(err){
    return err;
  }
};

export const fetchNewsData = async () => {
  try {
    const { data } = await axios.get(`${url3}`);

    return data.articles;
  } catch (error) {
    return error;
  }
};