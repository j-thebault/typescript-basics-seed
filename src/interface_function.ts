(function() {
  //interface in type script... with values
  interface Pizza {
    name: string;
    sizes: string[];
    getAvaibleSize(): string[];
  }

  type getAvaibleSize = () => string [];

  interface Pizzas {
    data: Pizza[];
  }

  let pizza: Pizza;

  function createPizza(name: string, sizes: string[]): Pizza {
    return {
      name,
      sizes,
      getAvaibleSize() {
        return this.sizes;
      }
    };
  }

  pizza = createPizza("Pepperoni", ["small", "medium"]);
})();
