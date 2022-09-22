import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';

class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        cep: DataTypes.STRING,
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING,
        senha: DataTypes.STRING
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'alunos'
      }
    );

    this.beforeCreate(async user => {
      const hashedPassword = await bcrypt.hash(user.senha, 10);
      user.senha = hashedPassword;
    });
    this.beforeUpdate(async user => {
      if (!user.senha) {
        return;
      }
      const hashedPassword = await bcrypt.hash(user.senha, 10);
      user.senha = hashedPassword;
    });

    this.addScope('withoutPassword', { attributes: { exclude: ['senha'] } });

    // const SENSITIVE_CONTENT = [''];
    // this.addScope('withoutSensitiveContent', {
    //   attributes: { exclude: SENSITIVE_CONTENT }
    // });

    return this;
  }
}

export default Aluno;
