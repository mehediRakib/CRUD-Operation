const studentDetails=require('../Models/studentData');
const mongoose = require("mongoose");

exports.insertData=async (req,res)=>{
    try{
        let reqbody=req.body;
        let data=await studentDetails.create(reqbody);
        res.status(200).json({
            status:200,
            data:data
        })
    }catch (e){
        res.status(200).json({
            status:"error",
            error:e.toString()
        })

    }
}

//Read operation
//
// exports.readData=async (req,res)=>{
//
//     let query={};
//     let projection="name,Dept,city";
//     studentDetails.find(query,projection,(error,data)=>{
//         if(error){
//             res.status(400).json({status:"fail",data:error.toString()})
//         }
//         else{
//             res.status(200).json({status:"fail",data:data})
//         }
//     }    )
// }




//!___________Single DATA READ OPERATION_______________!//

exports.singleDataRead=async (req,res)=>{
    const id=new mongoose.Types.ObjectId(req.params.id);

    try{
        const data=await studentDetails.aggregate([
            {$match:{_id:id}}
        ]);
        res.status(200).json({
            status:200,
            data:data
        })

    }catch (e){
        res.status(400).json({
            status:400,
            data:e.toString()
        })
    }
}





//!______Read All Data_________//

exports.getallData=async (req,res)=> {
    try {
        let data = await studentDetails.aggregate([
            {
                $project: {
                    // _id:0,
                    name: 1,
                    Dept: 1,
                    city: 1,
                    contact: 1,
                }
            }
        ])
        res.status(200).json({
            status: 'success',
            data: data
        })

    } catch (e) {
        res.status(400).json({
            status: 'fail',
            data:e.toString()
        })
    }
}




//!____________Update Operation_______________!///

exports.updateElement = async (req, res) => {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const query = { _id: id };
    const reqbody = req.body;
    console.log(reqbody);

    try {
        const data = await studentDetails.updateOne(query, reqbody);

        res.status(200).json(
            {
                status: 'success',
                data: data
            }
        );
    } catch (e) {
        res.status(400).json(
            {
                status: 'error',
                error: e.toString()
            }
        );
    } // Add a closing brace here
};




//!______________Delete Operation__________!//
exports.deleteElement=async (req,res)=>{
    const id=new mongoose.Types.ObjectId(req.params.id);

    try{
        const data=await studentDetails.deleteOne(

                {_id:id}

        )
        res.status(200).json(
            {
                status:'success',
                data:data
            }
        )
    }catch(e){
        res.status(400).json(
            {
                status:'error',
                error:e.toString()
            }
        )
    }
}

