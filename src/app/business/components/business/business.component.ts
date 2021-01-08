import { Component, OnInit } from '@angular/core';
import { Business } from '../../models/business';
import { MessageBusiness } from '../../models/message-business';
import { BusinessService } from '../../services/business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
})
export class BusinessComponent implements OnInit {
  messageBusiness: MessageBusiness;
  messageB: Business[];
  businessData: any[] = [
    {
      id: 1,
      name: 'Ruhiscos Aventuras Spa',
      data: [],
      total: 0,
    },
    {
      id: 2,
      name: 'Fuego Nativo',
      data: [],
      total: 0,
    },
    {
      id: 3,
      name: 'test',
      data: [],
      total: 0,
    },
    {
      id: 4,
      name: 'Por fortuna',
      data: [],
      total: 0,
    },
    {
      id: 5,
      name: 'Agencia 1',
      data: [],
      total: 0,
    },
  ];
  business: any[] = [];

  constructor(public businessService: BusinessService) {}

  ngOnInit(): void {
    this.getAllBusiness();
  }

  filterDataBusiness() {
    for (let i = 0; i < this.businessData.length; i++) {
      this.business = this.messageB.filter((item) => {
        return item.nameAgency === this.businessData[i].name;
      });
      this.businessData[i].data = this.business;
    }
  }

  finalPriceSum() {
    for (let i = 0; i < this.businessData.length; i++) {
      let data = 0;
      for (let l = 0; l < this.businessData[i].data.length; l++) {
        data = data + this.businessData[i].data[l].finalPrice;
        if (i === 0) {
          let newData = data;
          this.businessData[i].total = newData;
        } else if (i === 1) {
          let newData = data;
          this.businessData[i].total = newData;
        } else if (i === 2) {
          let newData = data;
          this.businessData[i].total = newData;
        } else if (i === 3) {
          let newData = data;
          this.businessData[i].total = newData;
        } else {
          let newData = data;
          this.businessData[i].total = newData;
        }
      }
    }
  }

  // GET ALL
  getAllBusiness() {
    this.businessService.getAllBusiness().subscribe(
      (res) => {
        console.log(res);
        this.messageBusiness = res;
        this.messageB = this.messageBusiness.data;

        this.filterDataBusiness();
        this.finalPriceSum();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
