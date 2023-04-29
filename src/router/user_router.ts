
import { Router } from 'express';
import { userController } from 'src/controllers/user_controller';
const userRouter: Router = Router();

userRouter.get('/', userController.getUser);
userRouter.post('/', userController.addUser);
export { userRouter };