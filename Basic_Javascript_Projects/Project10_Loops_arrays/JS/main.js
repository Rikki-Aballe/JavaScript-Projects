function call_loop(){
    var digit=""
    var M=1
    while (M<101){
        digit+= "<br>"+M
        M++
    }
    document.getElementById("loop").innerHTML=digit
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";

function for_Loop() {
    for (var R = 0; R < Instruments.length; R++) {
        Content += Instruments[R] + "<br>";
    }
    document.getElementById("list_of_Instruments").innerHTML = Content;
}

function array_function(){
    var Cat_Picture=[]
    Cat_Picture[0]="sleeping"
    Cat_Picture[1]="playing"
    Cat_Picture[2]="eating"
    Cat_Picture[3]="purring"
    document.getElementById("array").innerHTML="In this picture, the cat is "+Cat_Picture[2]+"."
}

function constant_function(){
    const musical_instrument={type:"guitar",brand:"Fender",color:"black"}
    musical_instrument.color="blue"
    musical_instrument.price="$900"
    document.getElementById("constant").innerHTML="The cost of the "+musical_instrument.type+" was "+musical_instrument.price
}

var X=82
document.write(X)
{
    let X=33
    document.write("<br>"+X)
}
document.write("<br>"+X)


function myFunction(name){
    return "Hello "+name
}

let car={
    make:"Dodge ",
    model:"Viper ",
    year:"2021 ",
    color:"red ",
    description:function(){
        return "The car is a "+this.year+this.color+this.make+this.model
        }
}

let tex="";
for (let i=0;i<10;i++){
    if(i===3){ break; }
    tex+="The number is "+i+"<br>"
}
document.getElementById("Fun").innerHTML =tex

let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) { break; }
        text += "The number is " + i + "<br>";
    }

document.getElementById("demo").innerHTML = text;
document.getElementById("Sid").innerHTML=myFunction("Lorelai")
document.getElementById("Car_Object").innerHTML = car.description()

let tea = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  tea += "The number is " + i + "<br>";
}
document.getElementById("demon").innerHTML = tea;