require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'razzbai-backend' });
});

// TODO: mount routes (auth, users, posts, messages, events, safety)

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
