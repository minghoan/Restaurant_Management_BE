import { Express } from 'express';
import userRouter from './user.router';

const route = (app: Express) => {
	app.use('/api/user', userRouter);
};

export default route;
