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
    name: string;
    toppings: string[] = [];

    constructor(name: string) {
      this.name = name;
    }

    addTopping(topping: string) {
      this.toppings.push(topping);
    }
  }

  const pizza = new Pizza("Pepperoni with class");
  pizza.addTopping('pepperoni');
  console.log(pizza);
})();
