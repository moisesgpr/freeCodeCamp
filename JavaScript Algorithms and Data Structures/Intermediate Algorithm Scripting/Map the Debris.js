function orbitalPeriod(arr) {
    let GM = 398600.4418,
        earthRadius = 6367.4447,
        orbitalPeriodResults = [];

    arr.forEach(function (dataPoint) {
        let translatedDataPoint = {};
        let numberToSquare = Math.pow(earthRadius + dataPoint.avgAlt, 3) / GM;
        let squareResult = Math.sqrt(numberToSquare);
        let orbitalPeriodResult = (Math.PI * 2) * squareResult;
        translatedDataPoint.name = dataPoint.name;
        translatedDataPoint.orbitalPeriod = Math.round(orbitalPeriodResult);
        orbitalPeriodResults.push(translatedDataPoint)
    });

    return orbitalPeriodResults;
}

orbitalPeriod([{
    name: "sputnik",
    avgAlt: 35873.5553
}]);

/* According to Kepler's Third Law, the orbital period  T
  of two point masses orbiting each other in a circular or elliptic orbit is:

T=2πa3μ−−−√
 
a
  is the orbit's semi-major axis
μ=GM
  is the standard gravitational parameter
G
  is the gravitational constant,
M
  is the mass of the more massive body.
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2. */