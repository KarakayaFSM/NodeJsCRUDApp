var express = require('express');
let index = require('../controllers/index')
let user = require('../controllers/user')

var router = express.Router();

/* Login page */
router.get('/login', user.login_GET);
router.post('/login', user.login_POST);

/* Signup page */
router.get('/signup', user.signup_GET);
router.post('/signup', user.signup_POST);

/* Home page */
router.get('/',index.index);
router.post('/',index.index_POST);

/* List of Leads */
router.get('/leads',index.show_leads);

/* Get an individual Lead */
router.get('/lead/:lead_id',index.show_lead);

/* Edit an individual Lead */
router.get('/lead/:lead_id/edit',index.edit_lead_GET);
router.post('/lead/:lead_id/edit',index.edit_lead_POST);

/* Delete an individual Lead */
router.post('/lead/:lead_id/delete',index.delete_lead_POST)

/* Delete an individual Lead Using AJAX */
router.post('/lead/:lead_id/delete_json',index.delete_json_POST)

module.exports = router;