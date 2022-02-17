//Details on posts
async function makeCall(url,id){//na klik ke vadi post za izbran ID od strana na korisnikot
    let response = await fetch(`${url}${id}`);
    let data = await response.json();
    printPostInTable(data)
}
async function makeCall2(url){ //na klik ke gi vadi site postovi
    let response = await fetch(url);
    let data = await response.json();
    printAllPostsInTable(data)
}
let table = document.getElementById("myTable1")

printAllPostsInTable = post => {
    post.forEach(ps => {
    let myTr = document.createElement("tr");
    table.appendChild(myTr);
    let myTd = document.createElement("td");
    myTd.setAttribute("style", "border:1px solid black; text-align:center;");
    myTr.append(myTd);
    myTd.innerHTML = `<i>${ps.id}</i>`;
    myTd = document.createElement("td");
    myTd.setAttribute("style", "border:1px solid black; text-align:center;");
    myTr.append(myTd); 
    myTd.innerHTML = `<i>${ps.userId}</i>`;
    myTd = document.createElement("td");
    myTd.setAttribute("style", "border:1px solid black; text-align:center;");
    myTr.append(myTd); 
    myTd.innerHTML = `<i>${ps.title}</i>`;
    myTd = document.createElement("td");
    myTd.setAttribute("style", "border:1px solid black; text-align:center;");
    myTr.append(myTd); 
    myTd.innerHTML = `<i>${ps.body}</i>`;
    })
}
printPostInTable = post => {
    let myTr = document.createElement("tr");
    table.appendChild(myTr);
    let myTd = document.createElement("td");
    myTd.setAttribute("style", "border:1px solid black; text-align:center;");
    myTr.append(myTd);
    myTd.innerHTML = `<i>${post.id}</i>`;
    myTd = document.createElement("td");
    myTd.setAttribute("style", "border:1px solid black; text-align:center;");
    myTr.append(myTd); 
    myTd.innerHTML = `<i>${post.userId}</i>`;
    myTd = document.createElement("td");
    myTd.setAttribute("style", "border:1px solid black; text-align:center;");
    myTr.append(myTd); 
    myTd.innerHTML = `<i>${post.title}</i>`;
    myTd = document.createElement("td");
    myTd.setAttribute("style", "border:1px solid black; text-align:center;");
    myTr.append(myTd); 
    myTd.innerHTML = `<i>${post.body}</i>`;
}
document.getElementById("button1").addEventListener('click', () =>{//na klik vadi post za izbran ID
    makeCall(`https://jsonplaceholder.typicode.com/posts/`, document.getElementById("input1").value);
    document.getElementById("input1").value="";
})
document.getElementById("button2").addEventListener('click', () =>{//na klik gi vadi site postovi
    makeCall2(`https://jsonplaceholder.typicode.com/posts/`);
})
//Details on users - i tuka primenuvam ista logika: 1-va varijanta e da na klik vadi detali za 1 user 
//i 2-ra varijanta e na klik da izvadi detali za site user-i
async function makeCallUsers(url,id){
    let response = await fetch(`${url}${id}`);
    let data = await response.json();
    printUserInTable(data)
}
async function makeCall2Users(url){
    let response = await fetch(url);
    let data = await response.json();
    printAllUsersInTable(data)
}
let table2 = document.getElementById("myTable2")

