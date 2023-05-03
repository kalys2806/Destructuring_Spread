//! Задачи по деструктуризации:

//? 1 Создайте объект с полями name, age и city. 
//?   С помощью деструктуризации получите значения этих 
//?   полей в переменные personName, personAge и personCity.

// const obj = {
//     name: 'Kalys',
//     age: 20,
//     city: 'Bishkek'
// }

// const { name } = obj
// const { age } = obj
// const { city } = obj

// const personName = name
// const personAge = age
// const personCity = city

// console.log(personName, personAge, personCity)

//? 2 У вас есть массив, содержащий объекты.
//?   Каждый объект описывает человека и содержит поля name и age.
//?   С помощью деструктуризации получите значения этих полей 
//?   для первого элемента массива в переменные firstName и firstAge.

// const arr2 = [
//     person1 = {
//         name: 'kalys',
//         age: 20
//     },
//     person2 = {
//         name: 'dony',
//         age:19
//     }
// ]

// const [{ name, age }] = arr2
// const firstName = name
// const firstAge = age

// console.log(firstName, firstAge)


//? 3 У вас есть объект, содержащий массив чисел. 
//?  С помощью деструктуризации получите первый и
//?  второй элементы массива в переменные firstNum и secondNum.

// const obj3 = {
//     arr3: [1,2,3,4,5,6,7,8,9]
// }
// const {arr3: [elem1, elem2 ] }= obj3

// const firstNum = elem1
// const secondNum = elem2

// console.log(firstNum, secondNum)

//? 4 Создайте объект person с полями name и age.
//?   С помощью деструктуризации создайте новый объект newPerson, 
//?   содержащий только поле name из объекта person.


// const person = {
// name: 'Kalys',
// agr: 20
// }
// const {name} = person

// const newPerson = name

// console.log(newPerson)

//? 5 Создайте функцию, которая принимает на вход объект с полями name, age и city,
//?  а затем с помощью деструктуризации выводит значения этих полей в консоль.

// function getInf({ name, age, city }) {
//     console.log(`Name: ${name}, Age: ${age}, City: ${city}`)
// }

// const person = {
//     name: 'Kalys',
//     age: 20,
//     city: 'Bishkek'
// }

// getInf(person)



//! Задачи со spread оператором:

//? 1 Создайте массив numbers1 с элементами 1, 2, 3 и массив numbers2 с элементами 4, 5, 6. 
//?  Используя оператор spread, объедините эти два массива в новый массив allNumbers.

// const numbers1 = [1,2,3]
// const numbers2 = [4,5,6]
// const allNumbers = [...numbers1, ...numbers2]

// console.log(allNumbers)


//? 2 Создайте объект person1 с полями name и age, а также объект person2 с полями city и gender. 
//?   Используя оператор spread, создайте новый объект newPerson, содержащий все поля из person1 и person2.


// const person1 = {
//     name: 'Kalys',
//     age: 20
// }

// const person2 = {
//     city: 'Bishkek',
//     gender: 'male'
// }

// const newPerson = {...person1, ...person2}
// console.log(newPerson)

//? 3 Создайте функцию, которая принимает на вход массив чисел и возвращает новый массив, 
//?   содержащий все элементы исходного массива и число 0 в конце. Используйте оператор spread.

// function getNumbers(arr) {
//     return [...arr, 0]
// }
// const arr3 = [1, 2, 3, 4, 5, 6, 7]
// const newArr3 = getNumbers(arr3)
// console.log(newArr3)

//? 4 Создайте объект person с полями name и age. Используя оператор spread, создайте новый объект newPerson,
//?   содержащий все поля из person, а также дополнительное поле city.

// const person4 = {
//     name: 'Kalys',
//     age: 20,
// }

// const newPerson4 = {...person4, city: 'Bishkek'}

// console.log(newPerson4)

//? 5 Создайте функцию, которая принимает на вход объект person с полями name, age и city,
//?   а затем с помощью оператора spread выводит значения этих полей в консоль.

// function getPersonInf({name,age, city}){
//     console.log(...[name, age, city])
// }

// const person5 = {
//     name: 'Kalys',
//     age:20,
//     city: 'Bishkek'
// }
// getPersonInf(person5)


//! Задачи, комбинирующие деструктуризацию и spread оператор:

//? 1 У вас есть объект person с полями name, age и city. 
//?  Создайте новый объект newPerson, который содержит все поля из person, 
//?  кроме поля city. Используйте деструктуризацию и оператор spread.

// const person1 = {
//     name: 'Kalys',
//     age: 20,
//     city: 'Bishkek'
// }

// const { name, age } = person1
// const newPerson = { name, age }

// console.log(newPerson)

//? 2 Создайте массив numbers с элементами 1, 2, 3, 4, 5. 
//?  С помощью деструктуризации и оператора spread создайте новый массив, 
//?  содержащий первый элемент исходного массива и все остальные элементы, начиная со второго.

// const arr2 = [1, 2, 3, 4, 5]
// const allArr = [0,...arr2]

// const newArr2 = [allArr]

// console.log(newArr2)

//? 3 Создайте объект person1 с полями name и age, а также объект person2 с полями city и gender. 
//?   Создайте новый объект newPerson, который содержит поле name из person1 и поля city и gender из person2.
//?   Используйте деструктуризацию и оператор spread.

// const person1 = {
//     name: 'Kalys',
//     age: 20
// }

// const person2 = {
//     city: 'Bishkeke',
//     gender: 'male'
// }
// const { name, ...inf1 } = person1
// const { ...inf2 } = person2

// const newPerson = [name, inf2]

// console.log(newPerson)

//? 4 Создайте объект person с полями name и age, а также массив hobbies со строками, описывающими хобби.
//?   Создайте новый объект newPerson, который содержит все поля из person, а также дополнительное поле hobbies,
//?   содержащее все элементы массива hobbies. Используйте деструктуризацию и оператор spread.

// const person = { 
//     name: 'Kalys',
//     age: 20,
// }

// const hobbies = ['my hobbi is anime']

// const newPerson = {...person, ...hobbies}

// console.log(newPerson)

//? 5 Создайте функцию, которая принимает на вход объект person с полями name, age и city, 
//?   а затем с помощью деструктуризации и оператора spread выводит значения этих полей в консоль, а также строку "Country: USA".

// function getPrsonInf({name,age, city}) {
//     console.log(`${name} ${age} ${city} Country: USA`);
// }

// const person = {
// name: 'Kalys',
// age: 25,
// city: 'Bishkek'
// }
// getPrsonInf(person)

