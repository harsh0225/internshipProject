const express = require('express');
const {dbconnect} = require('./config/dbconnect');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());

const Route = require('./routers/Route.js');
app.use('/api/v1',Route)



dbconnect();

app.listen(8000,() => {
    console.log("server started at port No 8000")
})