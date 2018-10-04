(function() {
  class Sizes {
    constructor(public sizes: string[]) {}

    set availableSizes(sizes: string[]) {
      this.sizes = sizes;
    }

    get availableSizes() {
      return this.sizes;
    }
  }

  class Pizza  extends Sizes {
    toppings: string[] = [];

    constructor(readonly name: string, sizes : string[]) {
      super(sizes)
    }

    addTopping(topping: string) {
      this.toppings.push(topping);
    }
  }

  const pizza = new Pizza("Pepperoni with class",['small','medium']);
  pizza.addTopping("pepperoni");
  console.log(pizza);
  console.log(pizza.name);
})();
