const cars = require('./cars.json')
const rs = require('readline-sync')

let Velocidade = () => {
    let result = cars.map(car => car.Acceleration);
    let lastvalue = 0;
    let car = {};

    result.forEach((Acceleration, i) => {
        if (Acceleration > lastvalue) {
            lastvalue = Acceleration;
            car = cars[i];

        }
        
    });

    return car;
}

let Potencia = () => {
    let result = cars.map(car => car.Horsepower);
    let lastvalue = 0;
    let car = {};

    result.forEach((Horsepower, i) => {
        if (Horsepower > lastvalue) {
            lastvalue = Horsepower;
            car = cars[i];

        }
        
    });

    return car;
}

console.log('Digite A ou B\n:');
let options = ['A','B'];
let input = rs.keyInSelect(options);

switch (options[input]){
     case 'A':
         console.log(Velocidade());
         break;
     case 'B': 
         console.log(Potencia());
         break;
}


