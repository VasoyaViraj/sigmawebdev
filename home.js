let div_projects = document.querySelectorAll('.box');

div_projects.forEach(function(box){
    box.addEventListener("click",function(e){
        if(e.target.id == "project_1"){
            window.location.replace("./project_1.html");
        }
        if(e.target.id == "project_2"){
            window.location.replace("./project_2.html");
        }
        if(e.target.id == "project_3"){
            window.location.replace("./project_3.html");
        }
    })
})






