let audio = new Audio("./sound.wav");

function myFun(){
    
    bodyy = document.querySelector("bodyy")

    var cookiearr = new Array();

    cookiearr = document.cookie.split(":");

    document.writeln("<center><h1>Invoice </h1></center>")

    document.write("<center><table border=3 ><thead><tr><th>Description</th><th>Price/item</th><th>Quantity</th><th>Total</th></tr></thead>");

    var total2=0;
    var total3=0;

    for (var i = 1; i < cookiearr.length; i++) {
        
        var cookiedata = cookiearr[i].split(",");
        document.writeln("<tr><td>"+cookiedata[0]+"</td><td>"+cookiedata[1]+"</td><td>"+cookiedata[2]+"</td><td>"+cookiedata[3]+"</td></tr>");

        total2 += parseFloat(cookiedata[2]);
        total3 += parseFloat(cookiedata[3]);
        
    }

    document.write("<tr><td>Total</td><td>"+"</td><td>"+total2+"</td><td>"+total3+"</td></tr>");
    document.write("</thead></table></center>")


    var div = document.createElement(`div`);
    div.style.cssText = `
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;`
    
    document.body.appendChild(div);

    var btn = document.createElement("button");
    btn.innerHTML = "Download Invoice";
    btn.style.cssText = `border: none;
    outline: none;padding:8px;border-radius: 10px;cursor: pointer;`;

    
    div.appendChild(btn)

    btn.addEventListener("click",() => {
        audio.play();
        window.print();
    })
}
