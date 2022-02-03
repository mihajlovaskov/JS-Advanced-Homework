let myButton = document.getElementById("getDogImages")
let myInput = document.getElementById("numberImage")
let dogDiv = document.createElement("div");

fetch("https://dog.ceo/api/breed/hound/images")
.then(function(dogImages){  
    console.log(dogImages);
    dogImages.json().then(function(readableImages){
        console.log(readableImages)
        myButton.addEventListener('click', function(){//najprakticno mi e Userot 
            //da si ja povikuva slikata spored broj vnesen vo input pole. 
            //NO, podole ima i alternativa so for loop, da gi izvadi site sliki
            dogDiv.innerHTML= `<img src = "${readableImages.message[myInput.value-1]}">`;
            myButton.after(dogDiv)
            //FOR-ot E ALTERNATIVA PRI KOJA NA KLIK NA BUTTON SE GENERIRAAT SITE SLIKI OD KUCINJATA. ZA DA 
            //FUNKCIONIRA, MORA DA SE ZAKOMENTIRA LINIJA 3 OD POGORE
            // for (let images of readableImages.message){
            //     console.log(images);
            //     let dogDiv = document.createElement("div");
            //     dogDiv.innerHTML= `<img src = "${images}">`
            //     myButton.after(dogDiv);
            // }
            myInput.value=""
        })
    })
})
.catch(function(errorDogImages){
    console.log("There is some kind of a problem!!!")
})
