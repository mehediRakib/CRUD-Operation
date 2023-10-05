const mongoose=require('mongoose');

const dataSchema=mongoose.Schema(
    {
        name: String,
        Dept: String,
        city: String,
        //custom validation process
        // contact:{
        //     type:String,
        //     validate:{
        //         validator:function (value){
        //             if(value.length===11){
        //                 return true;
        //             }
        //             else {
        //                 return false;
        //             }
        //         }
        //     },
        //     message:"11 digit number required"
        // },

        //regular expression
        contact:{
            type:String,
            validate:{
                validator:function (value){
                    return /^(?:\+88|88)?(01[3-9]\d{8})$/.test(value)
                }

            },
            message:"11 digit number required",

        },

        StuID:{
            type:Number,
        min:[6,'min 6 and maximum 100, but got {value}'],
            max:[100,'min 6 max 100 but got the {value}']
        },
        UniversityName: String
    },
    {
        versionKey:false,
        timestamps:true,
    }
)
 const studentDetails= mongoose.model("studentDetails",dataSchema);
module.exports=studentDetails;