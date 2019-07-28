import React, { Component } from 'react';

class CityInput extends Component {

  constructor (props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    console.log(e)
    this.props.onSubmitForm(e.target.value);
    e.preventDefault();
  } 

  render() {
    const cityName = this.props.cityName;

    return (
      <form onSubmit={this.submitForm} className="city-form">
        <label className="city-label">Enter City Name:</label>
        <input value={cityName} />
        <input type="submit" value="Submit" />
      </form>
    );
  }

}

export default CityInput;