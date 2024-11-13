import express from "express"
const app = express();
const PORT = 8080;
app.get('/', (req, res) => {
    res.send(`Server Started`);
});

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});