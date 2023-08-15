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
      Weight.find({}, function(err, results){
        if (err)
		      res.end(err);
		    res.json(results);
      });
    
    //res.send('You are on the getdocs route.');
  };
  exports.getemployee = function(req, res) {
    let empToFind = req.params.employeeName;
    Weight.find({empName:empToFind}, function(err, results){
    if (err)
      res.end(err);
      if(!results.length)
        res.status(404).send('We could not find that name');
      else
        res.json(results);
    });
  };
  
  exports.deletebyname = function(req, res) {
    let empToDelete = req.body.empName;
    Weight.deleteOne({empName:empToDelete}, function(err, result) {
      if (err)
        res.send(err);
      res.end('Deleted ${empToDelete}');
    });
  };
  
  
  