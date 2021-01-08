export interface Business {
  _id?: string;
  nameAgency: string;
  name: string;
  paymentStatus: string;
  finalPrice: number;
  datePayment: Date;
  createdAt: Date;
  persons: number;
  hour: string;
  timeZone?: string;
  totalPrice?: number;
  wayToPay?: string;
  paymentType?: string;
  status?: string;
  dayFrom?: Date;
  dayTo?: Date;
  day?: Date;
}
