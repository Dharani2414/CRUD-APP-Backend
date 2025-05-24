const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express()
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send("Hello from node API Server Updated");
});

mongoose.connect("mongodb+srv://dharanimonu24:zIisMQTo6PTyOvat@cluster0.p9hecgm.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to the Database");
        app.listen(5500, () => {
            console.log("server is running on port 5500");
        });
    })
    .catch(() => {
        console.log("Connection Failed!");
    });

