import express from 'express';

const accountRouter = express.Router();

accountRouter.get('/', (req, res) => {
	res.send('Hello from account router');
});

export default accountRouter;
