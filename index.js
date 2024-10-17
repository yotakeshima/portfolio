import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
