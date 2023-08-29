import express from 'express';
import cors from "cors";

const app = express();
import configs from './configs';


app.get('/', (req, res) => {
    res.send('Hello, Express with TypeScript!');
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

/* ------------------------ cors ------------------------ */
app.use(cors());

/* ------------------ routes configure ------------------ */
configs.router(app)


export default app;
