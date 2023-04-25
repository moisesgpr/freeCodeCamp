const Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let split = arguments[0].split(' ')
    let name = split[0]
    let last = split[1]
    this.getFullName = function () {
        return name + ' ' + last;
    };
    this.getFirstName = function () {
        return name;
    };
    this.getLastName = function () {
        return last;
    };
    this.setFirstName = function (newName) {
        name = newName;
    };
    this.setLastName = function (newLast) {
        last = newLast;
    };
    this.setFullName = function (fullName) {
        let newFullName = fullName.split(' ')
        name = newFullName[0]
        last = newFullName[1]
    };
};
const bob = new Person('Bob Ross');

/* Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.*/