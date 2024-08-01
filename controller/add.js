const db = require('../db/db');

 const add = (req, res, next) => {
   const {fullName,dob,address,gender} = req.body;
   if(!fullName || !dob || !address || !gender) {
       return res.status(422).json({error: "Please fill all the fields"});
   }
  try {
    db.query('INSERT INTO students_detail(fullName,dob,address,gender) VALUES(?,?,?,?)', [fullName,dob,address,gender], (err, result) => {
        if(err) {
            res.send(err);
        } else {
            res.status(201).json({message: "Student added successfully"});
        }
    })
  } catch (error) { 
    console.log(error);
  }
    
}
module.exports = add;