const { Router } = require('express')
const router = Router()

const mongoose = require('mongoose')
const { account } = require('../db')
const authMiddleware = require('../middleware')


//get the users balances
router.get('/getbalance', authMiddleware, async (req, res) => {

        const userbalance = await account.findOne({userid:req.userid})
        console.log(userbalance.balance)
      return  res.json({ balance:userbalance.balance})
   
})


//transfer money to the another user
router.post('/transfer', authMiddleware, async (req, res) => {
    
    const session = await mongoose.startSession()
    const amount=req.body.amount
    const to=req.body.to
    // const { amount, to } = req.body
    console.log("reached finally")
console.log("amount",amount, "to",to)
    await session.startTransaction()

    //fetch the accounts within the transaction
    const from = await account.findOne({ userid: req.userid })
    if (!from || from.balance < amount) {
        await session.abortTransaction()
        return res.json({ msg: "Insufficiant balance" })
        
    }

    const touser = await account.findOne({ userid:to })
    if (!touser) {
        await session.abortTransaction()
        return res.json({ msg: "invalid account" })
    }

    //perform the transfer
    await account.updateOne({userid:req.userid},{$inc:{balance:-amount}})
    await account.updateOne({userid:to}, { $inc: { balance: +amount } })

    //finally commit the transaction   
    await session.commitTransaction()
    res.json({msg:"money Transfer successfully"})
})

//transactions in Data Base
const transferfunds=async (fromperson,toperson,amount)=>{

}
// transferfunds()

module.exports = router