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






