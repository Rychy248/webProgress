
// authMiddleware.js
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next(); // Allows the request to continue to the next middleware or handler
    }
    res.redirect("/login"); // If is'nt authenticated, redirecto to /login
};

module.exports = { ensureAuthenticated };