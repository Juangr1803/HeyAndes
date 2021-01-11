import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Business } from '../../models/business';
import { MessageBusiness } from '../../models/message-business';
import { BusinessService } from '../../services/business.service';

@Component({
  selector: 'app-business-detail',
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.css'],
})
export class BusinessDetailComponent implements OnInit {
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
  businessDataDetail: any = {
    id: '',
    name: '',
    data: [],
    total: 0,
  };
  id: number = 0;

  constructor(
    private activateRoute: ActivatedRoute,
    public businessService: BusinessService
  ) {}

  ngOnInit(): void {
    this.getAllBusiness();
    this.activateRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    for (let i = 0; i < this.businessData.length; i++) {
      if (this.businessData[i].id === this.id) {
        this.businessDataDetail = this.businessData[i];
      }
    }
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
