// dummyMiddleware.js

const isAdmin = (req, res, next) => {
    // if (req.headers['x-role'] === 'admin') return next();
    // return res.status(403).json({ message: 'Admins only' });
    next(); 
  };
  
  const isUser = (req, res, next) => {
    // const role = req.headers['x-role'];
    // if (role === 'user' || role === 'admin') {
    //   req.userId = req.headers['x-user-id']; // set user ID from headers (simulate auth)
    //   return next();
    // }
    // return res.status(403).json({ message: 'Unauthorized' });
    next();
  };
  
  module.exports = { isAdmin, isUser };
  