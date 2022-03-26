import express from "express";

const app = express();
const port = process.env.PORT || 3333;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Mern app listening on port ${port}!`);
});