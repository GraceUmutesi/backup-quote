import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FirstQuote} from '../first-quote'


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
 
  @Input()folder: FirstQuote;
  @Output() isComplete = new EventEmitter<boolean>();
  deleteQuote(complete:boolean){
        this.isComplete.emit(complete);
      }

  constructor() { }

  ngOnInit() {
  }

}




