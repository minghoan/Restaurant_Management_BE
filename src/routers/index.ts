import { Express } from 'express';
import accountRouter from './account.router';
const route = (app: Express) => {
	app.use('/api/account', accountRouter);
};

export default route;
