import {Router} from 'express';
import { container } from '../../tsyringe.config';
import { UserController } from './UserController';

const userController = container.resolve(UserController)

const router = Router();

router.post(`/user`, userController.registerUser);
router.post(`/user/login`, userController.login);

export default router;