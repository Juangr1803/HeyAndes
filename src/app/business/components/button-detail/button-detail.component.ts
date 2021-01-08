import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Business } from '../../models/business';

@Component({
  selector: 'app-button-detail',
  templateUrl: './button-detail.component.html',
  styleUrls: ['./button-detail.component.css'],
})
export class ButtonDetailComponent implements OnInit {
  @Input() business: Business;
  @Output() businessClicked: EventEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  businessDetail() {
    console.log('anadir al carrito');
    this.businessClicked.emit(this.business._id);
  }
}
