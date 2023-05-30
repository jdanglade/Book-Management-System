import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { typeDefs, resolvers } from "./prisma-definitions.mjs";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";

/*
  Using Express as middleware the Apollo server is able to connect the Apollo client and
  through GraphQL APIs. Making use of the Prisma ORM allows the Apollo sever to perform 
  CRUD operations on a MySQL Database
*/
const expressServer = express();
const httpServer = http.createServer(expressServer);
const port = process.env.PORT;
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await apolloServer.start();

expressServer.use(
  "/",
  cors(),
  bodyParser.json(),
  expressMiddleware(apolloServer, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
);

await new Promise((resolve) => httpServer.listen({ port: port }, resolve));

console.log(`Server ready at http://localhost:${port}/`);
