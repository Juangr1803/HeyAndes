import { Component, OnInit } from '@angular/core';
import { Business } from '../../models/business';
import { MessageBusiness } from '../../models/message-business';
import { BusinessService } from '../../services/business.service';
const moment = require('moment');

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
      id: 'Ruhiscos-Aventuras-Spa',
      name: 'Ruhiscos Aventuras Spa',
      data: [],
      total: 0,
    },
    {
      id: 'Fuego-Nativo',
      name: 'Fuego Nativo',
      data: [],
      total: 0,
    },
    {
      id: 'test',
      name: 'test',
      data: [],
      total: 0,
    },
    {
      id: 'Por-fortuna',
      name: 'Por fortuna',
      data: [],
      total: 0,
    },
    {
      id: 'Agencia-1',
      name: 'Agencia 1',
      data: [],
      total: 0,
    },
  ];
  business: any[] = [];
  bestSellingData: number = 0;
  bestSellingDataName: string = '';
  mounth: string = '';

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
    const numbers = [];
    for (let i = 0; i < this.businessData.length; i++) {
      if (this.businessData[i].total > this.bestSellingData) {
        this.bestSellingDataName = this.businessData[i].name;
        this.bestSellingData = this.businessData[i].total;

        this.businessData[i].data.sort((a, b) => {
          a = new Date(a.datePayment).getMonth();
          b = new Date(b.datePayment).getMonth();
          numbers.push(a);
          return a > b ? -1 : a < b ? 1 : 0;
        });
      }
    }

    const tempArray = [...numbers].sort();
    const tempArrayFilter = tempArray.filter((number, i) =>
      i == 0 ? true : tempArray[i - 1] != number
    );
    const counterMounth = tempArrayFilter.map((n) => {
      return { number: n, count: 0 };
    });

    counterMounth.map((countM, i) => {
      const actualMounthLength = tempArray.filter(
        (number) => number === countM.number
      ).length;
      countM.count = actualMounthLength;
    });

    for (let i = 0; i < counterMounth.length; i++) {
      counterMounth.sort((a, b) => {
        return b.count - a.count;
      });
    }
    this.dateToMounth(counterMounth[0].number);
  }

  dateToMounth(number) {
    switch (number) {
      case 1:
        this.mounth = 'ENERO';
        break;
      case 2:
        this.mounth = 'FEBRERO';
        break;
      case 3:
        this.mounth = 'MARZO';
        break;
      case 4:
        this.mounth = 'ABRIL';
        break;
      case 5:
        this.mounth = 'MAYO';
        break;
      case 6:
        this.mounth = 'JUNIO';
        break;
      case 7:
        this.mounth = 'JULIO';
        break;
      case 8:
        this.mounth = 'AGOSTO';
        break;
      case 9:
        this.mounth = 'SEPTIEMBRE';
        break;
      case 10:
        this.mounth = 'OCTUBRE';
        break;
      case 11:
        this.mounth = 'NOVIEMBRE';
        break;
      case 12:
        this.mounth = 'DICIEMBRE';
        break;
      default:
        this.mounth = 'ENERO';
        break;
    }
  }

  // GET ALL
  getAllBusiness() {
    this.businessService.getAllBusiness().subscribe(
      (res) => {
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
