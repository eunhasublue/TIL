const { ApolloServer, gql } = require("apollo-server");
const { readFileSync, writeFileSync } = require("fs");

// The GraphQL schema 에 대한 정의를 하는 곳
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
    books: [Book]
    book(bookId: Int): Book
  }
  type Mutation {
    addBook(title: String, message: String, author: String, url: String): Book
    editBook(
      bookId: Int
      title: String
      message: String
      author: String
      url: String
    ): Book
    deleteBook(bookId: Int): Book
  }
  type Book {
    bookId: Int
    title: String
    message: String
    author: String
    url: String
  }
`;

// A map of functions which return data for the schema.
// 스키마에 해당하는 구현체를 적는 것
const resolvers = {
  Query: {
    hello: () => "world",
    books: () => {
      return JSON.parse(readFileSync(join(__dirname, "books.json")).toString());
    },
    book: (parent, args, context, info) => {
      const books = JSON.parse(
        readFileSync(join(__dirname, "books.json")).toString()
      );
      return books.find((book = book.bookId === args.bookId));
    },
  },
  Mutation: {
    addBook: (parent, args, context, info) => {
      const books = JSON.parse(
        readFileSync(join(__dirname, "books.json")).toString()
      );
      const maxId = Math.max(...books.map((book) => book.bookId));
      const newBook = { ...args, bookId: maxId + 1 };
      writeFileSync(
        join(__dirname, "books.json"),
        JSON.stringify([...books, newBook])
      );
      return newBook;
    },
    editBook: {
      addBook: (parent, args, context, info) => {
        const books = JSON.parse(
          readFileSync(join(__dirname, "books.json")).toString()
        );
        const newBooks = books.map((book) => {
          if (book.bookId === args.bookId) {
            return args;
          } else {
            return book;
          }
        });
        const newBook = { ...args, bookId: maxId + 1 };
        writeFileSync(join(__dirname, "books.json"), JSON.stringify(newBooks));
        return args;
      },
    },
    deleteBook: {
      addBook: (parent, args, context, info) => {
        const books = JSON.parse(
          readFileSync(join(__dirname, "books.json")).toString()
        );
        const deleted = books.find((book) => book.bookId === args.bookId);
        const newBooks = books.filter((book) => book.bookId !== args.bookId);
        const newBook = { ...args, bookId: maxId + 1 };
        writeFileSync(join(__dirname, "books.json"), JSON.stringify(newBooks));
        return deleted;
      },
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true, //graphql server 간단한 query를 날려보기 위해서 사용
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
