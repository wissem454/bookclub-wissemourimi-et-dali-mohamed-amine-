require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World! Your server is up and running!');
});

app.use((req, res) => {
    res.status(404).json({ message: 'Route non trouvée' });
});

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
