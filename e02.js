const cars = require('./cars.json')

const Comparar = () => {
    let i = 0;
     cars.forEach(element => {
         if (element.Origin == 'Japan') {
             i += 1;
         }
     });
     console.log(`Na lista existem ${i} carros do Japão`)
}

Comparar();