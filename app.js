const express = require('express');
const cors = require('cors');
const path = require('path');
const { Route } = require('./db/models')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

app.route('/routes')
  .get(async (req, res) => {
    try {
      const routes = await Route.findAll();
      res.status(200).json(routes)
    } catch (error) {
      res.status(500).json({ message: 'server error' })
    }
  })

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  });    

app.listen(PORT, () => console.log('server started on port', PORT))
