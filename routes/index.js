var data = require('../data.json');
var dataHelper = require("../helpers/data");

/*
 * GET home page.
 */
exports.view = function(req, res){
  
  res.render('index', data);
}
