//avoiding global variable name conflict across lessons by creating a scope with a declared and called function
(function (){
    const toppings = ['bacon','chilli'];
    const newToppings = ['pepperoni'];
    
    const allToppings = [...toppings, ...newToppings]

    console.log(allToppings);

    toppings.push('parmesan');
    toppings[0] = toppings[0].toUpperCase();
    
    //allTopping don't get reference to the original array or any objects of the original array
    //spread operator is like a foreach and add into the new array by copy. 
    console.log(allToppings);
})();