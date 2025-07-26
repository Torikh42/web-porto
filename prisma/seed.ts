import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  // Delete all existing data to avoid duplicates
  await prisma.project.deleteMany({});
  console.log("Deleted records in project table");

  const projects = [
    {
      title: "Papua Mandiri",
      description:
        "Papua Mandiri is an innovative digital platform aimed at empowering local communities in Papua through two main pillars: education and economics. It provides a platform for sharing learning materials on local natural resource management, while also facilitating a workflow through which community-led products can be offered, reviewed, and ordered by government agencies.",
      url: "https://github.com/Torikh42/papua-mandiri",
      techstack:
        "Nextjs, Supabase, Typescript, Tailwind CSS, shadcn/ui, Vercel, cloudinary, DeepSeek API",
      imageUrl:
        "https://res.cloudinary.com/dsw1iot8d/image/upload/v1753522721/papua-mandiri_i9whoi.png",
    },
    {
      title: "SEA Catering",
      description:
        "This project was created as part of the registration requirements for Compfest Academy. I used Next.js and Supabase to build it. The website design was made with Tailwind CSS, and I used Vercel to publish it online.",
      url: "https://github.com/Torikh42/sea-catering",
      techstack:
        "Nextjs, Supabase, Typescript, Tailwind CSS, Vercel, cloudinary, shadcn/ui",
      imageUrl:
        "https://res.cloudinary.com/dsw1iot8d/image/upload/v1753522728/sea-catering_siufqb.png",
    },
    {
      title: "Fix My City (Backend)",
      description:
        "Fix My City is a website that serves as a public complaints platform. It allows citizens to report problems in their city, such as damaged infrastructure, inadequate public services, or environmental issues. Each report will be reviewed and followed up by local authorities.",
      url: "https://github.com/Torikh42/Capstone-FixMyCity-Backend",
      techstack: "Node.js, Express, Prisma, PostgreSQL, cloudinary, Swagger",
      imageUrl:
        "https://res.cloudinary.com/dsw1iot8d/image/upload/v1753522701/fixmycity_vu84qz.png",
    },
  ];

  for (const p of projects) {
    const project = await prisma.project.create({
      data: p,
    });
    console.log(`Created project with id: ${project.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
