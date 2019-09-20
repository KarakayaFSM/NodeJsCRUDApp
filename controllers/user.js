

//Form data corresponds to the ViewModel in .NetCore 
exports.login_GET = (req, res, next) => {
  res.render('user/login',{ formdata: {}, errors: {}});
};

exports.login_POST = (req, res, next) => {
    
};

exports.signup_GET = (req, res, next) => {
    res.render('user/signup',{ formdata: {}, errors: {}});
};
  
exports.signup_POST = (req, res, next) => {
    
};


  