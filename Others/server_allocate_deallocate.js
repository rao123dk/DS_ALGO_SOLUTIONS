
/**
 *
 * @param {*} one
 * @param {*} two
 *
 * >> tracker = Tracker.new

>> tracker.allocate('apibox')
"apibox1"

>> tracker.allocate('apibox')
"apibox2"

>> tracker.deallocate('apibox1')
nil

>> tracker.allocate('apibox')
"apibox1"

>> tracker.allocate('sitebox')
"sitebox1"
 */















function assert(one, two) {
	if (one !== two) {
		throw new Error(`${one} not equal to ${two}!!`);
	} else {
		console.info(`Success! ${one} is equal to ${two}!`);
	}
}

function nextServerNumber(arrayOfInts) {
	let lowestServerNumber = 1;
	let found = false;

	while (!found) {
		if (arrayOfInts.indexOf(lowestServerNumber) >= 0) {
			lowestServerNumber += 1;
		} else {
			found = true;
		}
	}

	return lowestServerNumber;
}

assert(nextServerNumber([5, 3, 1]), 2);
assert(nextServerNumber([5, 4, 1, 2]), 3);
assert(nextServerNumber([3, 2, 1]), 4);
assert(nextServerNumber([2, 3]), 1);
assert(nextServerNumber([]), 1);

/**************************/

let Tracker = function () {
	this.hostnames = {};
};

Tracker.prototype.allocate = function (hostType) {
	if (!this.hostnames[hostType]) {
		this.hostnames[hostType] = [];
	}

	let nextNumber = nextServerNumber(this.hostnames[hostType]);
	this.hostnames[hostType].push(nextNumber);
	return `${hostType}${nextNumber}`;
};

Tracker.prototype.deallocate = function (hostname) {
	let matches = hostname.match(/([a-z]+)(\d+)/);
	if (!Array.isArray(matches)) {
		throw new Error('some funky input!');
	}

	let hostType = matches[1];
	let serverNumber = parseInt(matches[2], 10);

	if (this.hostnames[hostType] && this.hostnames[hostType].indexOf(serverNumber) !== -1) {
		let index = this.hostnames[hostType].indexOf(serverNumber);
		this.hostnames[hostType].splice(index, 1);
	}
};

let tracker = new Tracker();

assert(tracker.allocate('apibox'), 'apibox1');
assert(tracker.allocate('apibox'), 'apibox2');
assert(tracker.deallocate('apibox1'), undefined);
assert(tracker.allocate('apibox'), 'apibox1');
assert(tracker.allocate('sitebox'), 'sitebox1')