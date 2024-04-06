import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;

async function main(){
    await prisma.user.create({
        data:{
            name:"Ashutosh",
            email:"ashu@gmail.com"
        }
    })
}
main();