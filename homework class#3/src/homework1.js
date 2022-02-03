$(document).ready(function(){
    $("#getCities").click(function(){
        $.ajax({
            url: "https://api.openaq.org/v1/cities",
            mode: "no-cors",
            headers: {"Access-Control-Allow-Origin": "*",},
            success: function(citiesResults){
                console.log(citiesResults);
                let parsedCitiesResults = JSON.parse(citiesResults);
                console.log(parsedCitiesResults);
                //get an error message, don't proceed further, entering the error part of AJAX call
            },
            error: function(errCitiesResults){
                console.log("There is some kind of a problem with Cities' API and we are proceeding with pokemons' details")
                $.ajax({
                    url: "https://pokeapi.co/api/v2/pokemon",
                    success: function(pokemonResults){
                        console.log(pokemonResults)
                        for (i=0;i<10;i++){
                            $("#listCities").append(`<li><b>Pokemon name:</b> ${pokemonResults.results[i].name}; <b>URL:</b> ${pokemonResults.results[i].url}</li>`)
                        };
                    },
                    error: function(pokemonResults){
                        console.log("There is a problem with pokemons' API as well!!!")
                        
                    }
                })
            }
        })
    })
})