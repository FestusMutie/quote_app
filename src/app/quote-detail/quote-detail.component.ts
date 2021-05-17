import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Output() isComplete = new EventEmitter<boolean>();

  @Input() quote: Quote;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upvote(){
    this.quote.upvote+=1;
  }
  downvote(){
    this.quote.downvote+=1;
  }
  
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
constructor(){}
ngOnInit(){
  
}

}




