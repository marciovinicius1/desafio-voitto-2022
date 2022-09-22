import express from 'express';
import alunosRoute from './alunos';
import cursosRoute from './cursos';

const router = express.Router();

router.use('/alunos', alunosRoute);
router.use('/cursos', cursosRoute);
router.get('/', (req, res) => res.send('Hello world! ❤️'));

export default router;
