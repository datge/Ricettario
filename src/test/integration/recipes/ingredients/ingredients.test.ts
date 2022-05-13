import 'mocha';
import { expect } from 'chai';
import { agent as request } from 'supertest';
import { getRepository, Connection, Repository } from 'typeorm';

import { app } from '../../../../index';
import { dbCreateConnection } from '../../../../orm/dbCreateConnection';
import { Ingredients } from '../../../../orm/entities/ingredients/ingredients';

describe('/api/v1/recipes/:recipes_id/ingredients/ingredients_id', () => {
  let dbConnection: Connection;
  let ingredientsRepository: Repository<Ingredients>;

  before(async () => {
    dbConnection = await dbCreateConnection();
    ingredientsRepository = getRepository(Ingredients);
  });

  after(async () => {
    await dbConnection.close();
  });

  it('should edit ingredients', async () => {
    const res = await request(app).get('/api/v1/recipes/1/ingredients/1');
    expect(res.status).to.equal(200);
    expect(res.body.data).to.be.an('array');
  });

  it('should throw 404 edit ingredients', async () => {
    const res = await request(app).get('/api/v1/recipes/10/ingredients/10');
    expect(res.status).to.equal(200);
    expect(res.body.data).to.be.an('array');
  });
});
