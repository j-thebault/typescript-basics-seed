(function () {
    let pizzaSize: string = 'small';
    
    //could work with any primitive type or an enum
    function selectSize(size: 'small' | 'medium' | 'larger') : void{
        pizzaSize = size;
    }
    
    selectSize('medium');
    
    console.log(`Pizza Size : ${pizzaSize}`)   
}
)();