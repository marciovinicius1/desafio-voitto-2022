import express from 'express';
import AlunosController from '../app/controllers/Alunos';
import Aluno from '../app/models/Aluno';
import AuthService from '../app/services/AuthService';

const router = express.Router();
const alunosController = new AlunosController(Aluno, AuthService);

router.get('/', (req, res) => alunosController.get(req, res));
router.get('/:id', (req, res) => alunosController.getById(req, res));

router.post('/', (req, res) => alunosController.create(req, res));

router.put('/:id', (req, res) => alunosController.update(req, res));

router.delete('/:id', (req, res) => alunosController.delete(req, res));

router.post('/auth', (req, res) => alunosController.authenticate(req, res));

export default router;
