var s1 = "";
var s2 = "";
var visit = 2;
var num1;
var num2;
function all_clear(){
    document.getElementById("display").innerHTML= "";
    s1="";
    s2="";
}
function clear(){
    if(visit==2){
        s1+=a; 
    }
    else{
        s2+=a;
        document.getElementById("display").innerHTML= s2;
    }
}
var operation ;
function plus(){
    visit = 3;
    num1 = s1;
    s1="";
    operation= "sum";
    //document.getElementById("display").innerHTML= s1+" + ";
}
function sub(){
    visit = 3;
    num1 = s1;
    s1="";
    operation= "sub";
    //document.getElementById("display").innerHTML= s1+" + ";
}
function mul(){
    visit = 3;
    num1 = s1;
    s1="";
    operation= "mul";
    //document.getElementById("display").innerHTML= s1+" + ";
}
function div(){
    visit = 3;
    num1 = s1;
    s1="";
    operation= "div";
    //document.getElementById("display").innerHTML= s1+" + ";
}  
function zero(){

    var a = document.getElementById("zero").textContent;
    if(visit==2){
        s1+=a;
        document.getElementById("display").innerHTML= s1;
    }
    else{
        s2+=a;
        document.getElementById("display").innerHTML= s2;
    }
}
function one(){

    var a = document.getElementById("one").textContent;
    if(visit==2){
        s1+=a;
        document.getElementById("display").innerHTML= s1;
    }
    else{
        s2+=a;
        document.getElementById("display").innerHTML= s2;
    }
}
function two(){

    var a = document.getElementById("two").textContent;
    if(visit==2){
        s1+=a;
        document.getElementById("display").innerHTML= s1;
    }
    else{
        s2+=a;
        document.getElementById("display").innerHTML= s2;
    }
} 
function three(){

    var a = document.getElementById("three").textContent;
    if(visit==2){
        s1+=a;
        document.getElementById("display").innerHTML= s1;
    }
    else{
        s2+=a;
        document.getElementById("display").innerHTML= s2;
    }
}function four(){

    var a = document.getElementById("four").textContent;
    if(visit==2){
        s1+=a;
        document.getElementById("display").innerHTML= s1;
    }
    else{
        s2+=a;
        document.getElementById("display").innerHTML= s2;
    }
}
function five(){

    var a = document.getElementById("five").textContent;
    if(visit==2){
        s1+=a;
        document.getElementById("display").innerHTML= s1;
    }
    else{
        s2+=a;
        document.getElementById("display").innerHTML= s2;
    }
} 
function six(){

    var a = document.getElementById("six").textContent;
    if(visit==2){
        s1+=a;
        document.getElementById("display").innerHTML= s1;
    }
    else{
        s2+=a;
        document.getElementById("display").innerHTML= s2;
    }
}   
function seven(){

    var a = document.getElementById("seven").textContent;
    if(visit==2){
        s1+=a;
        document.getElementById("display").innerHTML= s1;
    }
    else{
        s2+=a;
        document.getElementById("display").innerHTML= s2;
    }
}
function eight(){

    var a = document.getElementById("eight").textContent;
    if(visit==2){
        s1+=a;
        document.getElementById("display").innerHTML= s1;
    }
    else{
        s2+=a;
        document.getElementById("display").innerHTML= s2;
    }
} 
function nine(){

    var a = document.getElementById("nine").textContent;
    if(visit==2){
        s1+=a;
        document.getElementById("display").innerHTML= s1;
    }
    else{
        s2+=a;
        document.getElementById("display").innerHTML= s2;
    }
} 

//equal

function equal(){
    num2 = s2;
    //document.getElementById("display").innerHTML= num1+operation+s2;
    visit=2; 
    if(s2==0){
        document.getElementById("display").innerHTML= "Arithmatic Exc";
        return;
    }
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/result/"+operation,
        data:{
            num1: num1,
            num2: num2,
        },
        dataType: "json",
        success: function(re){  
            console.log(re);    
            document.getElementById("display").innerHTML=re;
        
        },
        failure: function(err){
            console.log("some error");
            console.log(err);
        }
    });
}