import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    deleteTodo: async (_, args) => {
      const { id } = args;
      try {
        const data = await prisma.deleteTodo(id);
        console.log(data);
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
