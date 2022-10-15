import axios from 'axios';

const baseUrl = 'https://disease.sh/v3/covid-19/countries';

const fetchResults = async () => {
  const results = [];
  const response = await axios.get(baseUrl);
  const responseArt = response.data;

  responseArt.map(({ countryInfo: { _id: id, flag }, ...data }) => {
    const covidResults = {
      continent: data.continent,
      country: data.country,
      country_id: id,
      country_flag: flag,
      total_cases: data.cases,
      total_deaths: data.deaths,
      total_recovered: data.recovered,
      total_active: data.active,
      total_tests: data.tests,
      population: data.population,
      todays_cases: data.todayCases,
      todays_deaths: data.todayDeaths,
      todays_recovered: data.todayRecovered,
    };

    results.push(covidResults);
    return results;
  });
  return results;
};

export default fetchResults;
