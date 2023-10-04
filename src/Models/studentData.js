const mongoose=require('mongoose');

const dataSchema=mongoose.Schema(
    {
        name: String,
        Dept: String,
        city: String,
        contact: Number,
        StuID: Number,
        UniversityName: String
    },
    {
        versionKey:false,
        timestamps:true,
    }
)
 const studentDetails= mongoose.model("studentDetails",dataSchema);
module.exports=studentDetails;