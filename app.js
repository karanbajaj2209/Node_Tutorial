var flight = require('./flight');

flight.setOrigin('STO');
flight.setDestination('LHR');
flight.setNumber('SK1930');

console.log(flight.getInfo());
