module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index', { title: "后台管理" });
    });

    app.get('/index', function(req, res) {
        res.render('index', { title: "后台管理" });
    });

    app.get('/popularization', function(req, res) {
        res.render('popularization');
    });

    app.get('/customer', function(req, res) {
        res.render('customer');
    });

    app.get('complain', function(req, res) {
        res.render('complain');
    })

    app.get('income', function(req, res) {
        res.render('income');
    })
}