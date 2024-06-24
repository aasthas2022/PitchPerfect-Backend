/**
 * server.js
 * 
 * This is the main entry point for the server application. It sets up the Express server, 
 * loads environment variables, and mounts the API routes. The server listens on a specified 
 * port, defaulting to 3000 if not provided in the environment variables.
 */

require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

module.exports.handler = serverless(app);
