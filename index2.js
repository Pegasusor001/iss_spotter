const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss_promised');

fetchMyIP()
.then(result => fetchCoordsByIP(result))
.then(result => fetchISSFlyOverTimes(result))
.then((result) => {
  const { response } = JSON.parse(result);
  console.log(response)
.catch((error) => {
  console.log("It didn't work: ", error.message);
});


// nextISSTimesForMyLocation()
//   .then((passTimes) => {
//     printPassTimes(passTimes);
//   })
//   .catch((error) => {
//     console.log("It didn't work: ", error.message);
// });