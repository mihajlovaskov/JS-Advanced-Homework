function Product(name, category, hasDiscount, price){
    this.nameOfProduct = name;
    this.categoryFood = category;
    this.hasDiscount = hasDiscount;
    this.priceOfProduct = price;
}
let products = [new Product("Piperka", "Food", "Yes", 50), 
new Product("Cekan", "Alat", "No", 150),
new Product("Lubenica", "Food", "Yes", 90),
new Product("Krema", "Kozmetika", "Yes", 140),
new Product("Srafciger", "Alat", "No", 18),
new Product("Topka", "Igracki", "Yes", 65),
new Product("Urmi", "Food", "No", 80),
new Product("Elek", "Obleka", "No", 130),
new Product("Avionce", "Igracki", "Yes", 15),
new Product("Dzemper", "Obleka", "No", 85),
new Product("Jabolko", "Food", "No", 40),
new Product("Karmin", "Kozmetika", "Yes", 160),
new Product("Mece", "Igracki", "No", 100),
new Product("Kalinka", "Food", "No", 200),
new Product("Shmishajbna", "Alat", "No", 125)];
console.log(products);

//first bullet
console.log("FIRST BULLET:")
let productPriceAboveTwenty = products.filter(p => p.priceOfProduct > 20)
.map(product => `${product.nameOfProduct}`);
console.log(productPriceAboveTwenty)//vo array dava lista na proizvodi so cena nad 20
productPriceAboveTwenty.forEach(pd => console.log(pd)); //gi identifikuva i gi dava vo console.log, eden po eden
//second bullet
console.log("SECOND BULLET:")
let foodOnDiscount = products.filter(p => p.categoryFood == "Food").filter(pr => pr.hasDiscount == "Yes")
.map(product => `${product.nameOfProduct}`);
console.log(foodOnDiscount)//vo array
foodOnDiscount.forEach(pc => console.log(pc));//eden po eden
//third bullet
console.log("THIRD BULLET:")
let productsOnDiscount = products.filter(p => p.hasDiscount =="Yes")
.map(product => `${product.nameOfProduct}`)
console.log(`Produkti na popust: ${productsOnDiscount}`)//proizvodi na koi ima discount 

let priceDiscount = products.filter(p => p.hasDiscount =="Yes") 
.map(product => product.priceOfProduct)
console.log(priceDiscount);//ceni na proizvodite na popust

aggregate = (suma, discountPrice) => {return suma += discountPrice};
let averagePrice = priceDiscount.reduce(aggregate, 0)/productsOnDiscount.length
console.log(`The average price of all products on discount amounts to ${averagePrice.toFixed(2)}`)
//fourth bullet
console.log("FOURTH BULLET:")
let productVowelNotDiscount = products.filter(p => p.hasDiscount == "No").filter(pr => pr.nameOfProduct.startsWith("A") || pr.nameOfProduct.startsWith("E") || pr.nameOfProduct.startsWith("O") || pr.nameOfProduct.startsWith("U") || pr.nameOfProduct.startsWith("I"))
.map(product => `${product.nameOfProduct} ${product.priceOfProduct}`);
console.log(`The following products and their respective prices are starting with vowel 
and are not on discount: ${productVowelNotDiscount}`)

//fifth bullet
console.log("FIFTH BULLET:")
copyArray = array => {
    let copiedArray = [];
    array.forEach(item => copiedArray.push(item));
    return copiedArray;
}

let copyProducts = copyArray(products);
//console.log(copyProducts);
copyProducts.sort((p1, p2) => p1.priceOfProduct - p2.priceOfProduct);
console.log(`This is the array of products reordered in ascending order:`) 
console.log(copyProducts);