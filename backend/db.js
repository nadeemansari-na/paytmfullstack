const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://codingwithna9170_db_user:koTJhtPaXCqY5iu5@cluster0.cx45irp.mongodb.net/')//new one koTJhtPaXCqY5iu5

const PaytmShema=new mongoose.Schema({username:String, firstname:String, lastname:String, password:String} )
const acountSchema=new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,//reference to akhirmodel
        ref:'akhir',
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
})


const akhir=mongoose.model('paytmstore',PaytmShema)
const account=mongoose.model('account',acountSchema)
module.exports = {
    akhir,
    account
}