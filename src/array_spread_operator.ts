//avoiding global variable name conflict across lessons by creating a scope with a declared and called function
(function (){
    const toppings = ['bacon','chilli'];
    const newToppings = ['pepperoni'];
    
    const allToppings = [...toppings, ...newToppings]

    console.log(allToppings);
})();