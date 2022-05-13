import 'mocha';
import { expect } from 'chai';
import { agent as request } from 'supertest';
import { getRepository, Connection, Repository } from 'typeorm';

import { app } from '../../../index';
import { dbCreateConnection } from '../../../orm/dbCreateConnection';
import { Recipes } from '../../../orm/entities/recipes/recipes';

describe('/api/v1/recipes', () => {
  let dbConnection: Connection;
  let recipesRepository: Repository<Recipes>;

  before(async () => {
    dbConnection = await dbCreateConnection();
    recipesRepository = getRepository(Recipes);
  });

  after(async () => {
    await dbConnection.close();
  });

  it('should return a list of recipes', async () => {
    const res = await request(app).get('/api/v1/recipes');
    expect(res.status).to.equal(200);
    expect(res.body.data).to.be.an('array');
  });
});

describe('/api/v1/recipes/1', () => {
  let dbConnection: Connection;
  let recipesRepository: Repository<Recipes>;

  before(async () => {
    dbConnection = await dbCreateConnection();
    recipesRepository = getRepository(Recipes);
  });

  after(async () => {
    await dbConnection.close();
  });

  it('should the recipe with id 1', async () => {
    const res = await request(app).get('/api/v1/recipes/1');
    expect(res.status).to.equal(200);
    expect(res.body.message).to.be.equal('Show recipe');
  });
});

describe('/api/v1/recipes/10', () => {
  let dbConnection: Connection;
  let recipesRepository: Repository<Recipes>;

  before(async () => {
    dbConnection = await dbCreateConnection();
    recipesRepository = getRepository(Recipes);
  });

  after(async () => {
    await dbConnection.close();
  });

  it('should throw 404 for recipe not found with id 10', async () => {
    const res = await request(app).get('/api/v1/recipes/1');
    expect(res.status).to.equal(404);
    expect(res.body.errorMessage).to.be.equal('Recipe not found.');
  });
});

describe('/api/v1/recipes/1/image', () => {
  let dbConnection: Connection;
  let recipesRepository: Repository<Recipes>;

  before(async () => {
    dbConnection = await dbCreateConnection();
    recipesRepository = getRepository(Recipes);
  });

  after(async () => {
    await dbConnection.close();
  });

  it('should the recipe base64 with id 1', async () => {
    const res = await request(app).get('/api/v1/recipes/1/image');
    expect(res.status).to.equal(200);
  });
});

describe('/api/v1/recipes/10/image', () => {
  let dbConnection: Connection;
  let recipesRepository: Repository<Recipes>;

  before(async () => {
    dbConnection = await dbCreateConnection();
    recipesRepository = getRepository(Recipes);
  });

  after(async () => {
    await dbConnection.close();
  });

  it('should throw 404 for recipe base64 not found with id 10', async () => {
    const res = await request(app).get('/api/v1/recipes/1/image');
    expect(res.status).to.equal(404);
    expect(res.body.ErrorMessage).to.equal('Recipe not found.');
  });
});
