// stored in stack
const name = "foo";

// stored in heap
const person = {
    "age": 10,
    "name": "boo"
}

let newName = name;
newName = "bar";

let newPerson = person;
newPerson.name= "barney";
console.log(name, newName);
console.log(person, newPerson);