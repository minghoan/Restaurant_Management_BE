import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import SwaggerOption from '../lib/configs/swagger';
import accountRouter from './account.router';

const swaggerDocument = swaggerJSDoc(SwaggerOption);

const route = (app: Express) => {
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

	app.use('/api/account', accountRouter);
};

export default route;
