import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    seeTodoes: async (_, args, __) => {
      return await prisma.todoes({ orderBy: "createdAt_DESC" });
    },
  },
};
