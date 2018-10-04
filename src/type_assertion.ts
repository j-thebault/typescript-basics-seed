(function (){
    type Pizza = {name: string, topping:number};

    const pizza : Pizza = {name : 'Blazing Inferno', topping:5 };

    const serialized : string = JSON.stringify(pizza);

    console.log(serialized)

    function getNameFromJson(obj:string) : string {
        //type for deserialization... ie it's just a cast
        let deserializedPizza = JSON.parse(obj) as Pizza;
        return deserializedPizza.name
    }
})();