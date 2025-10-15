// var numrat =[10,20,30,40,50];
// numrat.push(60)
// numrat.splice(2,1)
// console.log(numrat)
// var adi=numrat.indexOf(40);
// console.log("Pozicioni i 40 eshte"+adi)

var person1 ={
    Emri:"Arben",
    Mosha:30,
    Adresa:"Tirane,Shqiperi",
    Adi: function() {
        console.log(this.Emri  + this.Mosha  +  this.Adresa);
    }
}

person1.Adi();