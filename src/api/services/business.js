// Mongo lib
const MongoLib = require('../lib/mongo');

//-------------------------------------------------//
//------------------------------------------------//

class BusinessService {
  constructor() {
    this.collection = 'business';
    this.mongoDB = new MongoLib();
  }

  // GET ALL
  async getAllBusiness({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const business = await this.mongoDB.getAll(this.collection, query);
    return business || [];
  }

  // GET
  async getBusiness({ businessId }) {
    const company = await this.mongoDB.get(this.collection, businessId);
    return company || {};
  }

  // POST
  async createBusiness({ business }) {
    const createdBusinessId = await this.mongoDB.create(
      this.collection,
      business
    );
    return createdBusinessId;
  }

  // PUT
  async updateBusiness({ businessId, business }) {
    const updatedBusinessId = await this.mongoDB.update(
      this.collection,
      businessId,
      business
    );
    return updatedBusinessId;
  }

  // DELETE
  async deleteBusiness({ businessId }) {
    const deletedBusinessId = await this.mongoDB.delete(
      this.collection,
      businessId
    );
    return deletedBusinessId;
  }
}

module.exports = BusinessService;
