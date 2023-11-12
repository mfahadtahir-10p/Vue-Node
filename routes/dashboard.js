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

router.get('/about', (req, res) => {
  res.send('About page');
});

export default router;