printAllUsersInTable = user => {
    user.forEach(us => {
        let myTr = document.createElement("tr");
        table2.appendChild(myTr);
        let myTd = document.createElement("td");
        myTd.setAttribute("style", "border:1px solid black; text-align:center;");
        myTr.append(myTd); 
        myTd.innerHTML = `<i>${us.id}</i>`;
        myTd = document.createElement("td");
        myTd.setAttribute("style", "border:1px solid black; text-align:center;");
        myTr.append(myTd); 
        myTd.innerHTML = `<i>${us.name}</i>`;
        myTd = document.createElement("td");
        myTd.setAttribute("style", "border:1px solid black; text-align:center;");
        myTr.append(myTd); 
        myTd.innerHTML = `<i>${us.username}</i>`;
        myTd = document.createElement("td");
        myTd.setAttribute("style", "border:1px solid black; text-align:center;");
        myTr.append(myTd); 
        myTd.innerHTML = `<i>${us.email}</i>`;
        myTd = document.createElement("td");
        myTd.setAttribute("style", "border:1px solid black; text-align:center;");
        myTr.append(myTd); 
        myTd.innerHTML = `<i>${us.phone}</i>`;
        myTd = document.createElement("td");
        myTd.setAttribute("style", "border:1px solid black; text-align:center;");
        myTr.append(myTd); 
        myTd.innerHTML = `<i>${us.website}</i>`;
        myTd = document.createElement("td");
        myTd.setAttribute("style", "border:1px solid black; text-align:left;");
        myTr.append(myTd); 
        myTd.innerHTML = `<i>street: ${us.address.street}<br>suite: ${us.address.suite}<br>city: 
        ${us.address.city}<br>zipcode: ${us.address.zipcode}<br>geo lat and lng: ${us.address.geo.lat}; ${us.address.geo.lng}</i>`;
        myTd = document.createElement("td");
        myTd.setAttribute("style", "border:1px solid black; text-align:left;");
        myTr.append(myTd); 
        myTd.innerHTML = `<i>name: ${us.company.name}<br>catchPhrase: ${us.company.catchPhrase}<br>bs: ${us.company.bs}</i>`;
    })
}
printUserInTable = user => {
    let myTr = document.createElement("tr");
    table2.appendChild(myTr);
    let myTd = document.createElement("td");
    myTd.setAttribute("style", "border:1px solid black; text-align:center;");
    myTr.append(myTd); 
    myTd.innerHTML = `<i>${user.id}</i>`;
    myTd = document.createElement("td");
    myTd.setAttribute("style", "border:1px solid black; text-align:center;");
    myTr.append(myTd); 
    myTd.innerHTML = `<i>${user.name}</i>`;
    myTd = document.createElement("td");
    myTd.setAttribute("style", "border:1px solid black; text-align:center;");
    myTr.append(myTd); 
    myTd.innerHTML = `<i>${user.username}</i>`;
    myTd = document.createElement("td");
    myTd.setAttribute("style", "border:1px solid black; text-align:center;");
    myTr.append(myTd); 
    myTd.innerHTML = `<i>${user.email}</i>`;
    myTd = document.createElement("td");
    myTd.setAttribute("style", "border:1px solid black; text-align:center;");
    myTr.append(myTd); 
    myTd.innerHTML = `<i>${user.phone}</i>`;
    myTd = document.createElement("td");
    myTd.setAttribute("style", "border:1px solid black; text-align:center;");
    myTr.append(myTd); 
    myTd.innerHTML = `<i>${user.website}</i>`;
    myTd = document.createElement("td");
    myTd.setAttribute("style", "border:1px solid black; text-align:left;");
    myTr.append(myTd); 
    myTd.innerHTML = `<i>street: ${user.address.street}<br>suite: ${user.address.suite}<br>city: 
    ${user.address.city}<br>zipcode: ${user.address.zipcode}<br>geo lat and lng: ${user.address.geo.lat}; ${user.address.geo.lng}</i>`;
    myTd = document.createElement("td");
    myTd.setAttribute("style", "border:1px solid black; text-align:left;");
    myTr.append(myTd); 
    myTd.innerHTML = `<i>name: ${user.company.name}<br>catchPhrase: ${user.company.catchPhrase}<br>bs: ${user.company.bs}</i>`;
}
document.getElementById("button3").addEventListener('click', () =>{
    makeCallUsers(`https://jsonplaceholder.typicode.com/users/`, document.getElementById("input2").value);
    document.getElementById("input2").value="";
})
document.getElementById("button4").addEventListener('click', () =>{
    makeCall2Users(`https://jsonplaceholder.typicode.com/users/`);
})