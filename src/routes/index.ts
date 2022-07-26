import express, { Request, Response } from "express";
import user from './user.routes'
import auth from './auth.routes'

const router = express.Router();

router.get('/healthcheck', (_: Request, res: Response) => {
  res.sendStatus(200)
})

export default router;