import {Router} from 'express';
import { login, registerUser } from './UserController';

const router = Router();

router.post(`/user`, registerUser);
router.post(`/user/login`, login)

export default router;