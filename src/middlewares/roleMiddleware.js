const isDirector = (req, res, next) => {
    if (req.user && req.user.role === 'director') {
      return next();
    }
    
    return res.status(403).json({ error: 'Acesso negado. Somente diretores podem realizar esta ação.' });
  };
  
  module.exports = { isDirector };