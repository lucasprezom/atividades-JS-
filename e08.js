const numeros = [2,4,5,10];

const Soma = numeros.reduce((PrimeiroItem, ItemSeguinte) => {
    return PrimeiroItem + ItemSeguinte;
});

console.log(Soma/numeros.length)