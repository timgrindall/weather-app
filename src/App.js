import React, {Component} from 'react';
import './App.css';

import Card from './Card.js';
// import conditionsDict from './conditions-dict.js';
// import ajax from './ajax.js';

import CurrentWeather from './CurrentWeather.js';

// const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
// const hourNames = ["12 am", "3 am", " 6 am", "9 am", "12 pm", "3 pm", "6 pm", "9 pm"];
const APIKey = '8ae490945f36f5acd76d8e89a153d64a';
const id = 5809844   // Seattle
// const id = 6621230   // San Francisco
const ID = id.toString();
const cnt = 8;

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: null,
      error: false
    };
  }

  componentDidMount() {
    window.fetch('http://api.openweathermap.org/data/2.5/forecast?id=' + ID + '&units=Imperial&cnt=' + cnt + '&APPID=' + APIKey)
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
      const timezone = data.city.timezone;
      // console.log(timezone)

      //process items/list
      const cardsList = data.list.map((day, index) => {
        var date = new Date((day.dt*1000)+timezone);
        var hour = date.getHours();
        
        var hourString = "";
        if (hour > 12) {
          const newHour = hour - 12;
          hourString = newHour + " pm";
        } else {
          hourString = hour + " am";
        }
        // hourString = hour + " hr";
        // console.log(date);
        return <Card key={index} hour={hourString} conditionID={day.weather[0].id} description={day.weather[0].description} temp={day.main.temp} pressure={day.main.pressure} dayTemp={day.main.temp_max} nightTemp={day.main.temp_min} />
      })

      return (
        <div className="container">
          <CurrentWeather ID={ID} APIKey={APIKey}/>
          <div className="cards">{cardsList}</div>
          <div className="icon-credit">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" rel="noopener noreferrer" target="_blank">CC 3.0 BY</a></div>
        </div>
      );
    }
  }
}

export default App;
