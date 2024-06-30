function tenet(){//concatenate
    var r1="As the sun began to set, "
    var r2="casting a golden glow over the horizon, "
    var r3="the birds started to chirp softly, "
    var r4="and the cool breeze whispered through the trees."
    var whole=r1.concat(r2,r3,r4)
    document.getElementById("Concat").innerHTML=whole
}

function boy(){//slice method
    var ver="He sprinted through the Finish line, arms raised in triumph, celebrating his har-earned victory with exuberant cheers."
    var cut=ver.slice(24,30)
    document.getElementById("ant").innerHTML=cut
}

function up(){//uppercase method
    var soup="hello, world!"
    var udon=soup.toUpperCase()
    document.getElementById("ramen").innerHTML=udon
}

function wow(){//search method
    var charge="Mr. Blue has a blue horse"
    var port=charge.search("Blue")
    document.getElementById("instant").innerHTML=port
}

function string(){//string method
    var RA=111
    document.getElementById("number").innerHTML=RA.toString()
}

function method(){//toPrecision method
    var c=12938.3012987376112
    document.getElementById("precise").innerHTML=c.toPrecision(10)
}

function aah(){//toFixed
    var nom=1.234567890
    var m=nom.toFixed(3)
    document.getElementById("fix").innerHTML=m
}

function meme(){
    var tater="Hello, World"
    var tots=tater.valueOf()
    document.getElementById("value").innerHTML=tots
}