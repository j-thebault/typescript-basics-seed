(function () {
    const pizza = {
        name: 'Pepperoni',
        toppings:['pepperoni']
    }

    //destructuring argument object into variables
    function order({name : pizzaName , toppings: pizzaToppings}){
        console.log(pizzaName,pizzaToppings);
        return {pizzaName, pizzaToppings}
    }

    order(pizza)

    //destructuring a returing value
    const { pizzaName } = order(pizza);
    console.log(pizzaName);

    const toppings = ['pepperoni','bacon','chili']

    const [first, second, thrid] = toppings;

    console.log(first,second,thrid)

    

})();