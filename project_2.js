let billdev = document.querySelector(".bill")
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
        app.querySelector(".main").classList.remove("active");
        app.querySelector(".bill").classList.add("active");

        var bill = document.querySelector('.bill');
        // var cook = ":School Bag,200,2,400:Water Bottle,150,2,300:Notebook,50,2,100:Lunch Box,20,10,200";
        var cookiearr = new Array();
        cookiearr = cook.split(":");
        cookiearr.shift();

        var tb1 =document.createElement("table");
        var tb1body = document.createElement("tbody");
        var thead = document.createElement("thead")
        thead.innerHTML = "<tr><th>Description</th><th>Price/item</th><th>Quantity</th><th>Total</th></tr>"
        tb1.appendChild(thead)

        for (let i = 0; i < cookiearr.length; i++) {
        var cookiedata = cookiearr[i].split(",");
        var row = document.createElement("tr")
            for (let j = 0; j < 4; j++) {
                var cell = document.createElement("td")
                var cellText = document.createTextNode(`${cookiedata[j]}`)
                cell.appendChild(cellText)
                row.appendChild(cell)
            }
            tb1.appendChild(row)
        }

        tb1.appendChild(tb1body)
        bill.appendChild(tb1)
    }
}
