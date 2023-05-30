/*
  Prisma GraphQL Type Definitions and Resolvers for Apollo
*/

import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

export const typeDefs = `
    type Book {
      id: String!
      title: String!
      author: String!
      publicationYear: Int!
      createdAt: String!
      updatedAt: String
    }
    type Query {
      getBooks: [Book]
      getBookByID(id: String!): Book
      getBookByTitle(title: String!): Book
      getBooksByAuthor(author: String): [Book]
      getBooksByPublicationYear(publicationYear: Int!): [Book]
    }
    type Mutation {
      createBook(title: String!, author: String!, publicationYear: Int!): Book
      updateBook(title: String!, author: String!, publicationYear: Int!): Book
      deleteBook(title: String!): Book
}
`;

export const resolvers = {
  Query: {
    getBooks: async (_, args) => {
      try {
        return await prismaClient.book.findMany();
      } catch (e) {
        if (e.code === "INTERNAL_SERVER_ERROR") {
          console.log(`Could not retrieve any books\n` + e.toString());
        }
        throw e;
      }
    },
    getBookByID: async (_, args) => {
      try {
        return await prismaClient.book.findUnique({
          where: {
            id: args.id,
          },
        });
      } catch (e) {
        if (e.code === "INTERNAL_SERVER_ERROR") {
          console.log(
            `Could not get book with that id: ${args.id}\n` + e.toString()
          );
        }
        throw e;
      }
    },
    getBookByTitle: async (_, args) => {
      try {
        return await prismaClient.book.findUnique({
          where: {
            title: args.title,
          },
        });
      } catch (e) {
        if (e.code === "INTERNAL_SERVER_ERROR") {
          console.log(
            `Could not get a book with ${args.title}\n` + e.toString()
          );
        }
      }
      throw e;
    },
    getBooksByAuthor: async (_, args) => {
      try {
        return await prismaClient.book.findMany({
          where: {
            author: args.author,
          },
        });
      } catch (e) {
        if (e.code === "INTERNAL_SERVER_ERROR") {
          console.log(
            `Could not get books with author ${args.author}\n` + e.toString()
          );
        }
      }
      throw e;
    },
    getBooksByPublicationYear: async (_, args) => {
      try {
        return await prismaClient.book.findMany({
          where: {
            publicationYear: args.publicationYear,
          },
        });
      } catch (e) {
        if (e.code === "INTERNAL_SERVER_ERROR") {
          console.log(
            `Could not get books with that publication year: ${args.publicationYear}\n` +
              e.toString()
          );
        }
      }
      throw e;
    },
  },
  Mutation: {
    createBook: async (_, args) => {
      try {
        return await prismaClient.book.create({
          data: {
            title: args.title,
            author: args.author,
            publicationYear: args.publicationYear,
          },
        });
      } catch (e) {
        if (e.code === "INTERNAL_SERVER_ERROR") {
          console.log("Could not create that new book\n" + e.toString);
        }
        throw e;
      }
    },
    updateBook: async (_, args) => {
      try {
        return await prismaClient.book.update({
          where: {
            title: args.title,
          },
          data: {
            author: args.author,
            publicationYear: args.publicationYear,
          },
        });
      } catch (e) {
        if (e.code === "INTERNAL_SERVER_ERROR") {
          console.log("Could not update that book\n" + e.toString);
        }
        throw e;
      }
    },
    deleteBook: async (_, args) => {
      try {
        return await prismaClient.book.delete({
          where: {
            title: args.title,
          },
        });
      } catch (e) {
        if (e.code === "INTERNAL_SERVER_ERROR") {
          console.log("Could not delete that book\n" + e.toString);
        }
        throw e;
      }
    },
  },
};
