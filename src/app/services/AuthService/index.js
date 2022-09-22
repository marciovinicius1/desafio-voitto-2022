import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Verifica se o usuário existe, compara as senhas e gera token JWT para autenticação.

class Auth {
  constructor(Aluno) {
    this.Aluno = Aluno;
  }

  async authenticate(data) {
    const aluno = await this.Aluno.findOne({ where: { email: data.email } });
    if (!aluno) {
      return new Error('User not found');
    }
    if (!(await bcrypt.compare(data.senha, aluno.senha))) {
      return new Error('password mismatch');
    }
    return aluno;
  }

  static generateToken(payload) {
    return jwt.sign(payload, process.env.AUTH_KEY, {
      expiresIn: '7d'
    });
  }
}

export default Auth;
