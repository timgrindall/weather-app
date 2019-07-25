import React, { Component } from 'react';

import conditionsDict from './conditions-dict.js';

class Card extends Component {

	render() {
		const id = this.props.conditionID;
		var iconURL = "";
		var description;
		// console.log(id)
		if (conditionsDict[id] != null) {
			iconURL = conditionsDict[id].iconURL;
			description = conditionsDict[id].name;
		} else {
			iconURL = "icons/warning.svg";
			description = conditionsDict[800].name;
		}

		const day_max = Math.round(this.props.dayTemp);
		const night_min = Math.round(this.props.nightTemp);

		return (
          <div className="card">
            <div className="day-name">{this.props.dayName}</div>
            <img className="weather-icon" alt={description} src={iconURL}></img>
            <div className="temps">
              <div className="day-temp">{day_max}&deg;</div>
              <div className="night-temp">{night_min}&deg;</div>
            </div>
          </div>
		);
	}
}

export default Card;