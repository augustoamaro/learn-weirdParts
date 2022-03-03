const person = {
    firstname: 'Tony',
    lastname: 'Stark',
    isProgrammer: true,
    age: 43,
    nationality: 'American'

}

const json = JSON.stringify(person) // passar para JSON
console.log(json)

const object = JSON.parse(json) // passar pra object
console.log(object)