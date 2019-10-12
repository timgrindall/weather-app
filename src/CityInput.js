import React, { Component } from 'react';

class CityInput extends Component {

  constructor (props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.updateCity = this.updateCity.bind(this);
    this.state = {
      cityName: ""
    }
  }

  submitForm(e) {
    console.log(e)
    this.props.onSubmitForm(this.state.cityName);
    e.preventDefault();
  } 

  updateCity(e) {
    this.setState({cityName: e.target.value})
    e.preventDefault();
  }

  render() {
    const cityName = this.state.cityName;

    return (
      <form onSubmit={this.submitForm} className="city-form">
        <label className="city-label">Enter City Name:</label>
        <input type="text" value={cityName} onChange={this.updateCity}/>
        <input class="city-form-submit" type="submit" value="Submit" />
      </form>
    );
  }

}

export default CityInput;