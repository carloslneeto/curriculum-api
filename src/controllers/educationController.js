import Education from "../models/Education.js";
import Person from "../models/Person.js";

export const createEducation = async (req, res) => {
  try {
    const { personId } = req.body;
    const person = await Person.findByPk(personId);
    if (!person) return res.status(404).json({ error: "Pessoa não encontrada" });

    const education = await Education.create(req.body);
    res.status(201).json(education);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllEducation = async (req, res) => {
  try {
    const educations = await Education.findAll({ include: Person });
    res.json(educations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEducationById = async (req, res) => {
  try {
    const education = await Education.findByPk(req.params.id, { include: Person });
    if (!education) return res.status(404).json({ error: "Educação não encontrada" });
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateEducation = async (req, res) => {
  try {
    const education = await Education.findByPk(req.params.id);
    if (!education) return res.status(404).json({ error: "Educação não encontrada" });
    await education.update(req.body);
    res.json(education);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findByPk(req.params.id);
    if (!education) return res.status(404).json({ error: "Educação não encontrada" });
    await education.destroy();
    res.json({ message: "Educação removida com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
