(function(){
    type Size = 'small' | 'medium' | 'large';
    type Callback = (size : Size) => void;
    
    let pizzaSize : Size;

    const selectSize  : Callback = (x) => {
        pizzaSize = x;
    }

    selectSize('small');
})();