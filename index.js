import express from 'express';
import { addToShoes } from './services/dataPopulationService.js';
import dashboardRoutes from './routes/dashboard.js';
import detailRoutes from './routes/detail.js';
import formRoutes from './routes/form.js';


const app = express();


// addToShoes()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


// Use the router in the main application
app.use('/dashboard', dashboardRoutes);

app.use('/detail', detailRoutes);

app.use('/form', formRoutes);



app.listen(3000, () => {
  console.log('Server listening on port 3000');
});