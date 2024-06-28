document.write("10" + 5)///coercion operator
document.write(typeof 3)//typeof operator

function une(){//NaN
    document.getElementById("one").innerHTML=0/0
}

function duex(){
    document.getElementById("two").innerHTML=isNaN('This is a string')
}

function trois(){
    document.getElementById('three').innerHTML=isNaN('007')
}

document.write(4E420)//infinity
document.write(-5E999)//-infinity
document.write(20>2)//boolean logic
console.log(3+5)

console.log(4>9)

//double equal signs
document.write(3==3)
document.write(4==1)

//triple equal signs
x=10
y=10
document.write(x===y)

x=10
y="soup"
document.write(x===y)

x=10
y="10"
document.write(x===y)

x=10
y=12
document.write(x==y)

//logical operators
document.write(2<5 && 4>1)//and operator
document.write(4<1 && 5>1)
document.write(4>2 || 4>2)//or operator
document.write(4<2 || 4<2)

//not operator
function quatre(){
    document.getElementById("Not").innerHTML=!(66>3)
}

function cinq(){
    document.getElementById("not").innerHTML=!(33<22)
}