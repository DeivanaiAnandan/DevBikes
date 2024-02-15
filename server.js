const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
const dbConnection = require('./db')

app.use(express.json())
app.use(cors({
    origin: '*'
}))
app.use('/api/bikes/' , require('./routes/bikesRoute'));
app.use('/api/users/' , require('./routes/usersRoute'));
app.use('/api/bookings/' , require('./routes/bookingsRoute'));
const path = require('path')


    app.use('/' , express.static('client/build/public'))

    app.get('*' , (req , res)=>{

          res.sendFile(path.resolve(__dirname, 'client/build/public/index.html'));

    })




app.get('/', (req, res) => res.send('Hello World!'));
dbConnection();
app.listen(port, () => console.log(`Node JS server started on port ${port}!`));

