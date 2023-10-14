const mongoose=require('mongoose');

const dataSchema=mongoose.Schema({

    title:{type:String},
    classNote:{type:String},
    description:{type:String},
    status:{type:String},
    email:{type:String}
},
    {
        versionKey:false,
        timestamps:true
    }
)

const WorksModel=mongoose.model("ClassResources",dataSchema);
module.exports=WorksModel;