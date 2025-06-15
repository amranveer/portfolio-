const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const Query = require('./models/query'); // Assuming you have a query model defined

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors(
    {
        origin: process.env.CLIENT_URL ,
        methods: ['GET', 'POST'],
        credentials: true,
        
    }
));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });


app.post('/api/submit', (req, res) => {
    const { name, email, message } = req.body;

    console.log(`Received submission: ${name}, ${email}, ${message}`);
    // Validate input
    if (!name || !email || !message) {
        return res.status(400).json({ status: 'error', message: 'All fields are required.' });
    }
    // Create a new query instance
    const newQuery = new Query({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim()
    });
    // Save the query to the database
    newQuery.save()
        
    

    // Respond with a success message
    res.json({ status: 'success', message: 'Form submitted successfully!' });
});

app.get('/api/queries', async (req, res) => {
    try {
        const queries = await Query.find().sort({ createdAt: -1 });
        res.json(queries);
    } catch (error) {
        console.error('Error fetching queries:', error);
        res.status(500).json({ status: 'error', message: 'Failed to fetch queries.' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
