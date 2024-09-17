import { config } from 'dotenv';
import express from 'express';
import sequelize from './lib/configs/connectDB';
import cors from 'cors';
import route from './routers';
import { log, logRequest } from './lib/utils/logger';

config();

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(logRequest);

route(app);

sequelize
	.sync()
	.then(() => {
		log.info('Sequelize connected');
		app.listen(PORT, () => {
			log.info(`Server is running on http://localhost:${PORT}`);

			log.info(`Docs available at http://localhost:${PORT}/api-docs`);
		});
	})
	.catch((err) => {
		log.error('Unable to connect to the database:', err);
	});
