// const user = {
//     name: 'alex' ,
//     age: 23 , 
//     isAdmin: false
// }

// console.log(user.name)

// const users = {
//     Alex: {
//         age: 23 , 
//         isAdmin: false
//     },
//     john: {
//         age: 99 , 
//         isAdmin: true ,
//         sayHello (name) {
// console.log(`hello ${name}`)
//         }
//     }
// }

// console.log(users.Alex.isAdmin)
// console.log(users.john)
// users.john.sayHello('Tom')

// const users = [
//     {
//         name: 'alex' ,
//         age: 23 , 
//         isAdmin: false
//     },
//     {
//         name: 'john' ,
//         age: 30 , 
//         isAdmin: true
//     },
// ]

// users.push({
//     name: 'ivan' ,
//     age: 18 , 
//     isAdmin: true
// })

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i])
// }

// const foo = 'Hello world'
// console.log (foo.toUpperCase())

const user = {
    name: 'Eshibek',
    age: 16,
    from: 'Kgz'
}

console.log(user)


const helloUser = {
    sayHello(name) {
        console.log(`Hello ${name}`)
    }
}

helloUser.sayHello('Eshibek')


const users = [
    {
        name: 'Alex', age: 18, isAdmin: true
    },
    {
        name: 'john', age: 62, isAdmin: false
    },
    {
        name: 'maria', age: 39, isAdmin: true
    },
    {
        name: 'kevin', age: 38, isAdmin: false
    },
    {
        name: 'vova', age: 10, isAdmin: false
    },
    {
        name: 'sasha', age: 23, isAdmin: true
    },
    {
        name: 'Zinaida Petrovna', age: 43, isAdmin: true
    }
]

let commonUsers = 0

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        commonUsers++;
    }
    
}

console.log(commonUsers)