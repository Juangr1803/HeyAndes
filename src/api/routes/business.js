// Express
const express = require('express');
const router = express.Router();
// Services
const BusinessService = require('../services/business');
// Response
const response = require('../utils/response');
// Schemas
const {
  businessIdSchema,
  createBusinessSchema,
  updateBusinessSchema,
} = require('../utils/schemas/business');
// Validation
const validationHandler = require('../utils/middleware/validationHandler');

//--------------------------------------------------------//
//--------------------------------------------------------//

const businessService = new BusinessService();

// GET ALL
router.get('/', async (req, res, next) => {
  const { tags } = req.query;
  try {
    const business = await businessService.getAllBusiness({ tags });
    response.success(req, res, business, 200, 'Business listed');
  } catch (err) {
    response.error(req, res, 'Internal error', 500, 'No companies found');
    next(err);
  }
});
// GET
router.get(
  '/:businessId',
  // validationHandler({ businessId: businessIdSchema }, 'params'),
  async (req, res, next) => {
    const { businessId } = req.params;
    console.log({ businessId });
    try {
      const business = await businessService.getBusiness({ businessId });
      response.success(req, res, business, 200, 'Business detail');
    } catch (err) {
      response.error(req, res, 'Internal error', 500, 'No company found');
      next(err);
    }
  }
);

// POST
router.post(
  '/',
  validationHandler(createBusinessSchema),
  async (req, res, next) => {
    const { body: business } = req;

    try {
      const createBusinessId = await businessService.createBusiness({
        business,
      });
      response.success(req, res, createBusinessId, 201, 'Business created');
    } catch (err) {
      response.error(req, res, 'Internal error', 500, 'No companies create');
      next(err);
    }
  }
);

// PUT
router.put(
  '/:businessId',
  validationHandler({ businesstId: businessIdSchema }, 'params'),
  validationHandler(updateBusinessSchema),
  async (req, res, next) => {
    const { businessId } = req.params;
    const { body: business } = req;

    try {
      const updateBusinessId = await businessService.updateBusiness({
        businessId,
        business,
      });
      response.success(req, res, updateBusinessId, 200, 'Business updated');
    } catch (err) {
      response.error(req, res, 'Internal error', 500, 'No companies update');
      next(err);
    }
  }
);

// DELETE
router.delete(
  '/:businessId',
  validationHandler({ businessId: businessIdSchema }, 'params'),
  async (req, res, next) => {
    const { businessId } = req.params;

    try {
      const deleteBusinessId = await businessService.deleteBusiness({
        businessId,
      });
      response.success(req, res, deleteBusinessId, 200, 'Bussiness deleted');
    } catch (err) {
      response.error(req, res, 'Internal error', 500, 'No companies delete');
      next(err);
    }
  }
);

module.exports = router;
