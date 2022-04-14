const express = require('express');
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


//default response for any other request(Not Found)
app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})