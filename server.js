const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
const dbConnection = require('./db')
const path = require('path')


app.use(express.json())
app.use(cors({
    origin: '*'
}))
app.use('/api/bikes/' , require('./routes/bikesRoute'));
app.use('/api/users/' , require('./routes/usersRoute'));
app.use('/api/bookings/' , require('./routes/bookingsRoute'));

var __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/build"))); 
app.get("*", (req, res) =>{
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})

dbConnection();
app.listen(port, () => console.log(`Node JS server started on port ${port}!`));

