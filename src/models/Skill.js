import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Person from "./Person.js";

const Skill = sequelize.define(
  "Skill",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    level: {
      type: DataTypes.STRING(50), // Ex: "Básico", "Intermediário", "Avançado"
      allowNull: true,
    },
  },
  {
    tableName: "skills",
    timestamps: true,
  }
);

Person.hasMany(Skill, { foreignKey: "personId", onDelete: "CASCADE" });
Skill.belongsTo(Person, { foreignKey: "personId" });

export default Skill;
