const express=require('express');
const router= express.Router();
const controller=require('../Controllers/studentController');
const AuthverifyMiddeleware=require('../Middleware/AuthverifyMiddleware')
const worksModelController=require('../Controllers/WorksModelController');
//!Create Operation
router.post('/create',controller.insertData);
router.get('/login',controller.login);

//!Read Operation



//____________________read Single element________________//

// router.get('/getSingleElement/:id',controller.singleDataRead);



//!_____read All data________!//

// router.get('/readall',controller.getallData);
//_________read data using find method and promissed method____________//
router.get('/readallData',AuthverifyMiddeleware,controller.readOperation);


//!________________________Delete Data________________!//

router.delete('/deleteOne/:id',controller.deleteElement);

// router.get('/deletedata/:id',controller.deletedata);


//!________________Updata data________________!//

router.post('/update/:id',controller.updateElement);

// router.post('/updatedata/:id',controller.updateData);


//Routing end point for works model

router.post('/createWorksModel',AuthverifyMiddeleware,worksModelController.createData);
router.get('/readData/:id',AuthverifyMiddeleware,worksModelController.readData);
router.post('/updateData/:id',AuthverifyMiddeleware,worksModelController.updateData);
router.get('/deleteworksModel/:id',AuthverifyMiddeleware,worksModelController.deleteData);


module.exports=router;