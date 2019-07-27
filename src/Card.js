import React, { Component } from 'react';
import Tooltip from './tooltip.js'

import conditionsDict from './conditions-dict.js';

class Card extends Component {

  render() {
    const id = this.props.conditionID;
    var iconURL = "";
    const description = this.props.description
    // console.log(id)
    if (conditionsDict[id] != null) {
      iconURL = conditionsDict[id].iconURL;
    } else {
      iconURL = "icons/warning.svg";
    }

    // const day_max = Math.round(this.props.dayTemp);
    // const night_min = Math.round(this.props.nightTemp);

    const temp = Math.round(this.props.temp);
    const pressure = (Math.round(this.props.pressure)/10); // round to integer and convert to kilopascal

    return (
      <Tooltip text={description}>
        <div className="weather-card">
          <div className="day-name">{this.props.hour}</div>
          <img className="weather-icon" alt={description} src={iconURL}></img>
          <div className="temps">
            <div className="temp">{temp}&deg;</div>
            <div className="pressure">{pressure}</div>
          </div>
        </div>
      </Tooltip>
    );
  }
}

/*  old elements
              <div className="day-temp">{day_max}&deg;</div>
              <div className="night-temp">{night_min}&deg;</div>
*/

export default Card;