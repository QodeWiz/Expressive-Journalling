import express, { Request, Response } from 'express';

const app = express();
const port = 5050;

// Define basic route
app.get('/', (req: Request, res: Response) => {
    res.send('Expressive Journalling Backend is Running!');
  });
  
// start the server
app.listen(port, () => {
    console.log(`serveris running on port ${port}`)
});
