import filter from "../../filter";
import add from "../../add";

const cart = [ 
    {
        id: 1,
        name: "apple pie cupcake", 
        price: 1.5,
        currency: "euro",
        quantity: 3,
    },
    {
        id: 2,
        name: "frozen pizza", 
        price: 4,
        currency: "euro",
        quantity: 2,
    },
    {
        id: 3,
        name: "birthday cake", 
        price: 8,
        currency: "euro",
        quantity: 1,
    },
];

const newProduct = {
    id: 2,
    name: "frozen pizza", 
    price: 4,
    currency: "euro",
};

function addProductToCart(product) {
  const existingProducts = filter(cart, (productInCart) => {
    return product.id === productInCart.id
  });

  if (existingProducts.length) {
    const existingProduct = cart.find(productInCart => productInCart.id === product.id);
    const newQuantity = add(existingProduct.quantity, 1);
    existingProduct.quantity = newQuantity;
  } else {
    cart.push({
        ...newProduct,
        quantity: 1
    });
  }
}

it("Count number of identical items added to the cart correctly", () => {
    let newCart = [ 
        {
            id: 1,
            name: "apple pie cupcake", 
            price: 1.5,
            currency: "euro",
            quantity: 3,
        },
        {
            id: 2,
            name: "frozen pizza", 
            price: 4,
            currency: "euro",
            quantity: 3,
        },
        {
            id: 3,
            name: "birthday cake", 
            price: 8,
            currency: "euro",
            quantity: 1,
        },
    ];
    addProductToCart(newProduct);
    expect(cart).toStrictEqual(newCart);
})