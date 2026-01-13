const zod=require('zod')

const validSchema=zod.object({
    username:zod.string().email(),
    firstname:zod.string(),
    lastname:zod.string(),
    password:zod.string().min(7)
})


module.exports={
    check:validSchema
}