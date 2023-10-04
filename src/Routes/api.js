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


//!________________________Delete Data________________!//

router.delete('/deleteOne/:id',controller.deleteElement);


//!________________Updata data________________!//

router.post('/update/:id',controller.updateElement);


module.exports=router;