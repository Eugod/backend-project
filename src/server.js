import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
})

app.get("/", (req, res) => {
    res.send("Server is running");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})