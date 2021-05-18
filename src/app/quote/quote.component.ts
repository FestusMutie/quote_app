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
    new Quote(1, 'Fred Kamau', 'We have to stop optimizing for programmers,and start optimizing for users', ' Guru the programmer', new Date(2020,3,14),0,0),
    new Quote(2,'Festus Mutie','You always gain by giving love',' Reese Witherspoon',new Date(2019,6,9),0,0),
    new Quote(3,'Alice Kim','The purpose of life is to be happy',' Delai Lama',new Date(2019,6,9),0,0),
    new Quote(4,'Milka Mukiri','Education is not preparation for life,education is life itself',' John Dhewey', new Date(2019,6,9),0,0),
    new Quote(5,'Caro Mwangi','The real measure of wealth is how much we would be worth if we lost all our money',' John Henry', new Date(2019,6,9),0,0),
    new Quote(6,'Gerald Wake','Home is where you are loved the most and act the worst','Majorie Pay',new Date(2019,6,9),0,0),
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


