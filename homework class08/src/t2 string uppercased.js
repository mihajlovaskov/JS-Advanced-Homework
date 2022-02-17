stringTranformUppercase = anyInput => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
        if(typeof anyInput !="string" || isNaN(anyInput)==false){
            console.log(`Your input "${anyInput}" is not of type string`);
            return reject(`Your input "${anyInput}" is not of type string`);
        }
            return resolve(console.log(`Your input "${anyInput}" in uppercased style is: ` + anyInput.toUpperCase())); 
        }, 4000);
    })
}
stringTranformUppercase(5);
stringTranformUppercase("bla");
stringTranformUppercase("8");
stringTranformUppercase(true);
stringTranformUppercase(null);
stringTranformUppercase(5/0);