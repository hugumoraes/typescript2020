const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: /*[string, boolean, number]*/ Drink = ['brown', true, 40];
const sprite: [string, boolean, number] /*Drink*/ = ['clear', true, 40];
