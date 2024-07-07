var bill = document.querySelector('.bill');
var cook = ":School Bag,200,2,400:Water Bottle,150,2,300:Notebook,50,2,100:Lunch Box,20,10,200";
var cookiearr = new Array();
cookiearr = cook.split(":");
cookiearr.shift();

var tb1 =document.createElement("table");
var tb1body = document.createElement("tbody");
var thead = document.createElement("thead")
thead.innerHTML = "<tr><th>Description</th><th>Price</th><th>Quantity</th><th>Total</th></tr>"
tb1.appendChild(thead)

var total2=0;
var total3=0;

for (let i = 0; i < cookiearr.length; i++) {
    var cookiedata = cookiearr[i].split(",");
    var row = document.createElement("tr")
    for (let j = 0; j < 4; j++) {
        var cell = document.createElement("td")
        var cellText = document.createTextNode(`${cookiedata[j]}`)
        cell.appendChild(cellText)
        row.appendChild(cell)
        
    }
    total2 += parseFloat(cookiedata[2]);
    total3 += parseFloat(cookiedata[3]);
    tb1.appendChild(row)
}

var ttotal = document.createElement("tr")
ttotal.innerHTML=`<td>Total</td><td></td><td>${total2}</td><td>${total3}</td>`
tb1.appendChild(ttotal);

tb1.appendChild(tb1body)
bill.appendChild(tb1)
