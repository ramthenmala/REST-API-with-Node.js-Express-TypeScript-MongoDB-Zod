import express, { Request, Response} from 'express';

const router = express.Router();

router.post('/api/user', (req: Request, res: Response) => {
    res.sendStatus(200)
})

export default router;