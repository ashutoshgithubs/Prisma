import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;

async function main(){
    await prisma.post.create({
        data:{
          title:"IPL",
          content:"Chennai super kings",
          published:true,
          author:{
            connect:{
                id : 1
            }
          }
        }
    })
}
main();