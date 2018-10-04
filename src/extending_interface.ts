(function() {
    interface Sizes {
        sizes: string[];
    }

    //interface in type script... with values
    interface Pizza extends Sizes {
      name: string;
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
  