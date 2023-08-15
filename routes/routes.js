const controller = require ('./../controllers/controller');
module.exports = function (router){

router.get('/', controller.getdefault);

router.post('/addweight', controller.addweight);

router.get('/aboutus', controller.aboutus);

router.get('/getdocs', controller.getdocs);

router.get('/getemployee/:employeeName', controller.getemployee);

router. delete('/deletebyname/:employeeName', controller.deletebyname);
}