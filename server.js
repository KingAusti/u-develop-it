const express = require('express');
const mysql = require('mysql2');
const { appendFile } = require('fs');

const PORT = process.env.PORT || 3001;

const app = express();

// app.get('/', (req, res) => {
//     res.json({
//         messages: 'Hello World'
//     });
// });

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //your mySQL un,
        user: 'root',
        //your mySQL pw,
        password: 'divine-pop-grid-dory',
        database: 'election'
    },
    console.log("Connected to the election database.")
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
  });

//default response for any other request(Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})