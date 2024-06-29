var X=10
function add_numbers_1(){
    document.write(20+X+"<br>")
}
function add_numbers_2(){
    document.write(X+100+"<br>")
}
add_numbers_1()
add_numbers_2()

function Add_numbers_3(){
    var y=10
    document.write(20+y+"<br>")
}
function Add_numbers_4(){
    document.write(y+100)
}
Add_numbers_3()
Add_numbers_4()

function add_numbers_5(){
    var z=10
    console.log(15+z)
}
function add_numbers_6(){
    console.log(z+100)
}
add_numbers_5
add_numbers_6

function Sand(){
    if (new Date().getHours()<18){
        document.getElementById("Dhar").innerHTML="How are you today?"
    }
}

function you(){
    if (new Date().getHours()<12){
        document.getElementById("me").innerHTML="Good Morning!"
    }
}

function where(){
    var input=document.getElementById("who").value
    var resultElement=document.getElementById("what")

    if (input==="Hello"){
        resultElement.textContent="You entered Hello!"
    }else{
        resultElement.textContent="You entered something else."
    }
}

function Time_function(){//else if function
    var Time=new Date().getHours()
    var Reply
    if(Time<12==Time>0){
        Reply="It is morning time!"
    }
    else if (Time>=12==Time<18){
        Reply="It is afternoon."
    }
    else {
        Reply="It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML=Reply
}