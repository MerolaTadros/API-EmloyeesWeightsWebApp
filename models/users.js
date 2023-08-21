
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Weights',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
},
(err)=> {
    if (err)
      console.log(err);
    else
      console.log('connection established');
}
);
const wSchema = new mongoose.Schema({
  empName: String,
  empPass: String,
  created: {type: Date, default: Date.now }
},{
	collection:'EmployeeUsers'
});

module.exports = mongoose.model('Users', wSchema);	
