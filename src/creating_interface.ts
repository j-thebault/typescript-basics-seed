//classic type
(function(){
    type Pizza = {
        name : string,
        sizes : string[]
    }
    
    let pizza : Pizza;

    function createPizza(name:string,sizes:string[]) : Pizza {
        return {name,sizes}
    }

    pizza = createPizza('Pepperoni',['small','medium']);
})();


(function(){

    //interface in type script... with values
    interface Pizza {
        name : string,
        sizes : string[]
    }

    interface Pizzas {
        data : Pizza[]
    }
    
    let pizza : Pizza;

    function createPizza(name:string,sizes:string[]) : Pizza {
        return {name,sizes}
    }

    pizza = createPizza('Pepperoni',['small','medium']);
})();

