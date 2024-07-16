var bill = document.getElementById("bill")
var main = document.getElementById("main")
let app = document.querySelector(".app")
let audio = new Audio("/sound.wav")

function oncart(){
    var check = false;
    var cook ="";

    if(document.getElementById("c1").checked){
        check = true;
        var quantity = document.getElementById("q1").value;
        var price = 200;
        var total = (price * quantity);
        cook += ":School Bag," + price +","+quantity+"," +total;
    }

    if(document.getElementById("c2").checked){
        check = true;
        var quantity = document.getElementById("q2").value;
        var price = 150;
        var total = (price * quantity);
        cook += ":Water Bottle," + price +","+quantity+"," +total;
    }

    if(document.getElementById("c3").checked){
        check = true;
        var quantity = document.getElementById("q3").value;
        var price = 50;
        var total = (price * quantity);
        cook += ":Notebook," + price +","+quantity+"," +total;
    }

    if(document.getElementById("c4").checked){
        check = true;
        var quantity = document.getElementById("q4").value;
        var price = 20;
        var total = (price * quantity);
        cook += ":Lunch Box," + price +","+quantity+"," +total;
    }

    if(!check)
    {
        alert("No Item Selected");
    }

    else{
        main.style.display="none";
        bill.style.display="flex";

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
        ttotal.innerHTML=`<td colspan="2">Total</td><td>${total2}</td><td>${total3}</td>`
        tb1.appendChild(ttotal);

        tb1.appendChild(tb1body)
        bill.appendChild(tb1)
    }
}
