const cart = [
    {
        name: "Laptop",
        price: 80000,
        quantity: 1,
        inStock: true
    },
    {
        name: "Mouse",
        price: 2000,
        quantity: 2,
        inStock: true
    },
    {
        name: "Keyboard",
        price: 5000,
        quantity: 1,
        inStock: false
    },
    {
        name: "Monitor",
        price: 25000,
        quantity: 2,
        inStock: true
    }
];

cart.forEach((product) => {
    console.log(product.name);
});

const productTotals = cart.map((product) => {
    return product.price * product.quantity;
});

console.log(productTotals);

const availableProducts = cart.filter((product) => {
    return product.inStock === true;
});

console.log(availableProducts);

const laptop = cart.find((product) => {
    return product.name === "Laptop";
});

console.log(laptop);

const totalPrice = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
}, 0);

console.log(totalPrice);    