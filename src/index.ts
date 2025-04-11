import express, { Request, Response } from 'express';

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Configure middleware
app.use(express.json());

// Define routes
app.get('/hello', (req: Request, res: Response) => {
  const currentDateTime = new Date().toISOString();
  res.json({ 
    message: `Hello, World! at ${currentDateTime} UTC`
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Try the /hello endpoint: http://localhost:${port}/hello`);
});