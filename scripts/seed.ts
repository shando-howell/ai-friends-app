const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
    try {
        await db.category.createMany({
            data: [
                { name: "Influencers" },
                { name: "Musicians" },
                { name: "Instructors" },
                { name: "Entrepreneurs" },
                { name: "Authors" },
                { name: "Engineers" }
            ]
        })
    } catch (error) {
        console.error("Error seeding default categories", error);
    } finally {
        await db.$disconnect();
    }
}

main();