import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Person from "./Person.js";

const Experience = sequelize.define(
  "Experience",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    company: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "experiences",
    timestamps: true,
  }
);

Person.hasMany(Experience, { foreignKey: "personId", onDelete: "CASCADE" });
Experience.belongsTo(Person, { foreignKey: "personId" });

export default Experience;
