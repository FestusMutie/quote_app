import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = "quote";
  
  quotes: Quote[] = [
    new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', 'Author Festus', new Date(2020,3,14),0,0),
    new Quote(2,'Buy Cookies','I have to buy cookies for the parrot','Author Festus',new Date(2019,6,9),0,0),
    new Quote(3,'Get new Phone Case','Diana has her birthday coming up soon','Author Festus',new Date(2019,6,9),0,0),
    new Quote(4,'Get Dog Food','Pupper likes expensive snacks','Author Festus', new Date(2019,6,9),0,0),
    new Quote(5,'Solve math homework','Damn Math','Author Festus', new Date(2019,6,9),0,0),
    new Quote(6,'Plot my world domination plan','Cause I am an evil overlord','Author Festus',new Date(2019,6,9),0,0),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }
  ngOnInit(){
  }
}


