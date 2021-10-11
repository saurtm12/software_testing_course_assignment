import filter from "../../filter";
import endsWith from "../../endsWith";
import at from "../../at";

const productCollection = [ 
  {
    id: 1,
    name: "apple pie cupcake", 
    price: 1.5,
    currency: "euro"
  },
  {
    id: 2,
    name: "frozen pizza", 
    price: 4,
    currency: "euro"
  },
  {
    id: 3,
    name: "birthday cake", 
    price: 8,
    currency: "euro"
  },
];

it("Search for all cakes that are cheaper than 2 €", () => {
  const cakes = filter(productCollection, (product) => endsWith(product.name, "cake"));

  const result = filter(cakes, (cake) => {
    const price = at(cake, ["price"])[0];
    return price < 2;
  })
  expect(result).toStrictEqual([productCollection[0]]);
})