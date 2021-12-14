const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get ('/', (req, res) => {
res.send("Olá, Rafa!")
});

app.listen(port, () => {
    console.log(`The project is running at ${port}`)
});

app.use("/todolist", todo);

