  const models = require('../models')

  exports.index = (req, res, next) => {
    res.render('index', {
      title: 'Express'
    });
  }

  exports.index_POST = (req, res, next) => {
    models.Lead.create({
      email: req.body.lead_email
    }).then((lead) => {
      res.redirect('/leads');
    });
  }

  exports.show_leads = (req, res, next) => {
    return models.Lead.findAll().then(leads => {
      res.render('lead/leads', {
        title: 'Express',
        leads: leads
      });
    });
  }

  exports.show_lead = (req, res, next) => {
    return models.Lead.findOne({
      where: {
        id: req.params.lead_id
      }
    }).then(lead => {
      res.render('lead/lead', {
        lead: lead
      });
    });
  }

  exports.show_lead = function (req, res, next) {
    return models.Lead.findOne({
      where: {
        id: req.params.lead_id
      }
    }).then(lead => {
      res.render('lead/lead', {
        lead: lead
      });
    });
  }

  exports.edit_lead_GET = (req, res, next) => {
    return models.Lead.findOne({
      where: {
        id: req.params.lead_id
      }
    }).then(lead => {
      res.render('lead/edit_lead', {
        lead: lead
      });
    });
  }

  exports.edit_lead_POST = (req, res, next) => {
    return models.Lead.update({
        email: req.body.lead_email
      }, {
        where: {
          id: req.params.lead_id
        }
      })
      .then(result => {
        res.redirect('/lead/' + req.params.lead_id);
      });
  }

  exports.delete_lead_POST = (req, res, next) => {
    return models.Lead.destroy({
        where: {
          id: req.params.lead_id
        }
      })
      .then(result => {
        res.redirect('/leads');
      }); 
  }

  exports.delete_json_POST = (req, res, next) => {
    return models.Lead.destroy({
        where: {
          id: req.params.lead_id
        }
      })
      .then(result => {
        res.send({msg:'Success'});
      }); 
  }