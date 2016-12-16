"use strict";

function Ksiazka() {
	this.tytul = "Wiedźmin";
	this.autor = "Andrzej Sapkowski";
	this.przeczytana=true;
	this.opiszKsiazke = function() {
		if (this.przeczytana==true){
			console.log("Książka ma tytuł " + this.tytul + " autorem jest " + this.autor + " i została przeczytana");
		} else {
			console.log("Książka ma tytuł " + this.tytul + " autorem jest " + this.autor + " i nie została przeczytana");
		}
		
	}
	
}

var book = new Ksiazka();
book.opiszKsiazke();