

function create(app,results){
    
var port = process.env.PORT || 7789;

app.get('/', function (req, res) {
    res.send(results);
});
app.get('/index', function (req, res) {
    res.send('<h1>This is index page2</h1>');
});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});

}
exports.create = create;
