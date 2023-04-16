import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    let weekday = await prisma.weekday.findFirst();
    if(!weekday){
        await prisma.weekday.create({
            data: [
                {name: "Segunda"},
                {name: "Terça"},
                {name: "Quarta"},
                {name: "Quinta"},
                {name: "Sexta"},
                {name: "Sábado"},
            ] 
        });
    }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });