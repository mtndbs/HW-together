// the buttons arry, will use grid to place them correct
let numArrey = ["%",7,8,9,"#","!",4,5,6,"x","ce",1,2,3,"-","on",0,".","+/-","+","="]

// the main calculator body style.
let calculator = document.getElementById('btn-pad');
calculator.style.border = "solid black 1px"
calculator.style.width = "300px"
calculator.style.height = "400px"
calculator.style.backgroundColor = "yellow"
calculator.style.borderRadius = "10px" 
calculator.style.borderBottomLeftRadius = "25px" 
calculator.style.borderBottomRightRadius = "25px" 
calculator.style.margin= "auto auto" 


//screen style.
let screen = document.getElementById('screen');
screen.style.backgroundColor = "lightgrey"
 screen.style.width = "260px"
 screen.style.height = "70px"
 screen.style.margin = "10px auto"
 screen.style.border = "1px solid black"
 screen.style.borderRadius = "20px" 

//the main button calculator pad style
let mainPad = document.getElementById('number-pad')
 mainPad.style.height = "300px"
 mainPad.style.borderRadius = "5px"
 mainPad.style.marginLeft = "10px"
 mainPad.style.padding = "20px"
 mainPad.style.display = "grid"
 mainPad.style.gridTemplateColumns = "50px 50px 50px 50px 50px"
 mainPad.style.boxSizing = "border-box"


 
 // loop to create all the buttons divs , also to style them.
for(let x = 0;x<numArrey.length;x++){
    mainPad.innerHTML += '<div class="number-btn">'+numArrey[x]+'</div>'

    document.getElementsByClassName("number-btn")[x].style.color = "black";
    document.getElementsByClassName("number-btn")[x].style.border = "solid 1px black";
    document.getElementsByClassName("number-btn")[x].style.width = "40px";
    document.getElementsByClassName("number-btn")[x].style.height = "40px";
    document.getElementsByClassName("number-btn")[x].style.textAlign = "center";
    document.getElementsByClassName("number-btn")[x].style.paddingTop = "5px";
    document.getElementsByClassName("number-btn")[x].style.backgroundColor = "grey";
    document.getElementsByClassName("number-btn")[x].style.borderRadius = "10px";
}

// style of the " = " button
document.getElementsByClassName("number-btn")[20].style.marginLeft = "60px" ;
document.getElementsByClassName("number-btn")[20].style.width = "120px";
document.getElementsByClassName("number-btn")[20].style.height = "35px";
document.getElementsByClassName("number-btn")[20].style.borderRadius = "20px";






// tried to create another screen div above the btn-pad, but its not working well.

//  calculator.innerHTML += '<div id="screen"></div>'
 