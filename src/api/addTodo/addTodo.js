import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    addTodo: async (_, args, __) => {
      const { content } = args;
      const todo = await prisma.createTodo({ content, done: false });
      return todo;
    },
  },
};
