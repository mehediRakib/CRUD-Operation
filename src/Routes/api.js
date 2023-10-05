const express=require('express');
const router= express.Router();
const controller=require('../Controllers/studentController');
//!Create Operation
router.post('/create',controller.insertData);

//!Read Operation



//____________________read Single element________________//

router.get('/getSingleElement/:id',controller.singleDataRead);



//!_____read All data________!//

router.get('/readall',controller.getallData);
//_________read data using find method and promissed method____________//
router.get('/readallData',controller.readOperation);


//!________________________Delete Data________________!//

router.delete('/deleteOne/:id',controller.deleteElement);

router.get('/deletedata/:id',controller.deletedata);


//!________________Updata data________________!//

router.post('/update/:id',controller.updateElement);

router.post('/updatedata/:id',controller.updateData);


module.exports=router;