$(document).ready(function(){
    let myButton = $('#planetsSW');
    let myTable = $("#infoPlanets");
    function printPlanetsInTable(someResults){        
        for (let items of someResults.results){
            myTable.append("<tr></tr>");
            let myTr=$("tr").last();
            myTr.append(`<td style="border:1px solid black; text-align:center;">${items.name}</td>`);
            let myTd=$("td").last();  
            myTr.append(`<td style="border:1px solid black; text-align:center;">${items.population}</td>`);
            myTr.append(`<td style="border:1px solid black; text-align:center;">${items.climate}</td>`);
            myTr.append(`<td style="border:1px solid black; text-align:center;">${items.gravity}</td>`);                 
    }
}
    function getInfoOnPlanets(link){
        $.ajax({
            url: `${link}`,
            success: function (resultPlanets){
                printPlanetsInTable(resultPlanets)    
          },
            error: function(error){
                console.log(`There is some problem with the API`);
                myTable.append("<tr></tr>");
                let myTr=$("tr").last();
                myTr.append(`<td style="border:1px solid black; text-align:center;">There is some problem with the API</td>`);
                let myTd=$("td").last();  
            }
        })    
    }
    myButton.click(function(){
        getInfoOnPlanets(`https://swapi.dev/api/planets/?page=1`);
    })   
})