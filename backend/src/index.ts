import express from 'express';
import dotenv from 'dotenv';
dotenv.config();





const app = express();
app.use(express.json());



const PORT = process.env.PORT as string

console.log(PORT);

  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });