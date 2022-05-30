const express = require("express");
const { route } = require("express/lib/application");
require("../src/db/conn")
const app = express();
const port = 3000;
const router = require("../src/routers/men")


app.get("/", async(req,res) => {
    res.send("Hello from Pragati")
})
app.use(express.json())
app.use(router)
app.listen(port, () => {
    console.log(`Server is up and running at port ${port}`)
})