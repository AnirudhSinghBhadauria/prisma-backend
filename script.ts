import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.findMany();
//   const user = await prisma.user.create({
//     data: {
//       id: 99,
//       email: "this is my email",
//       name: "no name",
//     },
//   });

  console.log(user);
}

main().catch((error) => console.error(error));
