  const models = require('../models')

  exports.index = (req, res, next) => {
    res.render('index', {title: 'Express'});
  }

  exports.PostIndex = (req, res, next) => {
    models.Lead.create({
      Email: req.body.lead_email
    }).then((lead) => {
      res.redirect('/leads');
    });
  }

  exports.show_leads = (req, res, next) => {
    return models.Lead.findAll().then(leads =>{
      res.render('index', {title: 'Express', leads: leads});
    })
  }

  exports.show_lead = (req, res, next) => {
    return models.Lead.findOne({
      where:{
        id: req.params.lead_id
      }
    }).then(lead => {
      res.render('lead',{lead:lead});
    });
  }