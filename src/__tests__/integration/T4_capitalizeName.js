import isEmpty from "../../isEmpty";
import upperFirst from "../../upperFirst";

const product = {
    id: 1,
    name: "apple pie cupcake",
    price: 1.5,
    currency: "euro"
};

it("Capitalize the first letter of product name if it is not empty", () => {
    if (!isEmpty(product.name)) {
      product.name = upperFirst(product.name);
    }
    expect(product.name).toEqual("Apple pie cupcake");
});