import React, { Component } from 'react';

import conditionsDict from './conditions-dict.js';

class CurrentWeather extends Component {

	constructor (props) {
		super(props);
    this.state = {
      isLoaded: false,
      loadAgain: true,
      data: null,
      error: false
    };

	}

  componentDidMount() {
    window.fetch('http://api.openweathermap.org/data/2.5/weather?q=' + this.props.cityName + ',us&units=Imperial&APPID=' + this.props.APIKey)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({isLoaded: true, data: result});
        },
        (error) => {
          this.setState({isLoaded: true, error});
          console.log("Error: " + error);
        }
      );
  }

// had to take this out to stop an infinite loop of requests but may need it to update component
  componentDidUpdate() {
    if (this.state.loadAgain === true && this.state.data.cod !== 429) window.fetch('http://api.openweathermap.org/data/2.5/weather?q=' + this.props.cityName + ',us&units=Imperial&APPID=' + this.props.APIKey)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({isLoaded: true, loadAgain: false, data: result});
          console.log('loaded current weather')
          console.log('this.props.cityName: ' + this.props.cityName)
        },
        (error) => {
          this.setState({isLoaded: false, loadAgain: false, error});
          console.log("Error: " + error);
          console.log('loaded current weather')
          console.log('this.props.cityName: ' + this.props.cityName)
          console.log(error)
        }
      );
    else {
      console.log('tried to load currentWeather')
      console.log('cod: ' + this.state.data.cod)
      console.log('data: ')
      console.log(this.state.data)
      console.log('this.props.cityName: ' + this.props.cityName)
    }
  }

  render() {
    const {isLoaded, data, error} = this.state;

    if (error) {
      // console.log(data);
      return <div className="errorMessage">Error: {error.message}</div>
    } else if (!isLoaded) {
      // console.log(data);
      return <div className="errorMessage">Loading . . .</div>
    } else {
      // test data object
      // console.log(data);

      const id = data.weather[0].id;
      const name = data.name;
      const iconURL = conditionsDict[id].iconURL;
      const description = data.weather[0].description;
      const currentTemp = Math.round(data.main.temp);

      //render
      return (
        <div className="CurrentWeather">
          <div className="city-name">{name}</div>
          <div className="current-container">
            <img className="current-icon" src={iconURL} alt={description}></img>
            <div className="current-weather">{currentTemp}&deg; {description}</div>
          </div>
        </div>
      );
    }
  }
}

export default CurrentWeather;