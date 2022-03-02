//Task 1
function Person(id, firstName, lastName, age){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function(){
        console.log(`The person full name is ${this.firstName} ${this.lastName}`);
    }
}

function Animal(name, age){
    this.name = name;
    this.age = age;
    this.eat = function(){
        console.log(`The animal ${this.name} eats specific food`)
    };
    this.sleep = function(){
        console.log(`The animal ${this.name} sleeps a lot`)
    }
}

function Cat(name, age, color, ownerid){
    Object.setPrototypeOf(this, new Animal(name, age));
    this.color = color.sort(() => Math.random() - Math.random()).slice(0, 1)[0]; //randomly chooses a color, from an array of colors
    this.ownerid = !ownerid ? null : ownerid;
    this.meow = function(){
        console.log(`The cat ${this.name} says Meow.`);
    }
    this.detailsOfOwner = function(arrayOfPeople){
        if(this.ownerid == null) {
            console.log(`The cat ${this.name} does not have an owner`)
        }
        else{
            //Task 2
            (arrayOfPeople.filter(pers => this.ownerid == pers.id)
            .map(person => `The person ${person.firstName} ${person.lastName}, aged ${person.age} is the owner of the ${this.name} cat`))
            .forEach(per => console.log(per))
        }
    }
}

let arrayOfFivePeople = [new Person(1, "Petko", "Petkovski", 22), 
new Person(2, "Slavko", "Slavkovki", 33), 
new Person(3, "Stojce", "Stojcevksi", 44),
new Person(4, "Stanko", "Stankovski", 55), 
new Person(5, "Vlatko", "Vlatkovki", 66)]

let arrayOfTwoCats = [new Cat("Kitty", 2, ["brown", "white", "black", "yellow", "grey"], 2),
new Cat("Katy", 3, ["brown", "white", "black", "yellow", "grey"], 3)]

console.log(arrayOfFivePeople);
console.log(arrayOfTwoCats);

//Task 2
let cat1 = new Cat("Kitty", 2, ["brown", "white", "black", "yellow", "grey"], 5);
cat1.detailsOfOwner(arrayOfFivePeople);
let cat2 = new Cat("Katy", 3, ["brown", "white", "black", "yellow", "grey"]);
cat2.detailsOfOwner(arrayOfFivePeople);

function PersianCat(name, age, color, ownerid, eyeColor){
    Object.setPrototypeOf(this, new Cat(name, age, color, ownerid));
    this.eyeColor = eyeColor;
    this.furDescription = function(){
        console.log(`The persian cat ${this.name} has full fur!`)
    }
}

function RagDollCat(name, age, color, ownerid, weight){
    Object.setPrototypeOf(this, new Cat(name, age, color, ownerid));
    this.weight = weight;
    this.printPersonality = function(boolean){
        if(boolean == true){
            this.isFriendly = true 
            console.log(`The ragdollcat ${this.name} is friendly`)
        }
        else if (boolean == false){
            this.isFriendly = false
            console.log(`The ragdollcat ${this.name} is NOT friendly`)
        }
    }
     
} 

let ragdollcat = new RagDollCat("Mache", 2, ["brown", "white", "black", "yellow", "grey"], 4, 5)
ragdollcat.printPersonality(true);
console.log(ragdollcat);
console.log(ragdollcat.isFriendly);
ragdollcat.printPersonality(false);
console.log(ragdollcat);
console.log(ragdollcat.isFriendly);
ragdollcat.detailsOfOwner(arrayOfFivePeople);

let persiancat = new PersianCat("Machence", 4, ["brown", "white", "black", "yellow", "grey"], 2, "red")
persiancat.furDescription()
persiancat.detailsOfOwner(arrayOfFivePeople);