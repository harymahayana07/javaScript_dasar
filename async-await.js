const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if(seeds >= 10){
                resolve("Kopi didapatkan!");
            }else{
                reject("Biji Kopi habis!");
            }
        }, 1000);
    });
}

// function makeCoffee() {
//     getCoffee()
//     .then(coffee =>{
//         console.log(coffee);
//         console.log("Arik ini kopi kamu.");
//     });
// }
// async await
async function makeCoffee() {
    try {
        await checkAvailability();
        await checkStock();
        await Promise.all([boilWater(), grindCoffeeBeans()]);
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
    
  };

makeCoffee();