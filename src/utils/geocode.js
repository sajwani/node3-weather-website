const request = require('request');

const geocode = (address, cb) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiaGFzc2Fuc2ppIiwiYSI6ImNscnJrcnJlbDA0dXEybXF5cXM2c3ZvcHAifQ.K6EZB8zeQoFlJOyiDrC1Vg&limit=1`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      cb('unable to connect to location services!', undefined);
    } else if (body.features.length === 0) {
      console.log(address);
      cb('unable to find location'), undefined;
    } else {
      cb(undefined, {
        latitude: body.features[0].center[0],
        longitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
