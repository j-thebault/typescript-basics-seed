function sumAll(arr: any){
    return arr.reduce((prev:any, next:any) => prev + next)
}

console.log(sumAll([1,2,3,4,5,6,7,8,9,10]));

function sumAllRest(...arr: any[]){
    return arr.reduce((prev, next) => prev + next)
}

console.log(sumAllRest(1,2,3,4,5,6,7,8,9,10));

function sumAllRestMessage(message:string, ...arr: any[]){
    console.log(message);
    return arr.reduce((prev, next) => prev + next)
}

console.log(sumAllRestMessage("hello",1,2,3,4,5,6,7,8,9,10));