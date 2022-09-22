import { Model, DataTypes } from 'sequelize';

class CursoAluno extends Model {
  static init(sequelize) {
    super.init(
      {
        id: DataTypes.STRING,
        id_aluno: DataTypes.STRING,
        id_curso: DataTypes.STRING
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'aluno'
      }
    );

    return this;
  }
}

export default CursoAluno;
