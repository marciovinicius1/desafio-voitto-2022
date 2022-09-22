import { Model, DataTypes } from 'sequelize';

class Curso extends Model {
  static init(sequelize) {
    super.init(
      {
        id: DataTypes.STRING,
        nome: DataTypes.STRING
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'cursos'
      }
    );

    return this;
  }
}

export default Curso;
