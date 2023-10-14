const mongoose=require('mongoose');
 let OTP=mongoose.Schema(
     {
         email:{type:String},
         otp:{type:String},
         status:{type:String}

     },{
         versionKey:false,
         timestamps:true
     }
 )
const OTPinfo=mongoose.model('OTP',OTP);
 module.exports=OTPinfo;