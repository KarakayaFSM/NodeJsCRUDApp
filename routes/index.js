var express = require('express');
let index = require('../controllers')

var router = express.Router();

/* Home page */
router.get('/',index.index);
router.post('/',index.PostIndex);

/* List of Leads */
router.get('/leads',index.show_leads);

/* Get an individual Lead */
router.get('/lead/:lead_id',index.show_lead);


module.exports = router;

