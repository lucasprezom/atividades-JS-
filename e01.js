const cars = require('./cars.json')
const rs = require('readline-sync')

let res = rs.questionInt("Digite um número:\n")

const Comparar = () => {
    let i = 0;
     cars.forEach(element => {
         if (element.Horsepower > res) {
             i += 1;
         }
     });
     console.log(`Na lista existem ${i} carros com força maior do que ${res}\n`)
}

Comparar();