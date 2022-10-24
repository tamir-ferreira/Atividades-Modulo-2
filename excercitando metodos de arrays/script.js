async function getAPI() {
    const response = await fetch('https://randomuser.me/api/?results=10')

    return response.json()
}


const numbers = [1, 4, 5, 4, 6, 7, 6, 9]
const pessoa = [
    {
        nome: "aroldo",
        idade: 25
    },
    {
        nome: "ronaldo",
        idade: 30
    }
]

/* ---------------- MAP --------------- */
const map = numbers.map(number => number * 2)
console.log(map)


/* ---------------- FILTER --------------- */
const filter = pessoa.filter(p => p.nome == "ronaldo")
console.log(filter)


/* ---------------- REDUCE --------------- */
const reduce = numbers.reduce((prev, atual) => prev + atual, 0)
console.log(reduce)


/* ---------------- EVERY --------------- */
const every = numbers.every(number => number >= 5)
console.log(every)


/* ---------------- SOME --------------- */
const some = numbers.some(number => number > 8)
console.log(some)


/* ---------------- FIND --------------- */
const find = pessoa.find(p => p.idade == 30)
console.log(find)


/* ---------------- INCLUDES --------------- */
const includes = pessoa.filter(p => p.nome.includes('ar'))
console.log(includes)





/* FILTRANDO ELEMENTOS */
getAPI().then(data => {
    console.log(data)
    const filtered = data.results.filter(p => p.gender === 'female');
    console.log(filtered)
})


/*  */
getAPI().then(data => {
    const people = []
    data.results.forEach(element => {
        const { first, last } = element.name
        const { gender } = element
        const { age } = element.dob
        people.push({
            Nome: first + " " + last,
            Sexo: gender,
            Idade: age
        })

    });
    console.table(people)
})


/* MAIORES DE 30 ANOS */
getAPI().then(data => {
    const result = data.results.filter(element => element.dob.age > 50)
    console.log(result)
})