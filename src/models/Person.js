import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Person = sequelize.define(
  "Person",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    headline: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING(120),
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: { isEmail: true },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "persons",
    timestamps: true,
  }
);

export default Person;
