function dottedborder (){
    document.getElementById('tempid2').style.border = "black 5px dashed"  
}
function undottedborder (){
    document.getElementById('tempid2').style.border = "black 5px solid"     
}
function newstyle(x){
    x.style.backgroundColor = "antiquewhite";
    dottedborder()
}
function oldstyle(x){
    x.style.backgroundColor = 'white';
    undottedborder()
}
function rightanswer(){
    let x = "Right, well done!";
    document.getElementById("output1").innerHTML = x;
}
function wronganswer(){
    let x = "Wrong, try again!!!";
    document.getElementById("output1").innerHTML = x;   
}
function showanswer1(){ 
    document.getElementById('output1.5').style.display = "initial";
    document.getElementById("output1.5").innerHTML = "1988";
    document.getElementById("showanswer1").innerHTML = "Hide Answer";
    if (document.getElementById("showanswer1").innerHTML = "Hide Answer") {
        document.getElementById('showanswer1').onclick = hideanswer1;
    }      
}

function hideanswer1(){
    document.getElementById('output1.5').style.display = "none";
    document.getElementById("showanswer1").innerHTML = "Show Answer";
    if (document.getElementById("showanswer1").innerHTML = "Show Answer") {
        document.getElementById('showanswer1').onclick = showanswer1;     
    }
}
function showanswer2(){ 
    document.getElementById('output2.5').style.display = "initial";
    document.getElementById("output2.5").innerHTML = "1988";
    document.getElementById("showanswer2").innerHTML = "Hide Answer";
    if (document.getElementById("showanswer2").innerHTML = "Hide Answer") {
        document.getElementById('showanswer2').onclick = hideanswer2;
    }      
}

function hideanswer2(){
    document.getElementById('output2.5').style.display = "none";
    document.getElementById("showanswer2").innerHTML = "Show Answer";
    if (document.getElementById("showanswer2").innerHTML = "Show Answer") {
        document.getElementById('showanswer2').onclick = showanswer2;     
    }
}
function rightanswer2(){
    let x = "Right, well done!";
    document.getElementById("output2").innerHTML = x;
}
function wronganswer2(){
    let x = "Wrong, try again!!!";
    document.getElementById("output2").innerHTML = x; 
}

function showanswer3(){ 
    document.getElementById('output3.5').style.display = "initial";
    document.getElementById("output3.5").innerHTML = "East";
    document.getElementById("showanswer3").innerHTML = "Hide Answer";
    if (document.getElementById("showanswer3").innerHTML = "Hide Answer") {
        document.getElementById('showanswer3').onclick = hideanswer3;
    }      
}

function hideanswer3(){
    document.getElementById('output3.5').style.display = "none";
    document.getElementById("showanswer3").innerHTML = "2028";
    if (document.getElementById("showanswer3").innerHTML = "Show Answer") {
        document.getElementById('showanswer3').onclick = showanswer3;     
    }
}
function rightanswer3(){
    let x = "Right, well done!";
    document.getElementById("output3").innerHTML = x;
}
function wronganswer3(){
    let x = "Wrong, try again!!!";
    document.getElementById("output3").innerHTML = x; 
}
function showanswer5(){ 
    document.getElementById('output5.5').style.display = "initial";
    document.getElementById("output5.5").innerHTML = "4000";
    document.getElementById("showanswer5").innerHTML = "Hide Answer";
    if (document.getElementById("showanswer5").innerHTML = "Hide Answer") {
        document.getElementById('showanswer5').onclick = hideanswer5;
    }      
}
function hideanswer5(){
    document.getElementById('output5.5').style.display = "none";
    document.getElementById("showanswer5").innerHTML = "Show Answer";
    if (document.getElementById("showanswer5").innerHTML = "Show Answer") {
        document.getElementById('showanswer5').onclick = showanswer5;     
    }
}
function rightanswer5(){
    let x = "Right, well done!";
    document.getElementById("output5").innerHTML = x;
}
function wronganswer5(){
    let x = "Wrong, try again!!!";
    document.getElementById("output5").innerHTML = x; 
}
function showanswer6(){ 
    document.getElementById('output6.5').style.display = "initial";
    document.getElementById("output6.5").innerHTML = "1,364 MWe";
    document.getElementById("showanswer6").innerHTML = "Hide Answer";
    if (document.getElementById("showanswer6").innerHTML = "Hide Answer") {
        document.getElementById('showanswer6').onclick = hideanswer6;
    }      
}
function hideanswer6(){
    document.getElementById('output6.5').style.display = "none";
    document.getElementById("showanswer6").innerHTML = "Show Answer";
    if (document.getElementById("showanswer6").innerHTML = "Show Answer") {
        document.getElementById('showanswer6').onclick = showanswer6;     
    }
}
function rightanswer6(){
    let x = "Right, well done!";
    document.getElementById("output6").innerHTML = x;
}
function wronganswer6(){
    let x = "Wrong, try again!!!";
    document.getElementById("output6").innerHTML = x; 
}













