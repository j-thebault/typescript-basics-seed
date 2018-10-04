(function() {
  //interface in type script... with values
  interface Pizza {
    name: string;
    sizes: string[];
    toppings? : number;
    getAvaibleSize(): string[];
    [key : number] : any; //like a map inside the object
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
  pizza[1] = 'xyz';
  pizza.toppings = 2;


})();
