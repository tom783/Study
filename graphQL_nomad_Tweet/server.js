import { ApolloServer, gql } from "apollo-server";

let tweets = [
  {
    id: "1",
    text: "hel",
  },
  {
    id: "2",
    text: "hello",
  },
];

let users = [
  {
    id: "1",
    firstName: "no",
    lastName: "lss",
  },
  {
    id: "2",
    firstName: "ffff",
    lastName: "qwe",
  },
];

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
  }
  type Tweet {
    id: ID!
    text: String!
    author: User
  }

  type Query {
    allUsers(id: ID): [User!]!
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
  }

  type Mutation {
    postTweet(text: String, userId: ID): Tweet!
    deleteTweet(id: ID): Boolean!
  }
`;

const resolvers = {
  Query: {
    allTweets() {
      return tweets;
    },
    tweet(root, args) {
      console.log("call", root, args);
      return tweets.find((item) => item.id === args.id);
    },
    allUsers(root, args) {
      console.log("EE", root, args);
      return users;
    },
  },
  Mutation: {
    postTweet(root, args) {
      const newTweet = {
        id: tweets.length,
        text: args.text,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(root, args) {
      const tweet = tweets.find((item) => item.id === args.id);
      if (!tweet) return false;
      tweets = tweets.filter((item) => item.id !== args.id);
      return true;
    },
  },
  User: {
    fullName(root, args) {
      console.log("root", root, args);
      return "hello";
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log("running url", url);
});
