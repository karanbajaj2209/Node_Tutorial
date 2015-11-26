var numberOfObjectsCreated = 0;
var destinationsServed = [];

var Flight = function () {
	this.data = {
		number: null,
		origin: null,
		destination: null,
		departs: null,
		arrives: null,
		actualDepart: null,
		actualArrive: null
	};

	this.fill = function (info) {
		for(var prop in this.data) {
			if(this.data[prop] !== 'undefined') {
				this.data[prop] = info[prop];
			}
		}
	};

	this.triggerDepart = function () {
		this.data.actualDepart = Date.now();
	};

	this.triggerArrive = function () {
		this.data.actualArrive = Date.now();
	};

	this.getInformation = function () {
		return this.data;
	};
};

// Factory is used being and the user does not have to know
module.exports = function (info) {
	var instance = new Flight();

	instance.fill(info);
	numberOfObjectsCreated += 1;
	destinationsServed.push(info.destination);
	return instance;
};