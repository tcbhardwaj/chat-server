const passport = require('passport');

module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get('/auth/google/callback', 
        passport.authenticate('google'), 
        (req, res) => {
            res.redirect('/chatbox');
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/'); 
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
    
    app.get('/api/fetch_chat', (req, res) => {
        console.log("authRoute:", req.query);        
        res.send("chat response");
    });
}