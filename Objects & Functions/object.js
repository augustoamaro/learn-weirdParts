// Exemplo para demonstração de criação de um objeto.

var person = new Object();

person["firstname"] = "Tony";
person["lastname"] = "Stark";

person.addres = new Object();
person.addres.street = '111 Main St.';

console.log(person)


// Outro exemplo de criação de objeto (object literals).

const dog = {
    name: 'Thor',
    color: 'white',
    address: {
        street: '111 Main St.',
        city: 'New York'
    },
    function () {
        
    },
}

console.log(dog)