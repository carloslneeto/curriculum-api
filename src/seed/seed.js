import sequelize from "../config/database.js";
import Person from "../models/Person.js";
import Education from "../models/Education.js";
import Experience from "../models/Experience.js";
import Skill from "../models/Skill.js";

const seedDatabase = async () => {
  try {
    console.log("🚀 Iniciando seed do banco de dados...");

    // Reinicia as tabelas
    await sequelize.sync({ force: true });

    // Pessoas
    const carlos = await Person.create({
      fullName: "Carlos Neto",
      headline: "Desenvolvedor Full Stack",
      summary: "Sou um desenvolvedor apaixonado por criar soluções práticas e inovadoras.",
      location: "Recife, PE",
      website: "https://carlosneto.dev",
      email: "carlos@example.com",
      phone: "(81) 99999-9999",
    });

    const ana = await Person.create({
      fullName: "Ana Silva",
      headline: "UX/UI Designer",
      summary: "Focada em experiências intuitivas e interfaces modernas.",
      location: "São Paulo, SP",
      website: "https://anasilva.design",
      email: "ana@example.com",
      phone: "(11) 98888-8888",
    });

    // Formação acadêmica
    await Education.bulkCreate([
      {
        institution: "Universidade Federal de Pernambuco",
        degree: "Bacharelado em Ciência da Computação",
        fieldOfStudy: "Desenvolvimento Web",
        startDate: "2020-01-01",
        endDate: "2024-12-01",
        description: "Ênfase em engenharia de software e arquitetura de sistemas.",
        personId: carlos.id,
      },
      {
        institution: "Universidade de São Paulo",
        degree: "Design Digital",
        fieldOfStudy: "UX/UI",
        startDate: "2019-01-01",
        endDate: "2023-12-01",
        description: "Pesquisa em experiência do usuário e design responsivo.",
        personId: ana.id,
      },
    ]);

    // Experiências
    await Experience.bulkCreate([
      {
        company: "Tech Innovators",
        position: "Desenvolvedor Full Stack",
        startDate: "2022-03-01",
        description: "Desenvolvimento de aplicações web e APIs RESTful.",
        personId: carlos.id,
      },
      {
        company: "Design Studio SP",
        position: "UX Designer",
        startDate: "2021-06-01",
        description: "Criação de interfaces e fluxos de navegação centrados no usuário.",
        personId: ana.id,
      },
    ]);

    // Habilidades
    await Skill.bulkCreate([
      { name: "JavaScript", level: "Avançado", personId: carlos.id },
      { name: "Node.js", level: "Intermediário", personId: carlos.id },
      { name: "React", level: "Avançado", personId: carlos.id },
      { name: "Figma", level: "Avançado", personId: ana.id },
      { name: "Design Thinking", level: "Intermediário", personId: ana.id },
    ]);

    console.log("✅ Banco populado com sucesso!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Erro ao popular o banco:", error);
    process.exit(1);
  }
};

seedDatabase();
