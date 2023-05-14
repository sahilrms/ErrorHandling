function getPerson(person) {
    console.log(`************************`)
    if (person.age === undefined || person.name === undefined) {
        throw new Error('Invalid paramet type')
    }
    else {
        console.log(`Name : ${person.name}, Age : ${person.age}`)
    }
    console.log(`************************`)
}

try {
    getPerson({ "name": "sahil" })
}
catch (error) {
    console.log(`Error happened ${error}`)
}
try {
    getPerson({ "name": "sahil", "age": 20 })
}
catch (error) {
    console.log(`Error happened ${error}`)
}
try {
    getPerson(["name", "sahil"])
}
catch (error) {
    console.log(`Error happened ${error}`)
}