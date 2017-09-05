import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as opn from 'opn';

import users from './routes/users';

const app = express();
const port = 8080;

const connection_string = 'mongodb://fullstackhero:starwars73@ds123124.mlab.com:23124/inkedin';

if (connection_string) {
  mongoose.connect(connection_string).then(() => {
    console.log(`Successfully connected to ${connection_string}.`);
  }).catch((err) => {
    console.log(`Failed to connect to ${connection_string}.\n\n${err}`);
  });
}

app.use(express.static('./public/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/users', users);

app.get('*', (req, res) => {
  res.sendfile('public/index.html');
});

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}.`);
  opn(`http://localhost:${port}`);
});
