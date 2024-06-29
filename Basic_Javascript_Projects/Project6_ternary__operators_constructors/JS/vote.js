function vote_Function(){
    var age, Can_vote;
    age=document.getElementById("age").value;
    Can_vote=(age<18)?"You are too young":"You are old enough";
    document.getElementById("vote").innerHTML=Can_vote+" to vote.";
}