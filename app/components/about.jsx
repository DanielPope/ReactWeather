var React = require('react');


var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        This is a weather application build on React. I have built this
        for the Complete React Web App Developer Course.
      </p>
      <p>
        Here are some of the tools I used:
        <ul>
          <li>
            <a href="http://facebook.github.io/react">React</a>  - This was the JS
              framework used.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Mape</a> - I used open
              weather map to search frot he weather data by the city name
          </li>
        </ul>
      </p>
    </div>
  )
};

module.exports = About;
