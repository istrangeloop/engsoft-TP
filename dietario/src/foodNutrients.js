const data = {};
const food_objects = [];

async function init() {
  return fetch("nutrientes.json")
    .then((res) => res.json())
    .then(
      (result) => {
        Object.assign(data, result);
        Object.assign(
          food_objects,
          data.items.map((x) =>
            x.reduce((acc, cur, i) => {
              acc[data.columns[i]] = cur;
              return acc;
            }, {})
          )
        );
      },
      (error) => {
        console.log(error);
      }
    );
}

function getFoods() {
  return food_objects;
}

function getColumns() {
  return data.columns;
}

function getUnits() {
  return data.units;
}

export { init, getFoods, getColumns, getUnits };
