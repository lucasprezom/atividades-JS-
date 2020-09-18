const cars = require('./cars.json')

let carsUS = [];


cars.forEach((car) => {
    if (car.Origin === "US") {
        carsUS.push(car)
    }
})

let soma = carsUS.map((car) => car.Horsepower).reduce((acc, car) => acc + car);

console.log(soma);
