const sum = (a, b) => {
    return a + b;
}

const initial = {
    Carboidrato: 0.0,
    Cinzas: 0.0,
    Cobre: 0.0,
    Colesterol: 0.0,
    Cálcio: 0.0,
    Energia: 0.0,
    Ferro: 0.0,
    "Fibra Alimentar": 0.0,
    Fósforo: 0,
    Lipídeos: 0,
    Magnésio: 0,
    Manganês: 0.0,
    Niacina: 0,
    Potássio: 0,
    Proteína: 0,
    RAE: 0,
    RE: 0,
    Riboflavina: 0,
    Sódio: 0,
    Tiamina: 0.0,
    Umidade: 0.0,
    "Vitamina A": 0,
    "Vitamina B6": 0.0,
    "Vitamina C": 0,
    Zinco: 0.0
  }  

const valoresDiarios = [
    { id: 0, nome: 'Energia', valor: 2000, unidade: 'kcal'},
    { id: 1, nome: 'Carboidrato', valor: 300, unidade: 'gramas'},
    { id: 2, nome: 'Proteína', valor: 75, unidade: 'gramas'},
    { id: 3, nome: 'Lipídeos', valor: 55, unidade: 'gramas'},
    { id: 4, nome: 'Fibra Alimentar', valor: 25, unidade: 'gramas'},
    { id: 5, nome: "Colesterol", valor: 300, unidade: 'mg'},
    { id: 6, nome: 'Sódio', valor: 2400, unidade:  'mg'},
    { id: 7, nome: 'Vitamina A', valor: 600, unidade: 'µg'},
    { id: 8, nome: 'Vitamina D', valor: 5, unidade: 'µg'},
    { id: 9, nome: 'Vitamina C', valor: 45, unidade:  'mg'},
    { id: 10, nome: 'Vitamina E', valor: 10, unidade:  'mg'},
    { id: 11, nome: 'Tiamina', valor: 1.2, unidade:  'mg'},
    { id: 12, nome: 'Riboflavina', valor: 1.3, unidade:  'mg'},
    { id: 13, nome: 'Niacina', valor: 16, unidade:  'mg'},
    { id: 14, nome: 'Vitamina B6', valor: 1.3, unidade:  'mg'},
    { id: 15, nome: 'Ácido Fólico', valor: 400, unidade: 'µg'},
    { id: 16, nome: 'Vitamina B12', valor: 2.4, unidade: 'µg'},
    { id: 17, nome: 'Biotina', valor: 30, unidade: 'µg'},
    { id: 18, nome: 'Ácido Pantotenico', valor: 5, unidade:  'mg'},
    { id: 19, nome: 'Cálcio', valor: 1000, unidade:  'mg'},
    { id: 20, nome: 'Ferro', valor: 14, unidade:  'mg'},
    { id: 21, nome: 'Magnésio', valor: 260, unidade:  'mg'},
    { id: 22, nome: 'Zinco', valor: 7, unidade:  'mg'},
    { id: 23, nome: 'Iodo', valor: 130, unidade: 'µg'},
    { id: 24, nome: 'Vitamina K', valor: 65, unidade: 'µg'},
    { id: 25, nome: 'Fósforo', valor: 700, unidade:  'mg'},
    { id: 26, nome: 'Flúor', valor: 4, unidade:  'mg'},
    { id: 27, nome: 'Cobre', valor: 900, unidade: 'µg'},
    { id: 28, nome: 'Selênio', valor: 34, unidade: 'µg'},
    { id: 29, nome: 'Molibdênio', valor: 45, unidade: 'µg'},
    { id: 30, nome: 'Cromo', valor: 35, unidade: 'µg'},
    { id: 31, nome: 'Manganês', valor: 2.3, unidade:  'mg'},
    { id: 32, nome: 'Colina', valor: 550, unidade:  'mg'}
] 

module.exports = { valoresDiarios, initial, sum }