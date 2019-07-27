import React, { Component } from 'react';

import conditionsDict from './conditions-dict.js';

class CurrentWeather extends Component {

	constructor (props) {
		super(props);
    this.state = {
      isLoaded: false,
      data: null,
      error: false
    };

	}

  componentDidMount() {
    window.fetch('http://api.openweathermap.org/data/2.5/weather?id=' + this.props.ID + '&units=Imperial&APPID=' + this.props.APIKey)
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