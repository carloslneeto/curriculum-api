import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Person from "./Person.js";

const Education = sequelize.define(
  "Education",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    institution: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    degree: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    fieldOfStudy: {
      type: DataTypes.STRING(150),
      allowNull: true,
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
    tableName: "educations",
    timestamps: true,
  }
);

Person.hasMany(Education, { foreignKey: "personId", onDelete: "CASCADE" });
Education.belongsTo(Person, { foreignKey: "personId" });

export default Education;
