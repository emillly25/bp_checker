import { Request, Response, NextFunction } from 'express';
import { userModel } from '../db';

class UserController {
    async addUser(req: Request, res: Response, next: NextFunction) {
        try {
            const test_case = { name: 'haelee' }
            const result = await userModel.postUser(test_case);
            console.log('결과', result)
            res.status(200).json(result);
        } catch (error) {
            console.error(error);
        }
    }
    async getUser(req: Request, res: Response, next: NextFunction) {
        try {

            res.status(200).json({ name: 'success' });
        } catch (error) {
            console.error(error);
        }
    }
}

const userController = new UserController();
export { userController };