function Ride_Function(){
    var Height, Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride=(Height<52)?"You are to short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride+" to ride.";
}

function Partha(){
    document.getElementById("Nested_function").innerHTML=Count()
    function Count(){
        var Starting_point=9
        function Plus_one(){Starting_point +=1}
        Plus_one()
        return Starting_point
    }
}