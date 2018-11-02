

    var elem = document.getElementById("dotte");
    var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
    var rgb = theCSSprop.match(/\d+/g);
   

var isMouseDown = false;
document.onmousedown = function() { isMouseDown = true };
document.onmouseup   = function() { isMouseDown = false };

function changeNum(heh) {
    if(isMouseDown) {
      
       var x = Number(heh.value) ; 
       rgb[1] = x; 
        let  str="rgb("+rgb[0]+","+x+","+rgb[2]+")"
  document.getElementById("dotte").style.backgroundColor=str; 
document.getElementById("resultat").innerHTML = str
let red=Number(rgb[0]).toString(16)
let green=Number(rgb[1]).toString(16)
let blue=Number(rgb[2]).toString(16)

if( (rgb[0]<=0) &&(rgb[1]<=0)&& (rgb[2]<=0))
{document.getElementById("resultHexa").innerHTML= "000000"}

if (rgb[0]>255) {red="FF"}
if (rgb[1]>255) {green="FF"}
if (rgb[2]>255) {blue="FF"}

document.getElementById("resultHexa").innerHTML=("#"+String(red+green+blue).toUpperCase())
    

    
} }

function changeNum1(heh) {
    if(isMouseDown) {
       debugger ; 
       var x = Number(heh.value) ; 
       rgb[2]=x; 
        let  str="rgb("+rgb[0]+","+rgb[1]+","+x+")"
  document.getElementById("dotte").style.backgroundColor=str; 
document.getElementById("resultat").innerHTML = str
let red=Number(rgb[0]).toString(16)
let green=Number(rgb[1]).toString(16)
let blue=Number(rgb[2]).toString(16)

if( (rgb[0]<=0) &&(rgb[1]<=0)&& (rgb[2]<=0))
{document.getElementById("resultHexa").innerHTML= "000000"}

if (rgb[0]>255) {red="FF"}
if (rgb[1]>255) {green="FF"}
if (rgb[2]>255) {blue="FF"}

document.getElementById("resultHexa").innerHTML=("#"+String(red+green+blue).toUpperCase())


    
} }

function changeNum2(heh) {
    if(isMouseDown) {
       debugger ; 
       var x = Number(heh.value) ; 
       rgb[0]=x ; 
        let  str="rgb("+x+","+rgb[1]+","+rgb[2]+")"
  document.getElementById("dotte").style.backgroundColor=str; 
document.getElementById("resultat").innerHTML = str
let red=Number(rgb[0]).toString(16)
let green=Number(rgb[1]).toString(16)
let blue=Number(rgb[2]).toString(16)

if( (rgb[0]<=0) &&(rgb[1]<=0)&& (rgb[2]<=0))
{document.getElementById("resultHexa").innerHTML= "000000"}

if (rgb[0]>255) {red="FF"}
if (rgb[1]>255) {green="FF"}
if (rgb[2]>255) {blue="FF"}

document.getElementById("resultHexa").innerHTML=("#"+String(red+green+blue).toUpperCase())
    
} }
function convert(event) {
	event.preventDefault()
 var hrgb = document.getElementById("rgb-value").value;
 
  document.getElementById("dotte").style.backgroundColor=hrgb
  document.getElementById("resultat").innerHTML =hrgb
  var tab=hrgb.match(/\d+/g)
  




let red=Number(tab[0]).toString(16)
let green=Number(tab[1]).toString(16)
let blue=Number(tab[2]).toString(16)

if( (tab[0]<=0) &&(tab[1]<=0)&& (tab[2]<=0))
{document.getElementById("resultHexa").innerHTML= "000000"}

if (tab[0]>255) {red="FF"}
if (tab[1]>255) {green="FF"}
if (tab[2]>255) {blue="FF"}

document.getElementById("resultHexa").innerHTML=("#"+String(red+green+blue).toUpperCase())
document.getElementById("green-test").value=tab[1]
document.getElementById("red-test").value=tab[0]
document.getElementById("blue-test").value=tab[2]


}