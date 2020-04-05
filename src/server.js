require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";
import logger from "morgan";

const server = new GraphQLServer({ schema });
server.express.use(logger("dev"));
const PORT = process.env.PORT;
server.start({ port: PORT }, () => {
  console.log(`PORT LISTEN :${PORT}`);
});
