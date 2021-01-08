import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageBusiness } from '../models/message-business';

@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  API_URL: string = 'http://localhost:3000/api/business';

  messageBussines: MessageBusiness;

  constructor(private http: HttpClient) {}

  // GET ALL
  getAllBusiness(): Observable<MessageBusiness> {
    return this.http.get<MessageBusiness>(this.API_URL);
  }
}
