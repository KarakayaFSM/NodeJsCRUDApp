module.exports = (passport) => {
    passport.serializeUser((user,done) =>{
        done(null,user.id);
    });
    passport.deserializeUser((id,done) => {
        models.User.findOne({
            where:{
                'id' : id
            }
        }).then(user =>{
            user == null ? 
            done(new Error('Wrong User Id')) :
            done(null, user);
        });
    });
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback:true
    },
    function(email,password,done){
        models.User.findOne({
            where:{
                'email' : email
            }
        }).then(user =>{
            user == null ? 
            done(new Error('Wrong User Id')) :
            done(null, user);
        });
    }
    ))
}