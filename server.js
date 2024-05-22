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

app.get('/dolares', async (req, res) => {
  try {
      const response = await fetch('https://dolarapi.com/v1/dolares', {
          method: 'GET',
      });
      const data = await response.json();
      res.json(data);
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Error fetching data' });
  }
});

app.get('/dolares/blue/compra', async (req, res) => {
  try {
      const response = await fetch('https://dolarapi.com/v1/dolares', {
          method: 'GET',
      });
      const data = await response.json();
      const dolarBlue = data.find(entry => entry.casa === 'blue');
      if(dolarBlue) {
        res.json({ compra: dolarBlue.compra});
      } else {
        res.status(404).json({ error: 'Dolar blue no encontrado'});
      }
      res.json(dolarBlue);
  } catch (error) {
      console.error('Error:', error);
      if (!res.headersSent) {
       
        res.status(500).json({ error: 'Error fetching data' });
      }
  }
});

app.get('/dolares/blue/venta', async (req, res) => {
  try {
      const response = await fetch('https://dolarapi.com/v1/dolares', {
          method: 'GET',
      });
      const data = await response.json();
      const dolarBlue = data.find(entry => entry.casa === 'blue');
      if(dolarBlue) {
        res.json({ venta: dolarBlue.venta});
      } else {
        res.status(404).json({ error: 'Dolar blue no encontrado'});
      }
      res.json(dolarBlue);
  } catch (error) {
    console.error('Error:', error);
    if (!res.headersSent) {
        res.status(500).json({ error: 'Error fetching data' });
    }
}
});

main();