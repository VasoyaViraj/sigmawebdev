function oncart(){
    var check = false;
    var cookievalue ="";

    if(document.getElementById("c1").checked){
        check = true;
        var quantity = document.getElementById("q1").value;
        var price = 200;
        var total = (price * quantity);
        cookievalue += ":School Bag," + price +","+quantity+"," +total;
    }

    if(document.getElementById("c2").checked){
        check = true;
        var quantity = document.getElementById("q2").value;
        var price = 150;
        var total = (price * quantity);
        cookievalue += ":Water Bottle," + price +","+quantity+"," +total;
    }

    if(document.getElementById("c3").checked){
        check = true;
        var quantity = document.getElementById("q3").value;
        var price = 50;
        var total = (price * quantity);
        cookievalue += ":Notebook," + price +","+quantity+"," +total;
    }

    if(document.getElementById("c4").checked){
        check = true;
        var quantity = document.getElementById("q4").value;
        var price = 20;
        var total = (price * quantity);
        cookievalue += ":Lunch Box," + price +","+quantity+"," +total;
    }

    if(!check)
    {
        alert("No Item Selected");
    }
    else{
        document.cookie = cookievalue;
        window.location="project_2_bill.html"
    }
}