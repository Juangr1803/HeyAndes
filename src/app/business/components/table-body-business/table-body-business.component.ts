import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
} from '@angular/core';
import { Business } from '../../models/business';

@Component({
  selector: 'app-table-body-business',
  templateUrl: './table-body-business.component.html',
  styleUrls: ['./table-body-business.component.css'],
})
export class TableBodyBusinessComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // console.log(this.business);
  }

  // ngOnChanges(changes): void {
  //   // console.log(this.business);
  //   // console.log(changes);
  // }
}
