const express = require('express')
const cors = require('cors')
const router = express.Router()

const app = express()
app.use(express.json())
app.use(router)
router.get('/',(req,res)=>{
    res.status(200).json({
        status:"success",
        data:[
            {name:"ahmad",age:22,college:"KITS"},
            {name:"mohamed",age:25,college:"SBIT"},
            {name:"akbar",age:24,college:"SGSS"},
        ]
    })
})
app.use(cors())
app.listen(7000,()=>{
    console.log('app listening at port 7000')
})