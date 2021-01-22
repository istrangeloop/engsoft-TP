const sum = (a, b) => {
    return a + b;
}

const valoresDiarios = [
    { id: 0, nome: 'calorias', valor: 2000, unidade: 'kcal'},
    { id: 1, nome: 'carboidratos', valor: 300, unidade: 'gramas'},
    { id: 2, nome: 'proteinas', valor: 75, unidade: 'gramas'},
    { id: 3, nome: 'gorduras_totais', valor: 55, unidade: 'gramas'},
    { id: 4, nome: 'gorduras_saturadas', valor: 22, unidade: 'gramas'},
    { id: 5, nome: 'fibra_alimentar', valor: 25, unidade: 'gramas'},
    { id: 6, nome: 'sodio', valor: 2400, unidade:  'mg'},
    { id: 7, nome: 'vitamina_a', valor: 600, unidade: 'µg'},
    { id: 8, nome: 'vitamina_d', valor: 5, unidade: 'µg'},
    { id: 9, nome: 'vitamina_c', valor: 45, unidade:  'mg'},
    { id: 10, nome: 'vitamina_e', valor: 10, unidade:  'mg'},
    { id: 11, nome: 'tiamina', valor: 1.2, unidade:  'mg'},
    { id: 12, nome: 'riboflavina', valor: 1.3, unidade:  'mg'},
    { id: 13, nome: 'niacina', valor: 16, unidade:  'mg'},
    { id: 14, nome: 'vitamina_b6', valor: 1.3, unidade:  'mg'},
    { id: 15, nome: 'acido_folico', valor: 400, unidade: 'µg'},
    { id: 16, nome: 'vitamina_b12', valor: 2.4, unidade: 'µg'},
    { id: 17, nome: 'biotina', valor: 30, unidade: 'µg'},
    { id: 18, nome: 'acido_pantotenico', valor: 5, unidade:  'mg'},
    { id: 19, nome: 'calcio', valor: 1000, unidade:  'mg'},
    { id: 20, nome: 'ferro', valor: 14, unidade:  'mg'},
    { id: 21, nome: 'magnesio', valor: 260, unidade:  'mg'},
    { id: 22, nome: 'zinco', valor: 7, unidade:  'mg'},
    { id: 23, nome: 'iodo', valor: 130, unidade: 'µg'},
    { id: 24, nome: 'vitamina_k', valor: 65, unidade: 'µg'},
    { id: 25, nome: 'fosforo', valor: 700, unidade:  'mg'},
    { id: 26, nome: 'fluor', valor: 4, unidade:  'mg'},
    { id: 27, nome: 'cobre', valor: 900, unidade: 'µg'},
    { id: 28, nome: 'selenio', valor: 34, unidade: 'µg'},
    { id: 29, nome: 'molibdenio', valor: 45, unidade: 'µg'},
    { id: 30, nome: 'cromo', valor: 35, unidade: 'µg'},
    { id: 31, nome: 'manganes', valor: 2.3, unidade:  'mg'},
    { id: 32, nome: 'colina', valor: 550, unidade:  'mg'}
]

module.exports = { valoresDiarios, sum }