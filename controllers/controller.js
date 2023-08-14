const Weight = require('../models/employees');
exports.getdefault = function(req, res){ 
    res.send('You are on the root route.'); 
};
//
exports.aboutus=function(req, res){
    res.send('You are on the about us route.');
  };
  //
  exports.addweight=function(req, res){
    let empName = req.body.empName;
    let empWeight = req.body.empWeight;
    
    res.end('POST request made, I got ' + empName + ' and weight of ' + empWeight + ', thanks!');
  };
  //
  exports.getdocs=function(req, res){
    res.send('You are on the getdocs route.');
  };
  