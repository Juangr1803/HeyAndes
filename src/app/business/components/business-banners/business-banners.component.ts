import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-banners',
  templateUrl: './business-banners.component.html',
  styleUrls: ['./business-banners.component.css'],
})
export class BusinessBannersComponent implements OnInit {
  @Input() bestSellingData: number;
  @Input() bestSellingDataName: string;
  @Input() mounth: string;

  constructor() {}

  ngOnInit(): void {}
}
