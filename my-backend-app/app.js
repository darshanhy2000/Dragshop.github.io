const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = 'mongodb+srv://darshan:Bunny@7818/@user.4rlziuz.mongodb.net/?retryWrites=true&w=majority&appName=User'; // Replace this with your MongoDB Atlas connection string
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((err) => {
  console.error('Error connecting to MongoDB Atlas:', err);
});

// User model
const User = mongoose.model('User', {
  username: String,
  email: String,
  password: String
});

// Route handler for registration
app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;

  // Create a new user document using Mongoose model
  const newUser = new User({ username, email, password });

  // Save the new user to the database
  newUser.save()
    .then(() => {
      // Registration successful
      res.status(201).json({ success: true, message: 'User registered successfully' });
    })
    .catch((error) => {
      // Registration failed
      console.error('Error registering user:', error);
      res.status(500).json({ success: false, message: 'Failed to register user' });
    });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
