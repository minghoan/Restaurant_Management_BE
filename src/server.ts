import { config } from 'dotenv';
import express from 'express';
import sequelize from './lib/configs/connectDB';
import cors from 'cors';
import route from './routers';

config();

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.use(cors());
app.use(express.json());

route(app);

sequelize
	.sync()
	.then(() => {
		console.log('Database connected');
		app.listen(PORT, () => {
			console.log(`Server is running on http://localhost:${PORT}`);
			console.log(`API documentation is running on http://localhost:${PORT}/api-docs`);
		});
	})
	.catch((err) => {
		console.error('Unable to connect to the database:', err);
	});
