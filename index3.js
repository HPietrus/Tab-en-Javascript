// La méthode 'filter()'.
// comme son nom, elle parcourt tous les elts du tab, puis renvoie un nouveau tab filtré.
const salaire = [
    { nom: 'Herman', montant: 2500 },
    { nom: 'Pietrus', montant: 3500 },
    { nom: 'fifi', montant: 4500 },
    { nom: 'Riri', montant: 2500 },
    { nom: 'RORO', montant: 4500 },

];
const salairetotal = salaire.filter((val => val.montant > 3500));
console.log(salairetotal)