import apiRouter from "./apiRouter";
import express from 'express';

const defaultRouter = express.Router();

defaultRouter.get('/',(req,res,next)=>{
  res.status(200).json({message: 'aman bro'})
})

export { apiRouter };
export default defaultRouter