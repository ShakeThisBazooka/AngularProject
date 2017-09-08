module.exports = (req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type, Token, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};
