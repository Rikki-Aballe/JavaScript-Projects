function maria(){
    var Animal={
        Species: "Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark",
    }
    delete Animal.Age//delete
    document.getElementById("Dictionary").innerHTML=Animal.Age
}