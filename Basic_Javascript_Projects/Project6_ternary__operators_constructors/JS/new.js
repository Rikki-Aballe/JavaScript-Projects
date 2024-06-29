function Birthday(Month, Day, Year, Zodiac){
    this.Vehicle_Month=Month
    this.Vehicle_Day=Day
    this.Vehicle_Year=Year
    this.Vehicle_Zodiac=Zodiac
}
var Kathleen =new Birthday("May", 8, 2004, "Gemini")
var Sandesh=new Birthday("August", 8, 2001,"Leo")
var Jenna=new Birthday("March",16,2006,"Pisces")
function birthday(){
    document.getElementById("New_and_this").innerHTML="Kathleen's birthday is "+Kathleen.Vehicle_Day+"th of "+Kathleen.Vehicle_Month+" year "+Kathleen.Vehicle_Year+" and her zodiac is "+Kathleen.Vehicle_Zodiac
}