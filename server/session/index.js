var session 	= require('express-session');

var init = function () {
	return session({
        path: '/',
        secret: 'very secret',
        saveUninitialized: false,
        resave:false
    });
}

module.exports = init();