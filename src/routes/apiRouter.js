import express from 'express';

const apiRouter = express.Router();

apiRouter.get('/', (req, res) =>
  res.status(200).json({ message: 'Welcome to Express API template' })
);

apiRouter.get('/mele', (req,res)=>{
  res.status(200).json({message : 'mele mele tohua'})
});

export default apiRouter;