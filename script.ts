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

  // FIND ALL POSTS BY AN AUTHOR

  // const user = await prisma.post.findMany({
  //   where: {
  //     author: {
  //       name: "Kendrick Lamar"
  //     },
  //   },
  // });

  // UPDATE

  // const user = await prisma.post.update({
  //   where: {
  //     heading: "heading one",
  //   },
  //   data: {
  //     updatedAt: new Date().toISOString(),
  //     likes: {
  //       decrement: 100,
  //     },
  //   },
  // });

  // FIND UNIWQUE

  // const user = await prisma.user.findUnique({
  //   where: {
  //    email_age :{
  //     email: 'ye@gmail.com',
  //     age: 49
  //    }
  //   }
  // })

  // FINDING POST OF CERTAIN CATEGORY

  // const user = await prisma.post.findMany({
  //   where: {
  //     category: {
  //       genere: "NEWS"
  //     },
  //   },
  //   select: {
  //     name: true,
  //     heading: true,
  //     author: { select: { name: true } },
  //     updatedAt: true,
  //     likes: true,
  //     slug: true,
  //   },
  // });

  // FILTERING LIKES

  const user = await prisma.post.findMany({
    where: {
      likes: { gt: 4 },
    },
    orderBy: {
      likes: "desc",
    },
  });

  console.log(user);
}

main().catch((error) => console.error(error));
