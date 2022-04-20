var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function () {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// Não fazer isso! Apenas para demonstração.
john.__proto__ = person;

for (var prop in john) {
    console.log('for', prop + ': ' + john[prop])
}

console.log(john.getFullName()) // John Doe
console.log(john.firstname); // John

var jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;

console.log(jane.getFullName())