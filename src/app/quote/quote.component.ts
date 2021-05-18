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
    new Quote(1, 'Quotes about technology', 'We have to stop optimizing for programmers,and start optimizing for users', 'Author Festus', new Date(2020,3,14),0,0),
    new Quote(2,'Quotes about love','You always gain by giving love','Author Reese Witherspoon',new Date(2019,6,9),0,0),
    new Quote(3,'Quotes about life','The purpose of life is to be happy','Author Delai Lama',new Date(2019,6,9),0,0),
    new Quote(4,'Quotes about education','Education is not preparation for life,education is life itself','Author John Dhewey', new Date(2019,6,9),0,0),
    new Quote(5,'Quotes about wealth','The real measure of wealth is how much we would be worth if we lost all our money','Author John Henry', new Date(2019,6,9),0,0),
    new Quote(6,'Quotes about family','Home is where you are loved the most and act the worst','Author Majorie Pay',new Date(2019,6,9),0,0),
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


