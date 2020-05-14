const order = false;

const breakfastPromise = new Promise( (resolve, reject) => {
 setTimeout(()=>{
    if(order){
        resolve('Your order is ready, come and get it');
    } else {
        reject( Error('Your order can not be made.') );
    }
 }, 3000)
});

console.log(breakfastPromise);
breakfastPromise
    .then(val => console.log(val))
    .catch(err => console.log(err)
)