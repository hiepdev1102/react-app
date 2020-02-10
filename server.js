const express = require('express');
const mongoose = require('mongoose');

//deprecated since ver 4.16, now intergrated in express:
const bodyParser = require('body-parser');

const app = express();

//deprecated:
mongoose.Promise = global.Promise;


mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/node-react-starter`);

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})