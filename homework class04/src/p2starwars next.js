$(document).ready(()=>{
    let myNextButton = $("#nextPlanet");
    myNextButton.hide()
    let myPreviousButton = $("#previuosPlanet");
    myPreviousButton.hide()
    let myButton = $('#planetsSW');
    let myTable = $("#infoPlanets");
    let myTr = $(".myTr");
    printPlanetsInTable = someResults => {        
            someResults.results.forEach((items) => {
            myTable.append(`<tr class="myTr"></tr>`);
            myTr = $(".myTr").last();
            myTr.append(`<td style="border:1px solid black; text-align:center;">${items.name}</td>`);
            let myTd=$("td").last();  
            myTr.append(`<td style="border:1px solid black; text-align:center;">${items.population}</td>`);
            myTr.append(`<td style="border:1px solid black; text-align:center;">${items.climate}</td>`);
            myTr.append(`<td style="border:1px solid black; text-align:center;">${items.gravity}</td>`);                 
    })
}
    getInfoOnPlanets = link => {
        $.ajax({
            url: `${link}`,
            success: resultPlanets => {printPlanetsInTable(resultPlanets)},
            error: error=>{
                console.log(`There is some problem with the API`);
                myTable.append("<tr></tr>");
                let myTr=$("tr").last();
                myTr.append(`<td style="border:1px solid black; text-align:center;">There is some problem with the API</td>`);
                let myTd=$("td").last();  
            }
        })    
    }
    myButton.click(()=>{
        getInfoOnPlanets(`https://swapi.dev/api/planets/?page=1`);
        myNextButton.show();
    })  
    myNextButton.click(()=>{
        $(".myTr").remove();
        getInfoOnPlanets(`https://swapi.dev/api/planets/?page=2`);
        myNextButton.hide();
        myPreviousButton.show()
    })
    myPreviousButton.click(()=>{
        $(".myTr").remove();
        getInfoOnPlanets(`https://swapi.dev/api/planets/?page=1`);
        myPreviousButton.hide();
        myNextButton.show();
    })
})
    