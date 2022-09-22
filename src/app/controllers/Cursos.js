class CursosController {
  constructor(Curso) {
    this.Curso = Curso;
  }

  async get(req, res) {
    try {
      const cursos = await this.Curso.findAll();
      res.json(cursos);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getById(req, res) {
    const {
      params: { id }
    } = req;

    try {
      const aluno = await this.Aluno.findOne({ where: { id } });
      res.send(aluno);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async create(req, res) {
    const { nome } = req.body;

    try {
      await await this.Aluno.create(nome);
      res.status(201).send(nome);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async update(req, res) {
    const {
      params: { id }
    } = req;

    try {
      await this.Aluno.update(req.body, { where: { id } });
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
}

export default CursosController;
