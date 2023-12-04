const mongoose = require('mongoose');

// Variables for database connection
const DB_USER = 'flavioeduardomezei';
const DB_PASSWORD = encodeURIComponent('@12141602Hmm');

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.igbbpvc.mongodb.net/devskindb?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Database connected!');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  });