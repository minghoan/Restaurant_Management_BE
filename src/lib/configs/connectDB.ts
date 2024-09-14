import { Sequelize } from 'sequelize-typescript';
import { config } from 'dotenv';
config();

const sequelize = new Sequelize(
	process.env.DB_NAME || 'restaurant_management',
	process.env.DB_USER || 'root',
	process.env.DB_PASSWORD || '123456',
	{
		host: process.env.DB_HOST,
		port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
		dialect: 'mysql',
		logging: (msg) => console.log(msg)
	}
);

export default sequelize;
