import { Request, Response } from 'express';
import pino from 'pino';

const log = pino({
	transport: {
		target: 'pino-pretty',
		options: {
			levelFirst: true,
			translateTime: 'SYS:standard',
			colorize: true
		}
	},
	base: {
		pid: false
	}
});

const logRequest = (req: Request, res: Response, next: () => void) => {
	// log.info(`----------------------------------------------`);
	log.info(`${req.method} ${req.originalUrl}`);
	// log.info(`BODY: ${JSON.stringify(req.body).slice(0, 100)}`);
	next();
};

export { log, logRequest };
