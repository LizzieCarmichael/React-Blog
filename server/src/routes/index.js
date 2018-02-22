import { Router } from 'express';
import classesRouter from './classes';
import authRouter from './auth';
import usersRouter from './users';
import blogsRouter from './blogs';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);

// router.use(tokenMiddleware);    //after public routes & before isLoggedIn & private routes
// router.use(isLoggedIn);

router.use ('/blogs', blogsRouter);
router.use('/classes', classesRouter);
router.use('/users', usersRouter);

export default router;