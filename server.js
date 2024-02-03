const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Define your API routes here
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/createDatabase", (req, res) => {
    let databaseName = "myserver_db";
    let createQuery = `CREATE DATABASE ${databaseName}`;

    // use the query to create a Database.
    db.query(createQuery, (err) => {
        if (err){
            console.log('err', err)
        }
        console.log("Database Created Successfully !");
        let useQuery = `USE ${databaseName}`;
        db.query(useQuery, (error) => {
            if (error){
                console.log('error', error)
            }
            console.log("Using Database");
            return res.send(
                `Created and Using ${databaseName} Database`);
        })
    });
});

app.get('/api/data', (req, res) => {
    const data = {
        message: 'Hello from the API!',
        status: 'SUCCESS',
    };
    res.json(data);
});