const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherapi.com/v1/current.json?key=4b3224e720024eacaf265756203011&q=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.condition.text +
          ". It is currently " +
          body.current.temp_c +
          " degress out. "
      );
    }
  });
};

module.exports = forecast;
