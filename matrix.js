let names = [{ name: "Angelina Jolie", age: 80 }, { name: "Eric Jones", age: 2 }, { name: "Paris Hilton", age: 5 }, { name: "Kayne West", age: 16 }, { name: "Bob Ziroll", age: 100 } ]

const getMatrixNames = names.map(person => {
    if (person.age > 18) {
        return `${person.name} can go to the matrix`
    }
    return `${person.name} is under age!`
});