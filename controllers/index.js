  const models = require('../models')

  exports.index = (req, res, next) => {
    res.render('index', {
      title: 'Express'
    });
  }

  exports.PostIndex = (req, res, next) => {
    models.Lead.create({
      Email: req.body.lead_email
    }).then((lead) => {
      res.redirect('/');
    });
  }