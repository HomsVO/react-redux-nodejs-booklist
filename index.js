const express = require('express');
const mongoose = require('mongoose');
const cfg = require('prj-cfg').getAll();
const app = express();
const PORT = process.env.PORT || cfg.PORT || 8000;
const bookRoutes = require('./routes/book.routes');

app.use(express.json());
app.use(express.static('client/build'));

app.use('/api', bookRoutes);

const start = async () => {
    try {
        await mongoose.connect(cfg.DBUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => {
            console.log('Server has been started on PORT:' + PORT)
        })
    } catch (e) {
        console.log(e);
    }
}

start();



