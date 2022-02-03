let table = document.getElementById("tableFirstUser")
    function getUserStats(id){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(function(usersStats){
        console.log(usersStats);
        usersStats.json().then(function(readableResults){
            console.log(readableResults);
            let myTr = document.createElement("tr");
            table.appendChild(myTr);
            let myTd = document.createElement("td");
            myTd.setAttribute("style", "border:1px solid black; text-align:center;");
            myTr.append(myTd); 
            myTd.innerHTML = `<b>User id:</b>`;
            myTd = document.createElement("td");
            myTd.setAttribute("style", "border:1px solid black; text-align:center;");
            myTr.append(myTd); 
            myTd.innerHTML = `<b>User name:</b>`;
            myTd = document.createElement("td");
            myTd.setAttribute("style", "border:1px solid black; text-align:center;");
            myTr.append(myTd); 
            myTd.innerHTML = `<b>User username:</b>`;
            myTd = document.createElement("td");
            myTd.setAttribute("style", "border:1px solid black; text-align:center;");
            myTr.append(myTd); 
            myTd.innerHTML = `<b>User email:</b>`;
            myTd = document.createElement("td");
            myTd.setAttribute("style", "border:1px solid black; text-align:center;");
            myTr.append(myTd); 
            myTd.innerHTML = `<b>User phone:</b>`;
            myTd = document.createElement("td");
            myTd.setAttribute("style", "border:1px solid black; text-align:center;");
            myTr.append(myTd); 
            myTd.innerHTML = `<b>User website:</b>`;
            myTd = document.createElement("td");
            myTd.setAttribute("style", "border:1px solid black; text-align:center;");
            myTr.append(myTd); 
            myTd.innerHTML = `<b>User address:</b>`;
            myTd = document.createElement("td");
            myTd.setAttribute("style", "border:1px solid black; text-align:center;");
            myTr.append(myTd); 
            myTd.innerHTML = `<b>User company:</b>`;
            myTr = document.createElement("tr");
            table.appendChild(myTr);
            myTd = document.createElement("td");
            myTd.setAttribute("style", "border:1px solid black; text-align:center;");
            myTr.append(myTd); 
            myTd.innerHTML = `<i>${readableResults.id}</i>`;
            myTd = document.createElement("td");
            myTd.setAttribute("style", "border:1px solid black; text-align:center;");
            myTr.append(myTd); 
            myTd.innerHTML = `<i>${readableResults.name}</i>`;
            myTd = document.createElement("td");
            myTd.setAttribute("style", "border:1px solid black; text-align:center;");
            myTr.append(myTd); 
            myTd.innerHTML = `<i>${readableResults.username}</i>`;
            myTd = document.createElement("td");
            myTd.setAttribute("style", "border:1px solid black; text-align:center;");
            myTr.append(myTd); 
            myTd.innerHTML = `<i>${readableResults.email}</i>`;
            myTd = document.createElement("td");
            myTd.setAttribute("style", "border:1px solid black; text-align:center;");
            myTr.append(myTd); 
            myTd.innerHTML = `<i>${readableResults.phone}</i>`;
            myTd = document.createElement("td");
            myTd.setAttribute("style", "border:1px solid black; text-align:center;");
            myTr.append(myTd); 
            myTd.innerHTML = `<i>${readableResults.website}</i>`;
            myTd = document.createElement("td");
            myTd.setAttribute("style", "border:1px solid black; text-align:left;");
            myTr.append(myTd); 
            myTd.innerHTML = `<i>street: ${readableResults.address.street}<br>suite: ${readableResults.address.suite}<br>city: 
            ${readableResults.address.city}<br>zipcode: ${readableResults.address.zipcode}<br>geo lat and lng: ${readableResults.address.geo.lat}; ${readableResults.address.geo.lng}</i>`;
            myTd = document.createElement("td");
            myTd.setAttribute("style", "border:1px solid black; text-align:left;");
            myTr.append(myTd); 
            myTd.innerHTML = `<i>name: ${readableResults.company.name}<br>catchPhrase: ${readableResults.company.catchPhrase}<br>bs: ${readableResults.company.bs}</i>`;
            
        })
    })
    .catch(function(errorUsersStats){
        console.log("There is some kind of a problem with the API!!!")
    })
}

document.getElementById("getPersonStats").addEventListener('click', function(){
        getUserStats(document.getElementById("myInput").value);
        document.getElementById("myInput").value="";
})

