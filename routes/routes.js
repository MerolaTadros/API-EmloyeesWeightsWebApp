const controller = require ('./../controllers/controller');
const authUser = require ('./../controllers/auth');
module.exports = function (router){

router.get('/', controller.getdefault);

router.post('/addweight', controller.addweight);

router.get('/aboutus', authUser, controller.aboutus);

router.get('/getdocs', controller.getdocs);

router.get('/getemployee/:employeeName', controller.getemployee);

router. delete('/deletebyname/:employeeName', controller.deletebyname);

router.post('/addnewdoc', controller.addnewdoc);

router.put('/updatedoc', controller. updatedoc);

router.post('/addnewuser', controller.addnewuser);

router.post('/loginuser', controller.loginuser);

}