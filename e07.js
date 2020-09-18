const numeros = [2,4,5];

const Soma = numeros.reduce((PrimeiroItem, ItemSeguinte) => {
    return PrimeiroItem + ItemSeguinte;
});

console.log(`a soma dos numeros ${numeros} é ${Soma}`);