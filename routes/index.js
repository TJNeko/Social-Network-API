const express = require('express');
const router = require('express').Router();
const thoughtRoutes = require('../routes/api/thoughtRoutes');
const userRoutes = require('../routes/api/userRoutes');

const app = express();

app.use('/api/thoughts', thoughtRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = router;