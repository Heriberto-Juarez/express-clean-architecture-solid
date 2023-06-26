import {Router} from 'express';
import { container } from '../../infrastructure/tsyringe.config';
import { UserController } from './UserController';
import { validEmail, validPassword } from '../../infrastructure/middlewares/userValidations';
import { validateRequest } from '../../infrastructure/middlewares/validateRequest';

const userController = container.resolve(UserController)

const router = Router();

router.post(`/user`, [validEmail, validPassword, validateRequest], userController.registerUser);
router.post(`/user/login`, [validEmail, validPassword, validateRequest], userController.login);

export default router;