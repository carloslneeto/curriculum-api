import Person from "../models/Person.js";

export const createPerson = async (req, res) => {
  try {
    const person = await Person.create(req.body);
    res.status(201).json(person);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllPersons = async (req, res) => {
  try {
    const people = await Person.findAll();
    res.json(people);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPersonById = async (req, res) => {
  try {
    const person = await Person.findByPk(req.params.id);
    if (!person) return res.status(404).json({ error: "Pessoa não encontrada" });
    res.json(person);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePerson = async (req, res) => {
  try {
    const person = await Person.findByPk(req.params.id);
    if (!person) return res.status(404).json({ error: "Pessoa não encontrada" });
    await person.update(req.body);
    res.json(person);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deletePerson = async (req, res) => {
  try {
    const person = await Person.findByPk(req.params.id);
    if (!person) return res.status(404).json({ error: "Pessoa não encontrada" });
    await person.destroy();
    res.json({ message: "Pessoa removida com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
