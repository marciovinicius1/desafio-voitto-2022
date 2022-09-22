import express from 'express';
import CursosController from '../app/controllers/Cursos';
import Curso from '../app/models/Curso';
// import AuthService from '../app/services/AuthService';

const router = express.Router();
const cursosController = new CursosController(Curso);

router.get('/', (req, res) => cursosController.get(req, res));
router.get('/:id', (req, res) => cursosController.getById(req, res));

router.post('/', (req, res) => cursosController.create(req, res));

router.put('/:id', (req, res) => cursosController.update(req, res));

router.delete('/:id', (req, res) => cursosController.delete(req, res));

export default router;
