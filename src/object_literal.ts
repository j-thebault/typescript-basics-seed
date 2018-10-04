const pizza = {
    name: 'Pepperoni',
    price: 15
};

const toppings = ['pepperoni'];

//old fashion
let order = {
 pizza : pizza,
 toppings : toppings
};

console.log(order);

//object literal
order = {
    pizza,
    toppings
};

console.log(order);

function createOrder(pizza: any, topping: any){
    return {pizza, toppings}
}

console.log(createOrder(pizza, toppings))

const pizzaWithFunc = {
    name: 'Pepperoni',
    price: 15,
    //daclaration of function as a property
    //this is correctly bind to the object instance
    getName(){
        return this.name;
    }
}

console.log(pizzaWithFunc.getName())