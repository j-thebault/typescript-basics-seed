console.log("Hey TypeScript!");
const pizzas = [{ name: "Pepperoni", toppings: ["pepperoni"] }];

//classic function
let mappedPizzas = pizzas.map(function(pizza) {
  return pizza.name.toUpperCase();
});

console.log(mappedPizzas);

//several arguments require () around arguments
mappedPizzas = pizzas.map(function(pizza, index) {
  return index + "-" + pizza.name.toUpperCase();
});

console.log(mappedPizzas);

//one arguments no need for () around arguments
mappedPizzas = pizzas.map(pizza => {
  return pizza.name.toUpperCase();
});

console.log(mappedPizzas);

//implicit return - one liner
mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());


//now arrow functions and this keyword
//simple version without any this context switch
let infernoPizza = {
  name: "Blazing Inferno",
  logThis: function() {
    console.log(this);
  }
};

//work as expected
console.log(infernoPizza.logThis());


//this switching. It refer the setTimeout function
//so we need to use the old sefl = this trick to keep refrence to the original object
infernoPizza = {
    name: "Blazing Inferno",
    logThis: function() {
        const self = this;
        setTimeout( function() {
            console.log(self);
        }, 100);
    }
};

console.log(infernoPizza.logThis());


//arrow function ignore context switch ie it not rebind this value. It keep it to the parent scope value
infernoPizza = {
    name: "Blazing Inferno",
    logThis: function() {
        setTimeout( () => {
            console.log(this);
        }, 100);
    }
};

console.log(infernoPizza.logThis());