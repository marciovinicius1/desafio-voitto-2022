class AlunosController {
  constructor(Aluno, AuthService) {
    this.Aluno = Aluno;
    this.AuthService = AuthService;
  }

  async get(req, res) {
    try {
      const alunos = await this.Aluno.scope('withoutPassword').findAll();
      res.json(alunos);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getById(req, res) {
    const { id } = req.params;

    try {
      const aluno = await this.Aluno.findOne({ where: { id } });
      res.send(aluno);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async create(req, res) {
    const { nome, email, cep, cidade, estado, senha } = req.body;
    const data = {
      nome,
      email,
      cep,
      cidade,
      estado,
      senha
    };

    try {
      await this.Aluno.create(data);
      res.status(201).send(data);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  // 📌 REVISAR!
  async update(req, res) {
    const { id } = req.params;

    const { nome, email, cep, cidade, estado, senha } = req.body;

    try {
      await this.Aluno.update(
        { nome, email, cep, cidade, estado, senha },
        { where: { id } }
      );
      return res.status(204).send();
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async delete(req, res) {
    const {
      params: { id }
    } = req;

    try {
      await this.Aluno.destroy({ where: { id } });
      res.sendStatus(204);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async authenticate(req, res) {
    const authService = new this.AuthService(this.Aluno);
    const aluno = await authService.authenticate(req.body);
    if (!aluno) {
      return res.sendStatus(401);
    }
    const token = this.AuthService.generateToken({
      nome: aluno.nome,
      email: aluno.email,
      senha: aluno.senha
    });

    return res.send({ token });
  }
}

export default AlunosController;
