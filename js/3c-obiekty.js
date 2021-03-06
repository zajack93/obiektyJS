"use strict";

function Ksiazka() {
	this.tytul = "Wiedźmin";
	this.autor = "Andrzej Sapkowski";
	this.przeczytana=true;
	this.opiszKsiazke = function() {
		if (this.przeczytana==true){
			console.log("Książka ma tytuł " + this.tytul + " autorem jest " + this.autor + " i została przeczytana.");
		} else {
			console.log("Książka ma tytuł " + this.tytul + " autorem jest " + this.autor + " i nie została przeczytana.");
		}
		
	}
	
}

function iloscPrzeczytanych(iloscKsiazek) {
	var licznik=0;
	for (var i=0; i<iloscKsiazek.length; i++) {
		if (iloscKsiazek[i].przeczytana==true) {
			licznik++;
		} 
	}
	return licznik;
	
}

var book = new Ksiazka();
book.opiszKsiazke();

var book2 = new Ksiazka();
book2.autor = "Stephen King";
book2.tytul = "Skazani na Shawshank";
book2.przeczytana=true;  //true!! :D
book2.opiszKsiazke();

var book3 = new Ksiazka();
book3.autor = "Paullina Simons";
book3.tytul = "Jeździec miedziany";
book3.przeczytana=false;  //true!!!!!! :D
book3.opiszKsiazke();

var biblioteka = [book, book2, book3];
//console.log(biblioteka);

var obliczKsiazki = iloscPrzeczytanych(biblioteka);
console.log("ilość przeczytanych książek to: " + obliczKsiazki);