import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-business-detail',
  templateUrl: './title-business-detail.component.html',
  styleUrls: ['./title-business-detail.component.css'],
})
export class TitleBusinessDetailComponent implements OnInit {
  @Input() businessDataDetail: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  returnBusiness() {
    this.router.navigate(['/empresas']);
  }
}
