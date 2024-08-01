const router = require('express').Router();
const add = require('../controller/add');
const students = require('../controller/students');
const del = require('../controller/delete');
const block = require('../controller/block');
const view = require('../controller/view');
const edit = require('../controller/edit');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth')
router.get('/students',auth, students);
router.post('/add',auth, add);
router.get('/delete/:id',auth, del);
router.get('/action/:id/:action',auth,block)
router.get('/view/:id',auth,view)
router.post('/edit/:id',auth,edit)
router.post('/login',async(req,res)=>{
    const jwt_secret_token = process.env.JWT_SECRET_TOKEN || "abcdefghijklm";
     const {username, password} = req.body;
     if (username !== "admin" || password != "123456" )
     {
        return res.status(403).json({message:"Username or password is Wrong"})
     }
     const user = {
        username:"admin",
        password:"123456"
     }
     const token = await jwt.sign(user,jwt_secret_token)
     res.status(200).json({message:"success",token:token})

})
router.get('/auth',auth,(req, res)=>{
   res.status(200).json({status:"success"})
});




module.exports = router