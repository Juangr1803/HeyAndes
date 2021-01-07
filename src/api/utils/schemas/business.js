const joi = require('@hapi/joi');

// Degine a ruler with an expression regular
const businessIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const businessNameAgencySchema = joi.string().max(100);
const businessDaySchema = joi.date().greater('2020-01-01');
const businessNameSchema = joi.string().max(80);
const businessPaymentStatusSchema = joi.string().max(80);
const businessFinalPriceSchema = joi.number().max(100000);
const businessDatePaymentSchema = joi.date();
const businessCreatedAtSchema = joi.date();
const businessPersonsSchema = joi.number().max(10);
const businessHourSchema = joi.string().max(80);
const businessTimeZoneSchema = joi.string().max(80);
const businessTotalPriceSchema = joi.number().max(100000);
const businessWayToPaySchema = joi.string().max(80);
const businessPaymentTypeSchema = joi.string().max(80);
const businessStatusSchema = joi.string().max(80);
const businessDayFromSchema = joi.date().greater('2020-01-01');
const businessDayToSchema = joi.date().greater('2020-01-01');

const createBusinessSchema = {
  nameAgency: businessNameAgencySchema.required(),
  name: businessNameSchema.required(),
  paymentStatus: businessPaymentStatusSchema.required(),
  finalPrice: businessFinalPriceSchema.required(),
  datePayment: businessDatePaymentSchema.required(),
  createdAt: businessCreatedAtSchema.required(),
  persons: businessPersonsSchema.required(),
  hour: businessHourSchema.required(),
  timeZone: businessTimeZoneSchema.required(),
  totalPrice: businessTotalPriceSchema,
  wayToPay: businessWayToPaySchema,
  paymentType: businessPaymentTypeSchema,
  status: businessStatusSchema,
  dayFrom: businessDayFromSchema,
  dayTo: businessDayToSchema,
  day: businessDaySchema,
};

const updateBusinessSchema = {
  nameAgency: businessNameAgencySchema,
  day: businessDaySchema,
  name: businessNameSchema,
  paymentStatus: businessPaymentStatusSchema,
  finalPrice: businessFinalPriceSchema,
  datePayment: businessDatePaymentSchema,
  createdAt: businessCreatedAtSchema,
  persons: businessPersonsSchema,
  hour: businessHourSchema,
  timeZone: businessTimeZoneSchema,
  totalPrice: businessTotalPriceSchema,
  wayToPay: businessWayToPaySchema,
  paymentType: businessPaymentTypeSchema,
  status: businessStatusSchema,
  dayFrom: businessDayFromSchema,
  dayTo: businessDayToSchema,
};

module.exports = {
  businessIdSchema,
  createBusinessSchema,
  updateBusinessSchema,
};
