import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/map';

class List extends Component {
  renderWeather(zip) {
    console.log('zip: ', zip);
    const name = zip.name;
    const weather = zip.weather[0].description;
    const { lon, lat } = zip.coord;

    return (
      <div key={name} className="listItem">
        <div className="map"><GoogleMap lon={lon} lat={lat} /></div>
        <div className="weather">{weather}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="list">
        {this.props.weather.map(this.renderWeather)}
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(List);
