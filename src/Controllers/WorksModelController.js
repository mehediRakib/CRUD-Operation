
const worksModel=require('../Models/WorksModel');

//Create Data
exports.createData=async (req,res)=>{
    try{
        const reqbody=req.body;
        const data=await worksModel.create(reqbody);
        res.status(200).json({
            status:"success",data:data
        })
    }catch (e) {
        res.status(401).json(
            {status:"fail",error:e.toString()}
        )

    }
}

//Read Data

exports.readData=async (req,res)=>{
    try{
        const id=req.params.id;
        const result=await worksModel.find({_id:id});
        res.status(200).json({
            status:'success',
            data:result
        })

    }catch (e) {
        res.status(401).json({status:"Fail",error:e.toString()});
    }
}

//Update Data

exports.updateData=async (req,res)=>{
    const id=req.params.id;
    const reqbody=req.body;
    const query={_id:id};
    try{
        const result=await worksModel.updateOne(query,reqbody);
        res.status(200).json({status:'success',data:result});

    }
    catch (e) {
        res.status(401).json({status:'success',error:e.toString()});
    }
}


//Delete Data
exports.deleteData=async (req,res)=>{
    try{
        const id=req.params.id;
        const query={_id:id}
        const result=await worksModel.deleteOne(query);
        res.status(200).json({status:"success",data:result});

    }catch (e) {
        res.status(401).json({status:'fail',error:e.toString()})
    }
}
