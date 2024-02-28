const request = require('supertest');
const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  res.json({ message: "Hola desde el backend!" });
});

describe('GET /api', () => {
  it('responds with a message', async () => {
    const response = await request(app).get('/api');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: "Hola desde el backend!" });
  });
});
