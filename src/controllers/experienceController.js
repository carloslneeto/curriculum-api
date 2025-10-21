import Experience from "../models/Experience.js";
import Person from "../models/Person.js";

export const createExperience = async (req, res) => {
  try {
    const { personId } = req.body;
    const person = await Person.findByPk(personId);
    if (!person) return res.status(404).json({ error: "Pessoa não encontrada" });

    const experience = await Experience.create(req.body);
    res.status(201).json(experience);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experience.findAll({ include: Person });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findByPk(req.params.id, { include: Person });
    if (!experience) return res.status(404).json({ error: "Experiência não encontrada" });
    res.json(experience);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findByPk(req.params.id);
    if (!experience) return res.status(404).json({ error: "Experiência não encontrada" });
    await experience.update(req.body);
    res.json(experience);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findByPk(req.params.id);
    if (!experience) return res.status(404).json({ error: "Experiência não encontrada" });
    await experience.destroy();
    res.json({ message: "Experiência removida com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
