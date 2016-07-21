var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
      <h3> It is {temp} Degrees in {location}.</h3>
    );
}
module.exports = WeatherMessage;
