import request from 'supertest';
import app from '../../src/app';

import factory from '../factories';
import truncate from '../util/truncate';

describe('Session', () => {
  beforeEach(async () => {
    await truncate();
  });
  it('should fail when pass a user that does not exists', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .post('/session')
      .send(user);

    expect(response.status).toBe(401);
  });
});
