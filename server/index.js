require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');


const app = express();

app.use(bodyParser.json());
app.use(cors());


massive(process.env.CONNECTION_STRING)
.then (dbInstance => {
    app.set('db', dbInstance);
});


// Authorization Endpoints //
app.post('/api/auth/login', )
app.post('/api/auth/register', )
app.post('/api/auth/logout', )

// Properties Endpoints //
app.post('/api/properties')
app.get('/api/properties')
app.delete('/api/properties/:id')



const port = process.env.PORT || 3001; 
app.listen(port, () => {console.log(`Server listening on port ${port}`)});