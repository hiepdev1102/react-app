const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

//deprecated since ver 4.16, now intergrated in express:
//const bodyParser = require('body-parser');

const app = express();

//deprecated:
//mongoose.Promise = global.Promise;
// Connect database:
connectDB();

mongoose
  .connect(
    process.env.MONGODB_URI || `mongodb://localhost:27017/node-react-starter`
  )
  .then();

app.use(express.json());

app.use('/api/users', require('./routes/api/users'));
/*
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profiles', require('./routes/api/profile'));
app.use('/api/users', require('./routes/api/posts'));
*/
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
