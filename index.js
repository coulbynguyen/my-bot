const express = require('express')
const bodyParser = require('body-parser')
const db = require('./vocab.json');


const app = express();

function getRandomMessage(){
	const data = 'hello darkness my old friend';
	return data;
}

app.use(bodyParser.json());

app.post('/hitler', getRandomMessage);

//Start Server

const PORT = 52222;

app.set('port', process.env.PORT || 52222);
app.listen(PORT, ()=> console.log(`App is listening on port ${PORT}`));
