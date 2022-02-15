import express from 'express';
import cors from 'cors';
import jsonServer from 'json-server';
import jsonGraphqlExpress from 'json-graphql-server';
import db from './db.json';
import 'dotenv/config'

const path = require("path");

const server = express();
const PORT = process.env.PORT || 2020;
const isProduction = process.env.NODE_ENV === 'production'

console.log('process', PORT, isProduction)

server.use(cors());
server.use('/graphql', jsonGraphqlExpress(db));
server.use('/api', jsonServer.router(db));

if (isProduction) {
  server.use(express.static(path.join(__dirname, "..", "..", "build")));
  server.use(express.static("public"));
}

server.listen(PORT, () => {
  console.log(`JSON server started on port ${PORT}...`);
  console.log(`   * REST api available at /api`);
  console.log(`   * GraphQL available at /graphql`);
  isProduction && console.log(`   * React running at / in production mode`);
});