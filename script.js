
  function changeinput(){
    document.getElementById("ea").value=document.getElementsByTagName("input")[0].value;

  }
  function changeotherinput(){
    document.getElementById("ea").value=document.getElementsByTagName("input")[1].value;

  }
  function appendnumber(e){
   document.getElementById("ea").value+=e.target.value;
  
}
  function removeeverything(){
    document.getElementById("ea").value="";
    }
function squarenumber(e){
   let thomas= document.getElementById("ea");
   thomas.value=Number(thomas.value)**2;
}
function squarerootnumber(){
    let thomas=document.getElementById("ea");
    thomas.value=Math.sqrt(Number(thomas.value))
  
}
function appendoperation(e){
    document.getElementById("ea").value+=e.target.value;
}
function evaluatenumbers(){
    let thomas= document.getElementById("ea");
    thomas.value=eval(thomas.value);
}
 var button=document.getElementById("option1");
 var button2=document.getElementById("option2");
 var number=document.getElementsByClassName("number");
 var remove=document.getElementById("backspace");
 var square=document.getElementById("square");
 var squareroot=document.getElementById("squareroot");
 square.addEventListener("click",squarenumber);
 remove.addEventListener("click",removeeverything);
 addition=document.getElementById("addition");
 equals=document.getElementById("equals");
 equals.addEventListener("click",evaluatenumbers);
 squareroot.addEventListener("click",squarerootnumber);
for (var i=0;i<document.getElementsByClassName("number").length;i++){
    number[i].addEventListener("click",appendnumber);
}
for (var i=0;i<document.getElementsByClassName("operation").length;i++){
    document.getElementsByClassName("operation")[i].addEventListener("click",appendoperation);
}
