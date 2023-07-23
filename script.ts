import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.findMany();
  // await prisma.user.deleteMany();

  // CREATE MANY

  // const user = await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "Kanye West",
  //       email: "ye@gmail.com",
  //     },
  //     {
  //       name: "Drake",
  //       email: "drake@gmail.com",
  //     },
  //     {
  //       name: "Kendrick Lamar",
  //       email: "kdot@gmail.com",
  //     },
  //     {
  //       name: "Jay-Z",
  //       email: "j@gmail.com",
  //     },
  //   ],
  // });

  // FIND FIRST LESS THAN

  // const user = await prisma.user.findFirst({
  //   where: {
  //     name: "Kanye West",
  //     age : {lt: 60}
  //   },
  // });

  // CONTAINS

  // const user = await prisma.user.findMany({
  //   where: {
  //     email: { contains: "gmail" },
  //   },
  // });

  const user = await prisma.user.findMany({
    where: {
      posts: { every: { author: {
        is: {
          name: "Kendrick Lamar"
        }
      } } },
    },
  });

  // FIND UNIWQUE

  // const user = await prisma.user.findUnique({
  //   where: {
  //    email_age :{
  //     email: 'ye@gmail.com',
  //     age: 49
  //    }
  //   }
  // })

  console.log(user);
}

main().catch((error) => console.error(error));
