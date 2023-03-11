import { connection } from './db/connection';
import express, { urlencoded, json } from "express";
import { config } from "dotenv";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import searchRouter from './routes/search'

const app = express();
const port = process.env.PORT || 4000;
config();
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/search',searchRouter)
app.get("*", (req, res) => {
  res.status(401).send({ error: "Api not found!" });
});

app.listen(port, () => connection(port));
