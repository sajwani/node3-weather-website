const request = require('request');

const forecast = (latitude, longitude, cb) => {
  url = `https://api.weatherstack.com/current?access_key=9aa1dbcba20024f659b969b493557e67&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, data) => {
    if (error) {
      cb('unable to connect to weatherstack', undefined);
    } else if (data.body.error) {
      cb('unable to find location', undefined);
    } else {
      cb(
        undefined,
        `${data.body.current.weather_descriptions[0]}. It is currently ${data.body.current.temperature} and feels like ${data.body.current.feelslike} and the humidity is ${data.body.current.humidity}`
      );
    }
  });
};

module.exports = forecast;
