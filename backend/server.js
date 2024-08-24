const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Import routes from the `routes` folder
const authRoutes = require('./routes/auth'); 

// Import routes from the `src` folder (relative path to `backend`)
const contactRoutes = require('../src/contactRoutes');
const accountRoutes = require('../src/accountRoutes');

dotenv.config();

// Express app setup
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Use routes
app.use('/api/contact', contactRoutes);
app.use('/api/account', accountRoutes);
app.use('/api/auth', authRoutes);

// Define a default route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Port setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});