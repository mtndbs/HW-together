let mainPad = document.getElementById('number-pad')
 mainPad.style.height = "300px"
 mainPad.style.width = "300px"
 mainPad.style.border = "solid black 1px"
 mainPad.style.paddingLeft = "30px"
 mainPad.style.padding = "20px"
 mainPad.style.display = "grid"
 mainPad.style.gridTemplateColumns = "50px 50px 50px"

for(let x = 0;x<10;x++){
    mainPad.innerHTML += '<div class="number-btn">'+x+'</div>'

    document.getElementsByClassName("number-btn")[x].style.color = "red";
    document.getElementsByClassName("number-btn")[x].style.border = "solid 1px black";
    document.getElementsByClassName("number-btn")[x].style.width = "40px";
    document.getElementsByClassName("number-btn")[x].style.height = "40px";
    document.getElementsByClassName("number-btn")[x].style.textAlign = "center";
    document.getElementsByClassName("number-btn")[x].style.paddingTop = "5px";


    
}


