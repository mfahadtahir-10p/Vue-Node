import express from 'express';

const router = express.Router();

// Middleware for all routes in this router
router.use((req, res, next) => {
  console.log('Middleware applied to all routes in this router');
  next(); // Pass control to the next middleware in the stack
});

// Define routes
router.get('/', (req, res) => {
  res.send('Home page');
});

router.post('/addShoe',(req, res) => {
  // add the data recieved in post to shoe file
  console.log(req.body);
  res.send("Shoe Added")
})

export default router;