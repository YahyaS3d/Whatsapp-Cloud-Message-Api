import express from 'express';
import request from 'supertest';
import { describe, it } from 'mocha';
import assert from 'assert';

import app from './app'; // Assuming this is the file that contains your app code

describe('GET /', function () {
  it('should send a WhatsApp message', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);

        // Assert that the response contains the expected data
        assert.deepStrictEqual(res.body, { success: true });

        done();
      });
  });
});