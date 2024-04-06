import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;

// async function main(){
//     // const users = await prisma.user.findMany({
//     //     where:{
//     //         id:1
//     //     }
//     // })
//     const users = await prisma.user.findMany({}) //Give all users
//     console.log(users);
// }
async function main(){
    const user = await prisma.user.findUnique({
        where:{
            id:1
        },
        include:{
            posts:true
        }
    })
    console.log(user);
}
main();