const express = require('express');
const app = express();
const cors = require('cors')
const db = require('./db/db.js')

const courseRoutes = require('./routes/course.js')
const testimonialRoutes = require('./routes/testimonials.js')
const testResultRoutes = require('./routes/test-results.js')
const academicResultRoutes = require('./routes/academic-results.js')
const notificationRoutes = require('./routes/notifications.js')

app.use(express.json());
app.use(cors())

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/courses', courseRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/test-results', testResultRoutes);
app.use('/api/academic-results', academicResultRoutes);
app.use('/api/notifications', notificationRoutes);

app.listen(3000, () => {
  db(); // Connect to the database
  console.log('Server is running on port 3000');
});