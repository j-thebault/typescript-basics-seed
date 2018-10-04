(function() {
  function Pizza(name: string) {
    this.name = name;
    this.toppings = [];
  }

  Pizza.prototype.addTopping = function(topping: string) {
    this.toppings.push(topping);
  };

  const pizza = new Pizza("Peperroni");

  console.log(pizza);
})();

(function() {
  class Pizza {
    toppings: string[] = [];

    constructor(readonly name: string) {
    }

    addTopping(topping: string) {
      this.toppings.push(topping);
    }
  }

  const pizza = new Pizza("Pepperoni with class");
  pizza.addTopping('pepperoni');
  console.log(pizza);
  console.log(pizza.name);
})();
