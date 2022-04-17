const express = require('express');
const db = require('./db/connection');
const { appendFile } = require('fs');
const inputCheck = require('./utils/inputCheck');
const apiRoutes = require('./routes/apiRoutes');
router.use(require('./partyRoutes'));


const PORT = process.env.PORT || 3001;

const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
//   });

//default response for any other request(Not Found)
app.use((req, res) => {
    res.status(404).end();
});

db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})