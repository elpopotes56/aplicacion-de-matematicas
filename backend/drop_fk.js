import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';
config();

const prisma = new PrismaClient();

async function dropFk() {
  await prisma.$executeRawUnsafe(
    `ALTER TABLE "public"."math_mobile_profiles" DROP CONSTRAINT IF EXISTS "math_mobile_profiles_id_fkey";`
  );
  console.log('✅ Dropped FK constraint math_mobile_profiles_id_fkey successfully');
}

dropFk()
  .catch(e => {
    console.error('❌ Error dropping FK:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
