//  la méthode 'reduce()'
//  c'est l'une des méthodes array(tableau en français) les plus déroutantes en js.
// Elle consiste à itérer et à <<réduire>> les valeurs d'un tab en une seule valeur.
const items = [
    { name: 'Apple', price: 1 },
    { name: 'Orange', price: 2 },
    { name: 'Mango', price: 3 },
];

const total = items.reduce((acc, item) => {
    return acc += item.price
}, 0)
console.log(total)
// 6


