(function() {
  //we can exprim some contract by this kind of signature
  //it's very powerfull for functionnal programmtion as we can express any kind of function signture more easily than with Function
  let sumOrder: (price: number, quantity: number) => number;

  //not type spcified ? It is possible ?
  let functionTwo : Function;

  sumOrder = function(price: number, quantity: number): number {
    return price * quantity;
  };

  console.log(sumOrder(25, 2));
})();

(function() {
    let sumOrder: (price: number, quantity?: number) => number;
  
  
    sumOrder = (x,y =1) => {
       return x * y;
    };
  
    console.log(sumOrder(25));
    console.log(sumOrder(25,5));
  })();

