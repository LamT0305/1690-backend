import express from "express";
import cors from "cors";

import configs from "./configs";

const app = express();


app.get('/', (req, res) => {
    res.send('Hello, Express with TypeScript!');
});

app.get("/", (req, res) => {
    res.send("Hello, Express with TypeScript!");
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

/* ------------------------ cors ------------------------ */
app.use(cors());

/* ------------------ routes configure ------------------ */
configs.router(app);

export default app;
