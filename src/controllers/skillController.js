import Skill from "../models/Skill.js";
import Person from "../models/Person.js";

export const createSkill = async (req, res) => {
  try {
    const { personId } = req.body;
    const person = await Person.findByPk(personId);
    if (!person) return res.status(404).json({ error: "Pessoa não encontrada" });

    const skill = await Skill.create(req.body);
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.findAll({ include: Person });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSkillById = async (req, res) => {
  try {
    const skill = await Skill.findByPk(req.params.id, { include: Person });
    if (!skill) return res.status(404).json({ error: "Habilidade não encontrada" });
    res.json(skill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findByPk(req.params.id);
    if (!skill) return res.status(404).json({ error: "Habilidade não encontrada" });
    await skill.update(req.body);
    res.json(skill);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByPk(req.params.id);
    if (!skill) return res.status(404).json({ error: "Habilidade não encontrada" });
    await skill.destroy();
    res.json({ message: "Habilidade removida com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
