import isEmpty from "../../isEmpty";
import map from "../../map";
import divide from "../../divide";
import reduce from "../../reduce";
import add from "../../add";
import ceil from "../../ceil";

const data = [ 
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

function getTotalOrder(order) {
  if (!isEmpty(order)) {
    const priceValues = map(order, product => {
      const price = product.price
      return price
    });
    const totalPrice = reduce(priceValues, (sum, price) => sum + price, 0)
    //asumming tax is 10%
    const taxPrice = divide(totalPrice, 10)
    const totalPriceAndTax = ceil(add(totalPrice, taxPrice), 2)
    return totalPriceAndTax
  } else {
    return 0.00
  }
}

it("Shows the total order price, including taxes, which is rounded to the second decimal", () => {
  const result = getTotalOrder(data);
  expect(result).toEqual( ceil((1.5+4+8)*1.1, 2) );
});