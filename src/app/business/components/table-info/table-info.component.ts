import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessService } from '../../services/business.service';

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.css'],
})
export class TableInfoComponent implements OnInit {
  @Input() businessData: any[];

  constructor(
    public businessService: BusinessService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  businessDetail(id) {
    this.router.navigate(['/empresas', id]);
  }
}
