const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/social-network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const db = mongoose.connection;

db.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});