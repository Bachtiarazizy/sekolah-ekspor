import { PrismaClient } from "@prisma/client";
import { fileURLToPath } from "url";

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [{ name: "Ekspor & impor" }, { name: "Digital Marketing" }, { name: "Investment" }],
    });
    console.log("Categories created");
  } catch (error) {
    console.log("Error seeding the database categories ", error);
  } finally {
    await db.$disconnect();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
