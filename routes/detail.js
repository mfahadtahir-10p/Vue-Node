import express from 'express';
import { readDB } from '../services/dbService.js';
const router = express.Router();

// Middleware for all routes in this router
router.use((req, res, next) => {
  console.log('Middleware applied to all routes in this router');
  next(); // Pass control to the next middleware in the stack
});

// Define routes
router.get('/getAllShoes', async (req, res) => {
  try{
    let data = await readDB('shoes')
    console.log(data.length, " records found")
    res.send(data);
  }
  catch(e){
    res.status(400).send({
      message: 'This is an error!'
   });
  }
});



export default router;