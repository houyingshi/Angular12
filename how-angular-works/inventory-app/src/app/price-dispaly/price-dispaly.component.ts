import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'price-dispaly',
  templateUrl: './price-dispaly.component.html',
  styleUrls: ['./price-dispaly.component.css'],
  inputs:['price']
})
export class PriceDispalyComponent implements OnInit {
  price!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
