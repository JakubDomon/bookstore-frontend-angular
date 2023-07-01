import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit{
  @Input() books: any;
  summary: number = 0;

  ngOnInit(): void {
      this.calculatePrice();
  }

  calculatePrice(){
    this.books.forEach(element => {
      this.summary += element.price;
    })
  }
}
