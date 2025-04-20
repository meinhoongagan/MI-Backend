const jwt = require('jsonwebtoken');

const isAdmin = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Expect: Bearer <token>

  if (!token) {
    return res.status(401).json({ message: 'Access token missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your actual secret
    if (decoded.role === 'admin') {
      req.user = decoded; // Optional: attach user info to request
      return next();
    } else {
      return res.status(403).json({ message: 'Admins only' });
    }
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

  
const isUser = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Allow both 'user' and 'admin' roles
    if (decoded.role === 'user' || decoded.role === 'admin') {
      req.userId = decoded.id;     // Set user ID from token
      req.userRole = decoded.role; // Optional: useful for later role checks
      return next();
    } else {
      return res.status(403).json({ message: 'Unauthorized role' });
    }
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
  
  module.exports = { isAdmin, isUser };
  