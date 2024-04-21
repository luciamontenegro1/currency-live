const bodyParser = require ('body-parser');
const express = require ('express');

//const MongoClient = require ('mongodb').MongoClient;
//const ObjectID = require ('mongodb').ObjectID;

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static('public'));

let db = null;
async function main(){
    //const DATABASE_NAME = 'currency-live';
    //const MONGO_URL = 'mongodb://localhost:27017/${DATABASE_NAME}';


    //db = await MongoClient.connect(MONGO_URL);

    const port = 3000;
    await app.listen(port);
    console.log('server listening on port ${port}');
}
main();