import 'dotenv/config';
import "reflect-metadata"
import { DataSource } from "typeorm"

// Garantindo que o DB_PORT seja convertido para um número
const port = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined;

export const AppDataSource = new DataSource({
	type: 'mysql',
	host: process.env.DB_HOST,
	port: port,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	entities: [`${__dirname}/**/entities/*.{ts,js}`],
	migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
});